import { type CompiledContractConfig, Contract, type ContractOptions, type ResultOfCall } from 'vasku'
import { type KeyPair, type ResultOfProcessMessage } from '@eversdk/core'
import ConverterContent from './ConverterContent'
type constructorIn = {
  owner: string
  receivers: Array<{
    wallet: string
    share: string | number | bigint
  }>
  wallet: string
  minDeposit: string | number | bigint
  coinsTransferValue: string | number | bigint
  tokensTransferValue: string | number | bigint
  tokenWalletDeployValue: string | number | bigint
  ratio: string | number | bigint
  balance: string | number | bigint
  recipient: string
}
type terminateIn = {
  destination: string
}
type withdrawTokensIn = {
  destination: string
  amount: string | number | bigint
}
type drainIn = {
  destination: string
  remainBalance: string | number | bigint
}
type setOwnerIn = {
  owner: string
}
type setRatioIn = {
  ratio: string | number | bigint
}
type setReceiversIn = {
  receivers: Array<{
    wallet: string
    share: string | number | bigint
  }>
}
type setWalletIn = {
  wallet: string
}
type setMinDepositIn = {
  minDeposit: string | number | bigint
}
type setCoinsTransferValueIn = {
  coinsTransferValue: string | number | bigint
}
type setTokensTransferValueIn = {
  tokensTransferValue: string | number | bigint
}
type setTokenWalletDeployValueIn = {
  tokenWalletDeployValue: string | number | bigint
}
type infoOut = {
  owner: string
  receivers: Array<{
    wallet: string
    share: string
  }>
  wallet: string
  minDeposit: string
  coinsTransferValue: string
  tokensTransferValue: string
  tokenWalletDeployValue: string
  ratio: string
}

export class Converter extends Contract {
  private readonly _call: ConverterCalls
  private readonly _run: ConverterRuns
  private readonly _payload: ConverterPayload
  constructor (config: CompiledContractConfig = {}, options: ContractOptions = {}) {
    if (config.address === undefined)
      super({
        abi: ConverterContent.abi,
        initial: config.initial ?? {},
        keys: config.keys,
        tvc: ConverterContent.tvc
      }, options)
    else
      super({
        address: config.address,
        abi: ConverterContent.abi
      }, options)
    this._call = new ConverterCalls(this)
    this._run = new ConverterRuns(this)
    this._payload = new ConverterPayload(this)
  }
  async deploy (
    value: string | number | bigint,
    input: constructorIn,
    useGiver: boolean = true,
    timeout: number = 60000
  ): Promise<ResultOfProcessMessage> {
    return await this._deploy(value, input, useGiver, timeout)
  }
  get call (): ConverterCalls {
    return this._call
  }
  get run (): ConverterRuns {
    return this._run
  }
  get payload (): ConverterPayload {
    return this._payload
  }
}
class ConverterCalls {
  constructor (private readonly contract: Contract) {}
  async up (keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('up', {}, keys)
  }
  async terminate (input: terminateIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('terminate', input, keys)
  }
  async withdrawTokens (input: withdrawTokensIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('withdrawTokens', input, keys)
  }
  async drain (input: drainIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('drain', input, keys)
  }
  async setOwner (input: setOwnerIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setOwner', input, keys)
  }
  async setRatio (input: setRatioIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setRatio', input, keys)
  }
  async setReceivers (input: setReceiversIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setReceivers', input, keys)
  }
  async setWallet (input: setWalletIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setWallet', input, keys)
  }
  async setMinDeposit (input: setMinDepositIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setMinDeposit', input, keys)
  }
  async setCoinsTransferValue (input: setCoinsTransferValueIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setCoinsTransferValue', input, keys)
  }
  async setTokensTransferValue (input: setTokensTransferValueIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setTokensTransferValue', input, keys)
  }
  async setTokenWalletDeployValue (input: setTokenWalletDeployValueIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setTokenWalletDeployValue', input, keys)
  }
  async info (keys?: KeyPair): Promise<ResultOfCall & { out: infoOut }> {
    return await this.contract.callMethod('info', {}, keys)
  }
}
class ConverterRuns {
  constructor (private readonly contract: Contract) {}
  async info (): Promise<infoOut> {
    return (await this.contract.runMethod('info')).value
  }
}
class ConverterPayload {
  constructor (private readonly contract: Contract) {}
  async up (): Promise<string> {
    return await this.contract.createPayload('up')
  }
  async terminate (input: terminateIn): Promise<string> {
    return await this.contract.createPayload('terminate', input)
  }
  async withdrawTokens (input: withdrawTokensIn): Promise<string> {
    return await this.contract.createPayload('withdrawTokens', input)
  }
  async drain (input: drainIn): Promise<string> {
    return await this.contract.createPayload('drain', input)
  }
  async setOwner (input: setOwnerIn): Promise<string> {
    return await this.contract.createPayload('setOwner', input)
  }
  async setRatio (input: setRatioIn): Promise<string> {
    return await this.contract.createPayload('setRatio', input)
  }
  async setReceivers (input: setReceiversIn): Promise<string> {
    return await this.contract.createPayload('setReceivers', input)
  }
  async setWallet (input: setWalletIn): Promise<string> {
    return await this.contract.createPayload('setWallet', input)
  }
  async setMinDeposit (input: setMinDepositIn): Promise<string> {
    return await this.contract.createPayload('setMinDeposit', input)
  }
  async setCoinsTransferValue (input: setCoinsTransferValueIn): Promise<string> {
    return await this.contract.createPayload('setCoinsTransferValue', input)
  }
  async setTokensTransferValue (input: setTokensTransferValueIn): Promise<string> {
    return await this.contract.createPayload('setTokensTransferValue', input)
  }
  async setTokenWalletDeployValue (input: setTokenWalletDeployValueIn): Promise<string> {
    return await this.contract.createPayload('setTokenWalletDeployValue', input)
  }
  async info (): Promise<string> {
    return await this.contract.createPayload('info')
  }
}
