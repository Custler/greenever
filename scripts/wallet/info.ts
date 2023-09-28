import { namedKeys } from 'vasku/build/keys'
import { Global, SafeMultisigWallet, x0 } from 'vasku'
import { printContract } from 'vasku/build/cli/actions/giver/printContract'

async function main(): Promise<void> {
  const wallet = new SafeMultisigWallet({ keys: await namedKeys('wallet') })
  await printContract(wallet)
  Global.client.close()
}
main().catch(console.error)