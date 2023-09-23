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
  ratio: string | number | bigint
  balance: string | number | bigint
  recipient: string
}
type changeOwnerIn = {
  owner: string
}
type changeRatioIn = {
  ratio: string | number | bigint
}
type changeReceiversIn = {
  receivers: Array<{
    wallet: string
    share: string | number | bigint
  }>
}
type changeWalletIn = {
  wallet: string
}
type changeMinDepositIn = {
  minDeposit: string | number | bigint
}
type infoOut = {
  owner: string
  receivers: Array<{
    wallet: string
    share: string
  }>
  wallet: string
  minDeposit: string
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
  async changeOwner (input: changeOwnerIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('changeOwner', input, keys)
  }
  async changeRatio (input: changeRatioIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('changeRatio', input, keys)
  }
  async changeReceivers (input: changeReceiversIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('changeReceivers', input, keys)
  }
  async changeWallet (input: changeWalletIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('changeWallet', input, keys)
  }
  async changeMinDeposit (input: changeMinDepositIn, keys?: KeyPair): Promise<ResultOfCall> {
    return await this.contract.callMethod('changeMinDeposit', input, keys)
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
  async changeOwner (input: changeOwnerIn): Promise<string> {
    return await this.contract.createPayload('changeOwner', input)
  }
  async changeRatio (input: changeRatioIn): Promise<string> {
    return await this.contract.createPayload('changeRatio', input)
  }
  async changeReceivers (input: changeReceiversIn): Promise<string> {
    return await this.contract.createPayload('changeReceivers', input)
  }
  async changeWallet (input: changeWalletIn): Promise<string> {
    return await this.contract.createPayload('changeWallet', input)
  }
  async changeMinDeposit (input: changeMinDepositIn): Promise<string> {
    return await this.contract.createPayload('changeMinDeposit', input)
  }
  async info (): Promise<string> {
    return await this.contract.createPayload('info')
  }
}
