# GREEN EVER

## Installation

```shell
yarn install
```
```shell
yarn env
```

Check `.env` file

## Command line options

* `<network>` - network from `vasku.config.ts`. Use `se` to test locally on SE node

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

### Send coins to giver address and deploy if giver not deployed

```shell
npx vasku giver <network> deploy
```

## Test

```shell
npx vasku test -n <network>
```
