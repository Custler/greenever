import { SafeMultisigWallet } from 'vasku'

export async function createRandomAddress (): Promise<string> {
  return await (new SafeMultisigWallet()).address()
}