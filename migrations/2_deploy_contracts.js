const router = artifacts.require("UniswapV2Router02");

const json = require('@uniswap/v2-core/build/UniswapV2Factory.json')
const contract = require('@truffle/contract');
const UniswapV2Factory = contract(json);

UniswapV2Factory.setProvider(this.web3._provider);

const wethArtifact = artifacts.require('WETH');

module.exports = async function(_deployer, network, accounts) {
  const token = await wethArtifact.new({from: accounts[0] });
  await _deployer.deploy(UniswapV2Factory, accounts[0], {from: accounts[0]});
  await _deployer.deploy(router, UniswapV2Factory.address, token.address);
};
