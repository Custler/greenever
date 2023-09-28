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

## Contract in Everscale main net

[0:c3650c4dac52a0aad77e099141164ed7d282f6d7eea9328368a9720e46dd0f6b](https://everscan.io/accounts/0:c3650c4dac52a0aad77e099141164ed7d282f6d7eea9328368a9720e46dd0f6b)

Keys

```shell
{
  "public": "618d340a9913e4ddfe6cfce92d2ea5e8150ac4afdc05dc424cc54669d6af0a09",
  "secret": "040ff77b5cf5cca710942220fe716ce1646c62feb2dcbecbb9648f8f1cfc6933"
}
```
