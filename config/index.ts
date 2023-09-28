import { B, K } from 'vasku'

export const config = {
  wallet: {
    deployValue: 5 * B
  },
  token: {
    root: {
      randomNonce: 2,
      name: 'Test',
      symbol: 'TEST',
      decimal: 9,
      deployValue: 2 * B, // Required > 1 ever. Hardcoded in TokenRoot contract
      deployWalletValue: 0.1 * B
    },
    mint: {
      callValue: 0.5 * B
    }
  },
  converter: {
    tokenRoot: "0:1b97906ab8cdd21ddc7f7267d2cd57e4174ae7e5e9e5eade971f291f2a71ebf5",
    deployValue: B,
    data: {
      owner: "0:89163cee6448507a8aa66c8452a31d5f0d774b92da0ed07cf7a118de9b06f8cb",
      receivers: [
        // Charitable fund - 10%
        {
          wallet: '0:d609c105cb87ea4e78341968e86d326c8daebbfd03629dcc0c5c098206349224',
          share: 10e7
        },

        // Director's Fund - 1%
        {
          wallet: '0:97fede03ce1232116a43402ab8f1dab7cbb85639c44e8d9241e4e4f6ac6e2210',
          share: 1e7
        },

        // Promotion fund - 10%
        {
          wallet: '0:5210528bc9f67745d9ef3fc5b3038342c1e755ca5d38f550f991ecd0400694a7',
          share: 10e7
        },

        // Technical Support - 1%
        {
          wallet: '0:66d638126db3157f585013c105fa168a1544b41bc8f25538bac38b3ac82c13fc',
          share: 1e7
        },

        // Development fund - 78%
        {
          wallet: '0:d834d6e2a26717e8f5f735d614d80059c34723702096754173cfc25e189e28e0',
          share: 78e7
        }
      ],
      minDeposit: B,
      coinsTransferValue: 0.02 * B,
      tokensTransferValue: 0.2 * B,
      tokenWalletDeployValue: 0.1 * B,
      ratio: 0.125 * B,
      balance: 0.1 * B,
    }
  }
}
