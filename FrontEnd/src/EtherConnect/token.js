import web3 from "./web3";
import WMBToken from "../buildJson/wmbFit.json";
 
const instance = new web3.eth.Contract(
  WMBToken.abi,
  //"0x02475d95A214E4458AeD3A1e7b4C9f08461f09A5"
  //"0x279336615a2e6400BdF5146b0DA4B12E1e7691cD"
  //"0x5bD70949254bB823baF6F82a9f9A84B9f98B9253"
  //"0xd0537ACBeE6702677d1BA5b9fD285951e0bD2bDf"
  //"0x5FeC101979787F4405206Dd3ad3091807A1d8641"
  "0x0D30B9966a55A26137b6F2eef4BAFf612a647118"
);
 
export default instance;