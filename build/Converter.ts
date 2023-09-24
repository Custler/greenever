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
  coinsTransferGas: string | number | bigint
  tokensTransferGas: string | number | bigint
  tokenWalletDeployGas: string | number | bigint
  ratio: string | number | bigint
  balance: string | number | bigint
  recipient: string
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
type setCoinsTransferGasIn = {
  coinsTransferGas: string | number | bigint
}
type setTokensTransferGasIn = {
  tokensTransferGas: string | number | bigint
}
type setTokenWalletDeployGasIn = {
  tokenWalletDeployGas: string | number | bigint
}
type terminateIn = {
  destination: string
}
type infoOut = {
  owner: string
  receivers: Array<{
    wallet: string
    share: string
  }>
  wallet: string
  minDeposit: string
  coinsTransferGas: string
  tokensTransferGas: string
  tokenWalletDeployGas: string
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
  async convert (keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('convert', {}, keys)
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
  async setCoinsTransferGas (input: setCoinsTransferGasIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setCoinsTransferGas', input, keys)
  }
  async setTokensTransferGas (input: setTokensTransferGasIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setTokensTransferGas', input, keys)
  }
  async setTokenWalletDeployGas (input: setTokenWalletDeployGasIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('setTokenWalletDeployGas', input, keys)
  }
  async terminate (input: terminateIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('terminate', input, keys)
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
  async convert (): Promise<string> {
    return await this.contract.createPayload('convert')
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
  async setCoinsTransferGas (input: setCoinsTransferGasIn): Promise<string> {
    return await this.contract.createPayload('setCoinsTransferGas', input)
  }
  async setTokensTransferGas (input: setTokensTransferGasIn): Promise<string> {
    return await this.contract.createPayload('setTokensTransferGas', input)
  }
  async setTokenWalletDeployGas (input: setTokenWalletDeployGasIn): Promise<string> {
    return await this.contract.createPayload('setTokenWalletDeployGas', input)
  }
  async terminate (input: terminateIn): Promise<string> {
    return await this.contract.createPayload('terminate', input)
  }
  async info (): Promise<string> {
    return await this.contract.createPayload('info')
  }
}
