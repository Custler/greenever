import { Global } from 'vasku'
import { config } from '../../config'
import { TokenRoot } from 'vasku-tip3'

async function main(): Promise<void> {
  const address = process.argv[process.argv.length - 1]
  const tokenRoot = new TokenRoot({ address: config.converter.tokenRoot })
  console.log((await tokenRoot.run.walletOf({
    answerId: 0,
    walletOwner: address
  })).value0)
  Global.client.close()
}
main().catch(console.error)