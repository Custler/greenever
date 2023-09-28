import { Converter } from '../build'
import { namedKeys } from 'vasku/build/keys'
import { Global } from 'vasku'

async function main(): Promise<void> {
  const keys = await namedKeys('converter')
  const converter = new Converter({ keys })
  console.log(await converter.address())
  Global.client.close()
}
main().catch(console.error)