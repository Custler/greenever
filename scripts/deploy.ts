import { TokenRoot } from 'vasku-tip3'
import { namedKeys } from 'vasku/build/keys'
import { Converter } from '../build'
import { Global } from 'vasku'
import { config } from '../config'
import { printContract } from 'vasku/build/cli/actions/giver/printContract'

async function main(): Promise<void> {
  const converter = new Converter({ keys: await namedKeys('converter') })
  const tokenRoot = new TokenRoot({ address: config.converter.tokenRoot })
  const wallet = (await tokenRoot.run.walletOf({answerId: 0, walletOwner: await converter.address() })).value0
  await converter.deploy(config.converter.deployValue, {
    owner: config.converter.data.owner,
    receivers: config.converter.data.receivers,
    wallet: wallet,
    minDeposit: config.converter.data.minDeposit,
    coinsTransferValue: config.converter.data.coinsTransferValue,
    tokensTransferValue: config.converter.data.tokensTransferValue,
    tokenWalletDeployValue: config.converter.data.tokenWalletDeployValue,
    ratio: config.converter.data.ratio,
    balance: config.converter.data.balance,
    recipient: await Global.giver.contract.address(),
  })
  // @ts-ignore
  await printContract(converter)
  Global.client.close()
}
main().catch(console.error)