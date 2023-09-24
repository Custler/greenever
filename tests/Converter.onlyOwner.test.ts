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

  it('terminate', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)

    const accountType = await converter.accountType()
    assert.equal(accountType, AccountType.nonExist)
  })

  it('drain', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const destination = new SafeMultisigWallet()
    const remainBalance = 0.01 * B
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.drain({
        destination: (await destination.address()).toString(),
        remainBalance
      })
    })
    await destination.wait()

    const destinationBalance = await destination.balance()
    assert.isTrue(destinationBalance > 0)
  })

  it('setOwner', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const newOwnerAddress = await createRandomAddress()
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.setOwner({ owner: newOwnerAddress })
    })
    await converter.wait()
    await owner.wait()
    const info = await converter.run.info()
    assert.equal(info.owner, newOwnerAddress)

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('setRatio', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const ratio = 2_000_000_000
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.setRatio({ ratio })
    })
    await converter.wait()
    await owner.wait()
    const info = await converter.run.info()
    assert.equal(info.ratio, ratio.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })


  it('setReceivers', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const receivers = [
      {
        wallet: await createRandomAddress(),
        share: 900_000_000
      },
      {
        wallet: await createRandomAddress(),
        share: 100_000_000
      }
    ]
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.setReceivers({ receivers })
    })
    await converter.wait()
    await owner.wait()
    const info = await converter.run.info()
    assert.equal(info.receivers.toString(), receivers.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('setWallet', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const wallet = await createRandomAddress()
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.setWallet({ wallet })
    })
    await converter.wait()
    await owner.wait()
    const info = await converter.run.info()
    assert.equal(info.wallet, wallet.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('setMinDeposit', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const minDeposit = 2 * B
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.setMinDeposit({ minDeposit })
    })
    await converter.wait()
    await owner.wait()

    const info = await converter.run.info()
    assert.equal(info.minDeposit, minDeposit.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('setTransferGas', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const coinsTransferGas = Math.random() * Math.pow(2, 16) | 0
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.setCoinsTransferGas({ coinsTransferGas })
    })
    await converter.wait()
    await owner.wait()

    const info = await converter.run.info()
    assert.equal(info.coinsTransferGas, coinsTransferGas.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('setTokensTransferGas', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const tokensTransferGas = Math.random() * Math.pow(2, 16) | 0
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.setTokensTransferGas({ tokensTransferGas })
    })
    await converter.wait()
    await owner.wait()

    const info = await converter.run.info()
    assert.equal(info.tokensTransferGas, tokensTransferGas.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })

  it('setTokenWalletDeployGas', async (): Promise<void> => {
    const owner = await createOwner()
    const converter = await createConverter({ owner: await owner.address() })

    const tokenWalletDeployGas = Math.random() * Math.pow(2, 16) | 0
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: OWNER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await converter.payload.setTokenWalletDeployGas({ tokenWalletDeployGas })
    })
    await converter.wait()
    await owner.wait()

    const info = await converter.run.info()
    assert.equal(info.tokenWalletDeployGas, tokenWalletDeployGas.toString())

    await terminateConverter(owner, converter)
    await terminateSafeMultisigWallet(owner)
  })
})
