const router = artifacts.require("UniswapV2Router02");

const { BN } = require('@openzeppelin/test-helpers');

const json = require('@uniswap/v2-core/build/UniswapV2Factory.json')
const contract = require('@truffle/contract');
const UniswapV2Factory = contract(json);

UniswapV2Factory.setProvider(this.web3._provider);
const initialSupply = new BN(100 * (10^18));

const token1Artifact = artifacts.require('MyToken1Mock');

module.exports = async function(_deployer, network, accounts) {
/*   const token = await token1Artifact.new(initialSupply, 'a', 'b', {from: accounts[0] });
  console.log('weth token in migration', token.address);
  await _deployer.deploy(UniswapV2Factory, accounts[0], {from: accounts[0]});
  //console.log('factory', UniswapV2Factory.address);
  await _deployer.deploy(router, UniswapV2Factory.address, token.address);
  //console.log('router', router.address); */

};
