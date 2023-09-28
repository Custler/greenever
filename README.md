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
npx vasku test [options...] [mocha cli options...]
```

Options

* `-n, --network <network>` - network from `vasku.config.ts`. Default: `se`
* `[-c, --no-compile]` - don't compile contract before test
* `[mocha cli options...]` - see [mochajs.org](https://mochajs.org/#command-line-usage)

## Deploy converter

```shell
npx vasku run [options...] deploy
```

Options

* `-n, --network <network>` - network from `vasku.config.ts`. Default: `se`
* `[-c, --no-compile]` - don't compile contract before test

You can find converter config in `config/index.ts`

## View converter info

```shell
npx vasku run [options...] info
```

* `-n, --network <network>` - network from `vasku.config.ts`. Default: `se`
