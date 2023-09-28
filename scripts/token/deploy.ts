import { TokenRoot } from 'vasku-tip3'
import { generateRandomKeyPair, Global, SafeMultisigWallet, x0, ZERO_ADDRESS } from 'vasku'
import TokenWalletPlatformContract from 'vasku-tip3/dist/TokenWalletPlatformContent'
import { config } from '../../config'
import { printContract } from 'vasku/build/cli/actions/giver/printContract'
import TokenWalletContract from 'vasku-tip3/dist/TokenWalletContent'
import { namedKeys } from 'vasku/build/keys'

async function main(): Promise<void> {
  const wallet = new SafeMultisigWallet({ keys: await namedKeys('wallet') })
  const tokenRoot = new TokenRoot({
    initial: {
      randomNonce_: config.token.root.randomNonce,
      deployer_: ZERO_ADDRESS,
      name_: config.token.root.name,
      symbol_: config.token.root.symbol,
      decimals_: config.token.root.decimal,
      walletCode_: TokenWalletContract.code,
      rootOwner_: await wallet.address(),
      platformCode_: TokenWalletPlatformContract.code,
    },
    keys: await namedKeys('tokenRoot')
  })
  await tokenRoot.deploy(config.token.root.deployValue, {
    initialSupplyTo: ZERO_ADDRESS,
    initialSupply: 0,
    deployWalletValue: config.token.root.deployWalletValue,
    mintDisabled: false,
    burnByRootDisabled: false,
    burnPaused: false,
    remainingGasTo: await Global.giver.contract.address()
  })
  // @ts-ignore
  await printContract(tokenRoot)
  Global.client.close()
}
main().catch(console.error)
