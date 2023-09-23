import { assert } from 'chai'
import { Converter } from '../build'
import { AccountType, Global, SafeMultisigWallet, ZERO_ADDRESS, B } from 'vasku'
import { createMultisigWallet, terminateMultisigWallet } from './common'

const CONVERTER_DEPLOY_VALUE = 0.1 * B
const CONVERTER_BALANCE_VALUE = 0.01 * B
const OWNER_CALL_VALUE = 0.1 * B

type ConstructorInput = {
  owner: string
  receivers: Array<{
    wallet: string
    share: string | number | bigint
  }>
  wallet: string
  ratio: string | number | bigint
  minDeposit: string | number | bigint
  balance: string | number | bigint
  recipient: string
}

async function getConverterConstructorInput (): Promise<ConstructorInput> {
  return {
    owner: ZERO_ADDRESS,
    receivers: [
      {
        wallet: ZERO_ADDRESS,
        share: B
      }
    ],
    wallet: ZERO_ADDRESS,
    minDeposit: B,
    ratio: B,
    balance: CONVERTER_BALANCE_VALUE,
    recipient: await Global.giver.contract.address(),
  }
}

async function createConverter (
  constructorInput: any = undefined,
  deployValue: number = CONVERTER_DEPLOY_VALUE
): Promise<Converter> {
  const converter = new Converter()
  const input = await getConverterConstructorInput()
  await converter.deploy(deployValue,constructorInput === undefined ? input : { ...input, ...constructorInput })
  return converter
}

async function createRandomAddress (): Promise<string> {
  return await (new SafeMultisigWallet()).address()
}

describe('Converter owner', function () {
  it('deploy and get info', async (): Promise<void> => {
    const input = await getConverterConstructorInput()
    const converter = await createConverter(input)
    const accountType = await converter.accountType()
    const info = await converter.run.info()
    assert.equal(accountType, AccountType.active)
    assert.equal(info.owner, input.owner)
    assert.equal(info.receivers.toString(), input.receivers.toString())
    assert.equal(info.wallet, input.wallet.toString())
    assert.equal(info.minDeposit, input.minDeposit.toString())
    assert.equal(info.ratio, input.ratio.toString())
  })

  it('change owner', async (): Promise<void> => {
    const owner = await createMultisigWallet()
    const converter = await createConverter({ owner: await owner.address() })

    const newOwnerAddress = await createRandomAddress()
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.changeOwner({ owner: newOwnerAddress })
    })
    await converter.wait()
    await owner.wait()
    await terminateMultisigWallet(owner)

    const info = await converter.run.info()
    assert.equal(info.owner, newOwnerAddress)
  })

  it('change ratio', async (): Promise<void> => {
    const owner = await createMultisigWallet()
    const converter = await createConverter({ owner: await owner.address() })

    const newRatio = 2_000_000_000
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.changeRatio({ ratio: newRatio })
    })
    await converter.wait()
    await owner.wait()
    await terminateMultisigWallet(owner)

    const info = await converter.run.info()
    assert.equal(info.ratio, newRatio.toString())
  })

  it('change receivers', async (): Promise<void> => {
    const owner = await createMultisigWallet()
    const converter = await createConverter({ owner: await owner.address() })

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
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.changeReceivers({ receivers: newReceivers })
    })
    await converter.wait()
    await owner.wait()
    await terminateMultisigWallet(owner)

    const info = await converter.run.info()
    assert.equal(info.receivers.toString(), newReceivers.toString())
  })

  it('invalid receivers share: error 102', async (): Promise<void> => {
    try {
      await createConverter({ receivers: [
        {
          wallet: await createRandomAddress(),
          share: 500_000_000
        }
      ]})
    }
    catch (error: any) {
      assert.equal(error.data.exit_code, 102)
    }
  })

  it('change wallet', async (): Promise<void> => {
    const owner = await createMultisigWallet()
    const converter = await createConverter({ owner: await owner.address() })

    const newWallet = await createRandomAddress()
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.changeWallet({ wallet: newWallet })
    })
    await converter.wait()
    await owner.wait()
    await terminateMultisigWallet(owner)

    const info = await converter.run.info()
    assert.equal(info.wallet, newWallet.toString())
  })

  it('change minDeposit', async (): Promise<void> => {
    const owner = await createMultisigWallet()
    const converter = await createConverter({ owner: await owner.address() })

    const minDeposit = 2 * B
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.changeMinDeposit({ minDeposit: minDeposit })
    })
    await converter.wait()
    await owner.wait()
    await terminateMultisigWallet(owner)

    const info = await converter.run.info()
    assert.equal(info.minDeposit, minDeposit.toString())
  })
})