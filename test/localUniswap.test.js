const token1Artifact = artifacts.require('MyToken1Mock');
const routerArtifact = artifacts.require("UniswapV2Router02");
const factoryArtifact = artifacts.require("IUniswapV2Factory");
const pairArtifact = artifacts.require("IUniswapV2Pair");

const tokenAmount = 10000000;
const ethAmount = 1000;

contract('test', accounts  => {

  const name = 'My Token';
  const symbol = 'MTKN';

  it('liquidity', async () => {
    console.log('used account', accounts[0]);
    this.token1 = await token1Artifact.new(tokenAmount, name, symbol, {from: accounts[0] }); 
    
    this.router = await routerArtifact.deployed();
    const factory = await this.router.factory.call();
    this.factory = await factoryArtifact.at(factory);

    const wethAddr = await this.router.WETH.call();

    await this.token1.approve(this.router.address, tokenAmount, {from: accounts[0] });

    await this.router.addLiquidityETH(this.token1.address, tokenAmount, 1, 1, this.token1.address, 9999999999, 
      {from: accounts[0], value: ethAmount} );

    const pairAddr = await this.factory.allPairs.call(0);
    const pair = await pairArtifact.at(pairAddr);
    const reserves = await pair.getReserves();

    console.log('pair reserves, first ' + reserves[0] + " second " + reserves[1]);
  }); 
});
