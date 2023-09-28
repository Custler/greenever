import { createTransferPayload, Global, SafeMultisigWallet } from 'vasku'
import { namedKeys } from 'vasku/build/keys'
import { printContract } from 'vasku/build/cli/actions/giver/printContract'
import { DESTROY_IF_BALANCE_IS_ZERO, TRANSFER_ALL_REMAINING_BALANCE } from '../../tests/helpers/transferFlags'

async function main(): Promise<void> {
  const wallet = new SafeMultisigWallet({ keys: await namedKeys('wallet') })
  await wallet.call.sendTransaction({
    dest: await Global.giver.contract.address(),
    value: 0,
    bounce: false,
    flags: TRANSFER_ALL_REMAINING_BALANCE + DESTROY_IF_BALANCE_IS_ZERO,
    payload: await createTransferPayload()
  })
  await printContract(wallet)
  Global.client.close()
}
main().catch(console.error)