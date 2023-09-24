import { Global, SafeMultisigWallet, ZERO_ADDRESS, B, K } from 'vasku'
import { Converter } from '../../build'

const TERMINATE_CONVERTER_VALUE = 0.01 * B

type ConstructorInput = {
  owner: string
  receivers: Array<{
    wallet: string
    share: string | number | bigint
  }>
  wallet: string
  ratio: string | number | bigint
  minDeposit: string | number | bigint
  coinsTransferGas: string | number | bigint
  tokensTransferGas: string | number | bigint
  tokenWalletDeployGas: string | number | bigint
  balance: string | number | bigint
  recipient: string
}

export async function getDefaultInput (balance: number = B): Promise<ConstructorInput> {
  return {
    owner: ZERO_ADDRESS,
    receivers: [
      {
        wallet: ZERO_ADDRESS,
        share: B
      }
    ],
    wallet: ZERO_ADDRESS,
    minDeposit: B,
    coinsTransferGas: 2 * K,
    tokensTransferGas: 20 * K,
    tokenWalletDeployGas: 10 * K,
    ratio: B,
    balance: balance,
    recipient: await Global.giver.contract.address(),
  }
}

/**
 * Deploy Converter contract and return Converter object
 * @param value {number}
 * @param balance {number}
 * @param input {}
 * @return {Converter}
 */
export async function deployConverter (
  value: number,
  balance: number,
  input: any = {}
): Promise<Converter> {
  const converter = new Converter()
  const defaultInput = await getDefaultInput(balance)
  await converter.deploy(value,{ ...defaultInput, ...input })
  return converter
}

/**
 * Terminate Converter contract for owner contract and return coins to global giver
 * @param owner {SafeMultisigWallet}
 * @param converter {Converter}
 */
export async function terminateConverter (owner: SafeMultisigWallet, converter: Converter): Promise<void> {
  await owner.call.sendTransaction({
    dest: await converter.address(),
    value: TERMINATE_CONVERTER_VALUE,
    bounce: true,
    flags: 0,
    payload: await converter.payload.terminate({ destination: await Global.giver.contract.address() })
  })
}
