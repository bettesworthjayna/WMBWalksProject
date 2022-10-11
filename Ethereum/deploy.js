const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledToken = require("./build/wmbToken.json");
 
const provider = new HDWalletProvider(
    'fever merge snap duck marriage nasty ankle fame grace air junk bitter',
    // remember to change this to your own phrase!
    'https://goerli.infura.io/v3/f683e30793af464d9b34af543ea38b80'
    // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log("Attempting to deploy from account", accounts[0]);
 
  const result = await new web3.eth.Contract(compiledToken.abi)
    .deploy({ data: compiledToken.evm.bytecode.object })
    .send({ gas: "2000000", from: accounts[0] });
 
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();