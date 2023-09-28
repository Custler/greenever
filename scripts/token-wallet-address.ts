import { Converter } from '../build'
import { namedKeys } from 'vasku/build/keys'
import { Global } from 'vasku'
import { config } from '../config'
import { TokenRoot } from 'vasku-tip3'

async function main(): Promise<void> {
  const keys = await namedKeys('converter')
  const converter = new Converter({ keys })
  const tokenRoot = new TokenRoot({ address: config.tokenRoot })
  console.log((await tokenRoot.run.walletOf({
    answerId: 0,
    walletOwner: await converter.address()
  })).value0)
  Global.client.close()
}
main().catch(console.error)