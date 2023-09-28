import { TokenRoot, TokenWallet } from 'vasku-tip3'
import { createTransferPayload, Global, Contract, ZERO_ADDRESS, B, SafeMultisigWallet, K } from 'vasku'
import TokenWalletPlatformContract from 'vasku-tip3/dist/TokenWalletPlatformContent'
import { Converter } from '../build'
import TokenWalletContract from 'vasku-tip3/dist/TokenWalletContent'
import { assert } from 'chai'
import { deploySafeMultisigWallet } from './helpers/multisigWallet'

// Deploy wallets
const OWNER_DEPLOY_VALUE = B
const ALISE_DEPLOY_VALUE = 3 * B
const BOB_DEPLOY_VALUE = 4 * B

// Deploy TokeRoot
const RANDOM_NONCE = 1
const TOKEN_NAME = 'Test'
const TOKEN_SYMBOL = 'TEST'
const TOKEN_DECIMALS = 9
const TOKEN_ROOT_DEPLOY_VALUE = 2 * B // Required > 1 ever. Hardcoded in TokenRoot contract
const TOKEN_WALLET_DEPLOY_VALUE = 0.1 * B

// Deploy Converter
const CONVERTER_DEPLOY_VALUE = B
const RECEIVER10_SHARE_VALUE = 0.1 * B
const RECEIVER90_SHARE_VALUE = 0.9 * B
const MIN_DEPOSIT = B
const COINS_TRANSFER_VALUE = 0.02 * B
const TOKENS_TRANSFER_VALUE = 0.2 * B
const RATIO = 2 * B
const CONVERTER_BALANCE_AFTER_DEPLOY = 0.1 * B

// Mint initial COINs for converter
const INITIAL_COINS = 100 * B
const MINT_COINS_VALUE = 0.2 * B

// Alise buy TOKENs
const ALISE_CONVERT_VALUE = BigInt(2 * B)
const ALISE_TOKENS = BigInt(ALISE_CONVERT_VALUE) * BigInt(B) / BigInt(RATIO)

// Bob buy TOKENs
const BOB_CONVERT_VALUE = 3 * B
const BOB_TOKENS = BigInt(BOB_CONVERT_VALUE) * BigInt(B) / BigInt(RATIO)

// Up balance
const UP_BALANCE_VALUE = 0.1 * B

async function createTokenWallet (root: TokenRoot, contract: Contract): Promise<TokenWallet> {
  return new TokenWallet({
    address: (await root.run.walletOf({answerId: 0, walletOwner: await contract.address() })).value0
  })
}

describe('Converter spec', function () {
  it('convert', async (): Promise<void> => {
    const owner = await deploySafeMultisigWallet(OWNER_DEPLOY_VALUE)
    const alise = await deploySafeMultisigWallet(ALISE_DEPLOY_VALUE)
    const bob = await deploySafeMultisigWallet(BOB_DEPLOY_VALUE)
    const receiver10 = new SafeMultisigWallet()
    const receiver90 = new SafeMultisigWallet()
    const converter = new Converter()
    const tokenRoot = new TokenRoot({
      initial: {
        randomNonce_: RANDOM_NONCE,
        deployer_: ZERO_ADDRESS,
        name_: TOKEN_NAME,
        symbol_: TOKEN_SYMBOL,
        decimals_: TOKEN_DECIMALS,
        walletCode_: TokenWalletContract.code,
        rootOwner_: await owner.address(),
        platformCode_: TokenWalletPlatformContract.code,
      },
    })
    await tokenRoot.deploy(TOKEN_ROOT_DEPLOY_VALUE, {
      initialSupplyTo: ZERO_ADDRESS,
      initialSupply: 0,
      deployWalletValue: TOKEN_WALLET_DEPLOY_VALUE,
      mintDisabled: false,
      burnByRootDisabled: false,
      burnPaused: false,
      remainingGasTo: await Global.giver.contract.address()
    })
    const converterTokenWallet = await createTokenWallet(tokenRoot, converter)
    const aliseTokenWallet = await createTokenWallet(tokenRoot, alise)
    const bobTokenWallet = await createTokenWallet(tokenRoot, bob)
    await converter.deploy(CONVERTER_DEPLOY_VALUE, {
      owner: await owner.address(),
      receivers: [
        {
          wallet: await receiver10.address(),
          share: RECEIVER10_SHARE_VALUE
        },
        {
          wallet: await receiver90.address(),
          share: RECEIVER90_SHARE_VALUE
        }
      ],
      wallet: await converterTokenWallet.address(),
      minDeposit: MIN_DEPOSIT,
      coinsTransferValue: COINS_TRANSFER_VALUE,
      tokensTransferValue: TOKENS_TRANSFER_VALUE,
      tokenWalletDeployValue: TOKEN_WALLET_DEPLOY_VALUE,
      ratio: RATIO,
      balance: CONVERTER_BALANCE_AFTER_DEPLOY,
      recipient: await Global.giver.contract.address(),
    })

    await owner.call.sendTransaction({
      dest: await tokenRoot.address(),
      value: MINT_COINS_VALUE,
      bounce: true,
      flags: 0,
      payload: await tokenRoot.payload.mint({
        amount: INITIAL_COINS,
        recipient: await converter.address(),
        deployWalletValue: TOKEN_WALLET_DEPLOY_VALUE,
        remainingGasTo: await owner.address(),
        notify: false,
        payload: await createTransferPayload()
      })
    })
    await converterTokenWallet.wait()
    await owner.wait()
    const initialTokenBalance = (await converterTokenWallet.run.balance({ answerId: 0 })).value0
    assert.equal(initialTokenBalance, INITIAL_COINS.toString())

    await alise.call.sendTransaction({
      dest: await converter.address(),
      value: ALISE_CONVERT_VALUE,
      bounce: true,
      flags: 1,
      payload: await createTransferPayload()
    })
    await converter.wait()
    await receiver10.wait()
    await receiver90.wait()
    await aliseTokenWallet.wait()
    const aliseTokenWalletBalance = (await aliseTokenWallet.run.balance({ answerId: 0 })).value0
    assert.equal(aliseTokenWalletBalance, ALISE_TOKENS.toString())

    await bob.call.sendTransaction({
      dest: await converter.address(),
      value: BOB_CONVERT_VALUE,
      bounce: true,
      flags: 1,
      payload: await createTransferPayload()
    })
    await converter.wait()
    await receiver10.wait()
    await receiver90.wait()
    await bobTokenWallet.wait()
    const bobTokenWalletBalance = (await bobTokenWallet.run.balance({ answerId: 0 })).value0
    assert.equal(bobTokenWalletBalance, BOB_TOKENS.toString())

    const receiver10Balance = parseFloat((await receiver10.balance()).toString())
    const receiver90Balance = parseFloat((await receiver90.balance()).toString())
    const onChainCoefficient = receiver90Balance / receiver10Balance
    const offChainCoefficient = RECEIVER90_SHARE_VALUE / RECEIVER10_SHARE_VALUE
    const coefficientDifference = Math.abs(offChainCoefficient - onChainCoefficient)
    assert.isTrue(coefficientDifference < 0.001)

    const balance = await converter.balance()
    await owner.call.sendTransaction({
      dest: await converter.address(),
      value: UP_BALANCE_VALUE,
      bounce: true,
      flags: 1,
      payload: await converter.payload.up(),
    })
    await converter.wait()
    await owner.wait()
    assert.isTrue(await converter.balance() - balance > 0)
  })
})
