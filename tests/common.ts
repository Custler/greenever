import { B, createTransferPayload, generateRandomKeyPair, Global, SafeMultisigWallet, x0 } from 'vasku'

export async function createMultisigWallet (
  deployValue: number = B
): Promise<SafeMultisigWallet> {
  const keys = await generateRandomKeyPair()
  const wallet = new SafeMultisigWallet({ keys })
  await wallet.deploy(deployValue, {  owners: [ x0(keys.public) ], reqConfirms: 1 })
  return wallet
}

export async function terminateMultisigWallet (safeMultisigWallet: SafeMultisigWallet): Promise<void> {
  await safeMultisigWallet.call.sendTransaction({
    dest: await Global.giver.contract.address(),
    value: 0,
    bounce: false,
    flags: 128 + 32,
    payload: await createTransferPayload()
  })
}