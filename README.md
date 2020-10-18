# Intro
This repository is for running Ethereum Uniswap on a local Ganache blockchain with Truffle.

# Local testing

To test creating an ETH/Token pair do the following:

1. Fetch packages: `npm i`

1. Run ganache:
`ganache-cli --gasLimit=9007199254740990 --gasPrice=0 --allowUnlimitedContractSize --account "0x0000000000000000000000000000000000000000000000000000000000000001,9000000000000000000000" --account "0x0000000000000000000000000000000000000000000000000000000000000002,9000000000000000000000"`

1. Compile: `truffle compile`

1. Migrate: `truffle migrate`

1. Run test:
`truffle test`

For Token/Token pairs you can enable some of the commented-out code

# Issues

The code doesn't work - for token/token pair it gives math underflow errors. For Eth/token pair it gives a random revent. Couldn't figure out what's wrong.

