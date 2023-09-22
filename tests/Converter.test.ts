import { assert } from 'chai'
import { Converter } from '../build'
import {
  AccountType,
  B,
  createTransferPayload,
  generateRandomKeyPair,
  Global,
  SafeMultisigWallet,
  x0,
  ZERO_ADDRESS
} from 'vasku'

const CONVERTER_DEPLOY_VALUE = 0.1 * B
const CONVERTER_BALANCE_VALUE = 0.01 * B
const OWNER_DEPLOY_VALUE = 0.2 * B
const OWNER_CALL_VALUE = 0.1 * B

type ConstructorInput = {
  owner: string
  ratio: string | number | bigint
  receivers: Array<{
    wallet: string
    share: string | number | bigint
  }>
  balance: string | number | bigint
  recipient: string
}

async function getConverterConstructorInput (): Promise<ConstructorInput> {
  return {
    owner: ZERO_ADDRESS,
    ratio: 1e9,
    receivers: [
      {
        wallet: ZERO_ADDRESS,
        share: 1e9
      }
    ],
    balance: CONVERTER_BALANCE_VALUE,
    recipient: await Global.giver.contract.address()
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

async function createOwner (
  deployValue: number = OWNER_DEPLOY_VALUE
): Promise<SafeMultisigWallet> {
  const keys = await generateRandomKeyPair()
  const wallet = new SafeMultisigWallet({ keys })
  await wallet.deploy(deployValue, {  owners: [ x0(keys.public) ], reqConfirms: 1 })
  return wallet
}

async function terminateOwner (owner: SafeMultisigWallet): Promise<void> {
  await owner.call.sendTransaction({
    dest: await Global.giver.contract.address(),
    value: 0,
    bounce: false,
    flags: 128 + 32,
    payload: await createTransferPayload()
  })
}

async function createRandomAddress (): Promise<string> {
  return await (new SafeMultisigWallet()).address()
}

describe('Converter', function () {
  it('deploy and get info', async (): Promise<void> => {
    const input = await getConverterConstructorInput()
    const converter = await createConverter(input)
    const accountType = await converter.accountType()
    const info = await converter.run.info()
    assert.equal(accountType, AccountType.active)
    assert.equal(info.owner, input.owner)
    assert.equal(info.ratio, input.ratio.toString())
    assert.equal(info.receivers.toString(), input.receivers.toString())
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
    await terminateOwner(owner)

    const info = await converter.run.info()
    assert.equal(info.owner, newOwnerAddress)
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
    await terminateOwner(owner)

    const info = await converter.run.info()
    assert.equal(info.ratio, newRatio.toString())
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
    await terminateOwner(owner)

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
})