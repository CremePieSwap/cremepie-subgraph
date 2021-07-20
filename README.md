# CremePie Subgraph

This repository has been forked from [UniswapV2]()

This subgraph dynamically tracks any pair created by the CremePie factory. It tracks of the current state of CremePie contracts, and contains derived stats for things like historical data and USD prices.

- aggregated data across pairs and tokens,
- data on individual pairs and tokens,
- data on transactions
- data on liquidity providers
- historical data on CremePie, pairs or tokens, aggregated by day

## Running Locally

Clone this repo then run the following steps locally to generate files, build, then deploy your subgraph.

You will need to have created the Subgraph within the [dashboard](https://thegraph.com/explorer/dashboard).

You can also get your auth token from the same location.

``` bash
yarn && yarn codegen

yarn build

export GRAPH_TOKEN=<auth_token>
export GITHUB_USER=<github_username>
export SUBGRAPH_NAME=<subgraph_name>
```

## Key Entity Overviews

#### CremePieFactory

Contains data across all of CremePie V2. This entity tracks important things like total liquidity (in ETH and USD, see below), all time volume, transaction count, number of pairs and more.

#### Token

Contains data on a specific token. This token specific data is aggregated across all pairs, and is updated whenever there is a transaction involving that token.

#### Pair

Contains data on a specific pair.

#### Transaction

Every transaction on CremePie is stored. Each transaction contains an array of mints, burns, and swaps that occured within it.

#### Mint, Burn, Swap

These contain specifc information about a transaction. Things like which pair triggered the transaction, amounts, sender, recipient, and more. Each is linked to a parent Transaction entity.

## Example Queries

### Querying Aggregated CremePie Data

This query fetches aggredated data from all CremePie pairs and tokens, to give a view into how much activity is happening within the whole protocol.

```graphql
{
  CremePieFactories(first: 1) {
    pairCount
    totalVolumeUSD
    totalLiquidityUSD
  }
}
```
