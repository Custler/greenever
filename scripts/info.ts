import { Converter } from '../build'
import { namedKeys } from 'vasku/build/keys'
import { Global } from 'vasku'
import { printContract } from 'vasku/build/cli/actions/giver/printContract'

async function main(): Promise<void> {
  const converter = new Converter({ keys: await namedKeys('converter') })
  await printContract(converter)
  Global.client.close()
}
main().catch(console.error)