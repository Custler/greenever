# GREEN EVER

## Installation

```shell
yarn install
```
```shell
yarn env
```

Check `.env` file

## Compile

```shell
npx vasku compile
```

## Giver

Giver required for **tests** and **scripts**

### Check giver info

```shell
npx vasku giver <network> info
```

* `<network>` - network from `vasku.config.ts`. Default: `se`

### Send coins to giver address and deploy if giver not deployed

```shell
npx vasku giver <network> deploy
```

* `<network>` - network from `vasku.config.ts`. Default: `se`

## Test

```shell
npx vasku test -n <network> [-c, --no-compile] [mocha cli options...]
```

* `<network>` - network from `vasku.config.ts`. Default: `se`
* `[-c, --no-compile]` - don't compile contract before test
* `[mocha cli options...]` - Mocha CLI options. See [mochajs.org](https://mochajs.org/#command-line-usage)

## View converter address

```shell
npx vasku run address
```

## View converter token wallet address

```shell
npx vasku run -n <network> token-wallet-address
```

* `<network>` - network from `vasku.config.ts`. Default: `se`
