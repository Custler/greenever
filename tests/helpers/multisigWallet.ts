import { createTransferPayload, generateRandomKeyPair, Global, SafeMultisigWallet, x0 } from 'vasku'
import { DESTROY_IF_BALANCE_IS_ZERO, TRANSFER_ALL_REMAINING_BALANCE } from './transferFlags'

/**
 * Deploy SafeMultisigWallet contract and return SafeMultisigWallet object
 * @param value {number}
 * @return {SafeMultisigWallet}
 */
export async function deploySafeMultisigWallet (value: number): Promise<SafeMultisigWallet> {
  const keys = await generateRandomKeyPair()
  const wallet = new SafeMultisigWallet({ keys })
  await wallet.deploy(value, {  owners: [ x0(keys.public) ], reqConfirms: 1 })
  return wallet
}

/**
 * Terminate SafeMultisigWallet contract and return coins to global giver
 * @param safeMultisigWallet {SafeMultisigWallet}
 */
export async function terminateSafeMultisigWallet (safeMultisigWallet: SafeMultisigWallet): Promise<void> {
  await safeMultisigWallet.call.sendTransaction({
    dest: await Global.giver.contract.address(),
    value: 0,
    bounce: false,
    flags: TRANSFER_ALL_REMAINING_BALANCE + DESTROY_IF_BALANCE_IS_ZERO,
    payload: await createTransferPayload()
  })
}