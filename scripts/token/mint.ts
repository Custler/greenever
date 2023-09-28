import { TokenRoot, TokenWallet } from 'vasku-tip3'
import {
  Contract,
  createTransferPayload,
  Global,
  SafeMultisigWallet,
  ZERO_ADDRESS
} from 'vasku'
import TokenWalletPlatformContract from 'vasku-tip3/dist/TokenWalletPlatformContent'
import { config } from '../../config'
import { printContract } from 'vasku/build/cli/actions/giver/printContract'
import TokenWalletContract from 'vasku-tip3/dist/TokenWalletContent'
import { namedKeys } from 'vasku/build/keys'

async function main(): Promise<void> {
  const destination = process.argv[process.argv.length - 2]
  const value = process.argv[process.argv.length - 1]
  const contract = new Contract({ address: destination })

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
  await wallet.call.sendTransaction({
    dest: await tokenRoot.address(),
    value: config.token.mint.callValue,
    bounce: true,
    flags: 0,
    payload: await tokenRoot.payload.mint({
      amount: value,
      recipient: await contract.address(),
      deployWalletValue: config.token.root.deployWalletValue,
      remainingGasTo: await wallet.address(),
      notify: false,
      payload: await createTransferPayload()
    })
  })
  await contract.wait()
  await wallet.wait()

  const tokenWallet = new TokenWallet({
    address: (await tokenRoot.run.walletOf({answerId: 0, walletOwner: await contract.address() })).value0
  })
  const balance = (await tokenWallet.run.balance({ answerId: 0 })).value0
  console.log(`Tokens: ${balance}`)
  // @ts-ignore
  await printContract(tokenWallet)
  Global.client.close()
}
main().catch(console.error)
