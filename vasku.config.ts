import { Config } from 'vasku'
import * as dotenv from 'dotenv'

dotenv.config()

const config: Config = {
  /**
   * Compilation
   * Use `npx everdev sol version` to view tools version
   */
  compile: {
    /**
     * TVM compiler version
     * @see https://github.com/tonlabs/TON-Solidity-Compiler
     * @default 'latest'
     */
    compiler: '0.71.0',

    /**
     * TVM linker
     * @see https://github.com/tonlabs/TVM-linker
     * @default 'latest'
     */
    linker: '0.20.6',

    /**
     * List of source files for compilation in contract directory in **glob** format
     * @see https://github.com/isaacs/node-glob
     * @default ['**\/*.tsol', '**\/*.sol']
     */
    include: ['Converter.tsol'],

    /**
     * List of source files excluded from compilation in contracts directory in **glob** format
     * @see https://github.com/isaacs/node-glob
     * @default ['**\/interface/*', '**\/interfaces/*']
     */
    exclude: []
  },

  /**
   * Network and givers settings
   */
  networks: {
    'se': {
      /**
       * Query server GraphQL endpoints
       * URL without `/graphql` at end
       *
       * You can use public endpoints
       * @see https://evercloud.dev
       *
       * You can up own endpoint
       * @see https://github.com/tonlabs/evernode-ds
       * @see https://github.com/treeton-org/application-server
       * @default ['http://localhost']
       */
      endpoints: [process.env.SE_ENDPOINT ?? ''],

      /**
       * Giver label
       * SE givers don't need keys
       * Any user can get coins from `v2` and `v3` givers without keys. Don't use them in production
       * @type {'v2.se' | 'v3.se' | 'safeMultiSigWallet.se' | 'v2', 'v3', 'safeMultiSigWallet'}
       * @default 'v3.se'
       */
      giver: 'v3.se'
    },
    'ever mainnet': {
      endpoints: process.env.EVER_MAINNET_ENDPOINTS ? process.env.EVER_MAINNET_ENDPOINTS.split(',') : [''],
      giver: process.env.EVER_MAINNET_GIVER ?? 'safeMultiSigWallet',
      keys: {
        name: process.env.EVER_MAINNET_KEYS_NAME,
        file: process.env.EVER_MAINNET_KEYS_FILE
      }
    },
    'ever testnet': {
      endpoints: process.env.EVER_DEVNET_ENDPOINTS ? process.env.EVER_DEVNET_ENDPOINTS.split(',') : [''],
      giver: process.env.EVER_DEVNET_GIVER ?? 'safeMultiSigWallet',
      keys: {
        name: process.env.EVER_DEVNET_KEYS_NAME,
        file: process.env.EVER_DEVNET_KEYS_FILE
      }
    },
    'ever fld': {
      endpoints: process.env.EVER_FLD_ENDPOINTS ? process.env.EVER_FLD_ENDPOINTS.split(',') : [''],
      giver: process.env.EVER_FLD_GIVER ?? 'safeMultiSigWallet',
      keys: {
        name: process.env.EVER_FLD_KEYS_NAME,
        file: process.env.EVER_FLD_KEYS_FILE
      }
    },
    'venom testnet': {
      endpoints: process.env.VENOM_TESTNET_ENDPOINTS ? process.env.VENOM_TESTNET_ENDPOINTS.split(',') : [''],
      giver: process.env.VENOM_TESTNET_GIVER ?? 'safeMultiSigWallet',
      keys: {
        name: process.env.VENOM_TESTNET_KEYS_NAME,
        file: process.env.VENOM_TESTNET_KEYS_FILE,
      }
    },
    'venom devnet': {
      endpoints: process.env.VENOM_DEVNET_ENDPOINTS ? process.env.VENOM_DEVNET_ENDPOINTS.split(',') : [''],
      giver: process.env.VENOM_DEVNET_GIVER ?? 'safeMultiSigWallet',
      keys: {
        name: process.env.VENOM_DEVNET_KEYS_NAME,
        file: process.env.VENOM_DEVNET_KEYS_FILE
      }
    }
  },

  /**
   * Node Simple Emulator
   * @see https://github.com/tonlabs/everdev/blob/main/docs/command-line-interface/evernode-platform-startup-edition-se.md
   */
  se: {
    /**
     * SE version
     * @default 'latest'
     */
    version: 'latest',

    /**
     * Port on localhost used to expose GraphQL API
     * @default 8080
     */
    port: 8080,

    /**
     * Port on localhost used to expose ArangoDB API
     * @default 'none'
     */
    dbPort: 'none',

    /**
     * Local node instance name. If you not up instance before use `default` or `*`.
     * @default 'default'
     */
    instance: 'default'
  },

  /**
   * Relative paths
   */
  paths: {
    /**
     * Path to contracts directory
     * @default 'contracts'
     */
    contracts: 'contracts',

    /**
     * Path to compilation cache directory
     * @default 'cache'
     */
    cache: 'cache',

    /**
     * Path to compiled contracts directory
     * @default 'build'
     */
    build: 'build',

    /**
     * Path to contract keys directory
     * @default 'keys'
     */
    keys: 'keys',

    /**
     * Path to tests directory
     * @default 'tests'
     */
    tests: 'tests'
  }
}
export default config
