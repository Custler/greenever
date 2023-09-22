import { assert, expect } from 'chai'
import { Converter } from '../build'
import { AccountType, B, generateRandomKeyPair, SafeMultisigWallet, x0 } from 'vasku'

describe('Converter', function () {
  it('deploy', async (): Promise<void> => {
    const converter = new Converter()
    await converter.deploy(0.1 * B, {
      owner: (await (new SafeMultisigWallet()).address()).toString(),
      ratio: 1_000_000_000,
      receivers: [
        {
          wallet: (await (new SafeMultisigWallet()).address()).toString(),
          share: 1_000_000_000
        }
      ]
    })
    const accountType = await converter.accountType()
    assert.equal(accountType, AccountType.active)
  })

  it('get info', async (): Promise<void> => {
    const constructorInput = {
      owner: (await (new SafeMultisigWallet()).address()).toString(),
      ratio: 1_000_000_000,
      receivers: [
        {
          wallet: (await (new SafeMultisigWallet()).address()).toString(),
          share: 1_000_000_000
        }
      ]
    }
    const converter = new Converter()
    await converter.deploy(0.1 * B, constructorInput)
    const info = await converter.run.info()
    assert.equal(info.owner, constructorInput.owner)
    assert.equal(info.ratio, constructorInput.ratio.toString())
    assert.equal(info.receivers.toString(), constructorInput.receivers.toString())
  })

  it('change owner', async (): Promise<void> => {
    const ratio = 1_000_000_000

    const ownerKeys = await generateRandomKeyPair()
    const ownerWallet = new SafeMultisigWallet({ keys: ownerKeys })
    await ownerWallet.deploy(0.2 * B, {  owners: [ x0(ownerKeys.public) ], reqConfirms: 1 })
    const ownerAddress = (await ownerWallet.address()).toString()

    const newOwnerWallet = new SafeMultisigWallet()
    const newOwnerAddress = (await newOwnerWallet.address()).toString()

    const converter = new Converter()
    await converter.deploy(0.1 * B, {
      owner: ownerAddress,
      ratio: 1_000_000_000,
      receivers: [
        {
          wallet: (await (new SafeMultisigWallet()).address()).toString(),
          share: 1_000_000_000
        }
      ]
    })
    await ownerWallet.call.sendTransaction({
      dest: await converter.address(),
      value: 0.1 * B,
      bounce: true,
      flags: 0,
      payload: await converter.payload.changeOwner({ owner: newOwnerAddress })
    }, ownerKeys)
    await converter.wait()

    const info = await converter.run.info()
    assert.equal(info.owner, newOwnerAddress)
  })

  it('change ratio', async (): Promise<void> => {
    const newRatio = 2_000_000_000

    const ownerKeys = await generateRandomKeyPair()
    const ownerWallet = new SafeMultisigWallet({ keys: ownerKeys })
    await ownerWallet.deploy(0.2 * B, {  owners: [ x0(ownerKeys.public) ], reqConfirms: 1 })
    const ownerAddress = (await ownerWallet.address()).toString()

    const converter = new Converter()
    await converter.deploy(0.1 * B, {
      owner: ownerAddress,
      ratio: 1_000_000_000,
      receivers: [
        {
          wallet: (await (new SafeMultisigWallet()).address()).toString(),
          share: 1_000_000_000
        }
      ]
    })
    await ownerWallet.call.sendTransaction({
      dest: await converter.address(),
      value: 0.1 * B,
      bounce: true,
      flags: 0,
      payload: await converter.payload.changeRatio({ ratio: newRatio })
    }, ownerKeys)
    await converter.wait()

    const info = await converter.run.info()
    assert.equal(info.ratio, newRatio.toString())
  })

  it('change receivers', async (): Promise<void> => {
    const newReceivers = [
      {
        wallet: (await (new SafeMultisigWallet()).address()).toString(),
        share: 900_000_000
      },
      {
        wallet: (await (new SafeMultisigWallet()).address()).toString(),
        share: 100_000_000
      }
    ]

    const ownerKeys = await generateRandomKeyPair()
    const ownerWallet = new SafeMultisigWallet({ keys: ownerKeys })
    await ownerWallet.deploy(0.2 * B, {  owners: [ x0(ownerKeys.public) ], reqConfirms: 1 })
    const ownerAddress = (await ownerWallet.address()).toString()

    const converter = new Converter()
    await converter.deploy(0.1 * B, {
      owner: ownerAddress,
      ratio: 1_000_000_000,
      receivers: [
        {
          wallet: (await (new SafeMultisigWallet()).address()).toString(),
          share: 1_000_000_000
        }
      ]
    })
    await ownerWallet.call.sendTransaction({
      dest: await converter.address(),
      value: 0.1 * B,
      bounce: true,
      flags: 0,
      payload: await converter.payload.changeReceivers({ receivers: newReceivers })
    }, ownerKeys)
    await converter.wait()

    const info = await converter.run.info()
    assert.equal(info.receivers.toString(), newReceivers.toString())
  })

  it('invalid receivers share: error 102', async (): Promise<void> => {
    const converter = new Converter()

    try {
      await converter.deploy(0.1 * B, {
        owner: (await (new SafeMultisigWallet()).address()).toString(),
        ratio: 1_000_000_000,
        receivers: [
          {
            wallet: (await (new SafeMultisigWallet()).address()).toString(),
            share: 500_000_000
          }
        ]
      })
    }
    catch (error: any) {
      assert.equal(error.data.exit_code, 102)
    }
  })
})