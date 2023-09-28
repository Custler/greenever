import { namedKeys } from 'vasku/build/keys'
import { Global, SafeMultisigWallet, x0 } from 'vasku'
import { config } from '../../config'
import { printContract } from 'vasku/build/cli/actions/giver/printContract'

async function main(): Promise<void> {
  const keys = await namedKeys('wallet')
  const wallet = new SafeMultisigWallet({ keys })
  await wallet.deploy(config.wallet.deployValue, {owners: [x0(keys.public)], reqConfirms: 1})
  await printContract(wallet)
  Global.client.close()
}
main().catch(console.error)