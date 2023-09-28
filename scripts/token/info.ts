import { namedKeys } from 'vasku/build/keys'
import { Global, SafeMultisigWallet, x0, ZERO_ADDRESS } from 'vasku'
import { printContract } from 'vasku/build/cli/actions/giver/printContract'
import { TokenRoot } from 'vasku-tip3'
import { config } from '../../config'
import TokenWalletContract from 'vasku-tip3/dist/TokenWalletContent'
import TokenWalletPlatformContract from 'vasku-tip3/dist/TokenWalletPlatformContent'

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
  // @ts-ignore
  await printContract(tokenRoot)
  Global.client.close()
}
main().catch(console.error)