import { TokenRoot, TokenWallet } from 'vasku-tip3'
import {
  B,
  createTransferPayload,
  delay,
  generateRandomKeyPair,
  Global,
  SafeMultisigWallet,
  x0,
  ZERO_ADDRESS
} from 'vasku'
import TokenWalletPlatformContract from 'vasku-tip3/dist/TokenWalletPlatformContent'
import { Converter } from '../build'
import TokenWalletContract from 'vasku-tip3/dist/TokenWalletContent'
import { assert } from 'chai'
import { createMultisigWallet } from './common'

const TOKEN_ROOT_DEPLOY_VALUE = 2 * B // 1 ton minimum. Hardcoded in contract
const MANAGER_DEPLOY_VALUE = 0.5 * B
const MANAGER_CALL_VALUE = 0.2 * B
const DEPLOY_TOKEN_WALLET_VALUE = 0.1 * B

describe('Converter spec', function () {
  it('convert', async (): Promise<void> => {
    const manager = await createMultisigWallet(MANAGER_DEPLOY_VALUE)
    const converter = new Converter()
    const tokenRoot = new TokenRoot({
      initial: {
        randomNonce_: (Math.random() * Math.pow(2, 16)) | 0,
        deployer_: ZERO_ADDRESS,
        name_: 'TEST',
        symbol_: 'TEST',
        decimals_: 9,
        walletCode_: TokenWalletContract.code,
        rootOwner_: await manager.address(),
        platformCode_: TokenWalletPlatformContract.code,
      },
    })
    await tokenRoot.deploy(TOKEN_ROOT_DEPLOY_VALUE, {
      initialSupplyTo: ZERO_ADDRESS,
      initialSupply: 0,
      deployWalletValue: DEPLOY_TOKEN_WALLET_VALUE,
      mintDisabled: false,
      burnByRootDisabled: false,
      burnPaused: false,
      remainingGasTo: await Global.giver.contract.address()
    })
    await manager.call.sendTransaction({
      dest: await tokenRoot.address(),
      value: MANAGER_CALL_VALUE,
      bounce: true,
      flags: 0,
      payload: await tokenRoot.payload.mint({
        amount: 100,
        recipient: await converter.address(),
        deployWalletValue: DEPLOY_TOKEN_WALLET_VALUE,
        remainingGasTo: await manager.address(),
        notify: false,
        payload: await createTransferPayload()
      })
    })
    const tokenWalletAddress = (await tokenRoot.run.walletOf({ answerId: 0, walletOwner: await converter.address() })).value0
    const tokenWallet = new TokenWallet({ address: tokenWalletAddress })
    await tokenWallet.wait()
    await manager.wait()

    // TODO
    assert.isTrue(true)
  })
})