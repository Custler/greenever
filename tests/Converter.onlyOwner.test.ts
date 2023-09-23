import { assert } from 'chai'
import {
  AccountType,
  SafeMultisigWallet,
  B
} from 'vasku'
import {
  deployConverter,
  getDefaultInput,
  terminateConverter
} from './helpers/converter'
import {
  deploySafeMultisigWallet,
  terminateSafeMultisigWallet
} from './helpers/multisigWallet'
import { Converter } from '../build'
import { createRandomAddress } from './helpers/utils'

const OWNER_DEPLOY_VALUE = B
const CONVERTER_DEPLOY_VALUE = B
const CONVERTER_BALANCE = 0.1 * B
const OWNER_CALL_VALUE = 0.5 * B

async function createOwner (): Promise<SafeMultisigWallet> {
  return await deploySafeMultisigWallet(OWNER_DEPLOY_VALUE)
}

async function createConverter (input: any = {}): Promise<Converter> {
  return await deployConverter(CONVERTER_DEPLOY_VALUE, CONVERTER_BALANCE, input)
}

describe('Converter owner', function () {
  it('deploy and get info', async (): Promise<void> => {
    const owner = await createOwner()
    const input = {
      ...await getDefaultInput(CONVERTER_BALANCE),
      ...{ owner: await owner.address() }
    }
    const converter = await createConverter(input)

    const accountType = await converter.accountType()
    assert.equal(accountType, AccountType.active)

    const info = await converter.run.info()
    assert.equal(info.owner, input.owner)
    assert.equal(info.receivers.toString(), input.receivers.toString())
    assert.equal(info.wallet, input.wallet.toString())
    assert.equal(info.minDeposit, input.minDeposit.toString())
    assert.equal(info.ratio, input.ratio.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('terminate', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)

    const accountType = await converter.accountType()
    assert.equal(accountType, AccountType.nonExist)
  })

  it('change owner', async (): Promise<void> => {
    const owner = await createOwner()
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
    const info = await converter.run.info()
    assert.equal(info.owner, newOwnerAddress)

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('change ratio', async (): Promise<void> => {
    const owner = await createOwner()
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
    const info = await converter.run.info()
    assert.equal(info.ratio, newRatio.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })


  it('change receivers', async (): Promise<void> => {
    const owner = await createOwner()
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
    const info = await converter.run.info()
    assert.equal(info.receivers.toString(), newReceivers.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
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
    const owner = await createOwner()
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
    const info = await converter.run.info()
    assert.equal(info.wallet, newWallet.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('change minDeposit', async (): Promise<void> => {
    const owner = await createOwner()
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

    const info = await converter.run.info()
    assert.equal(info.minDeposit, minDeposit.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })
})