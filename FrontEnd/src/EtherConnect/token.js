import web3 from "./web3";
import WMBToken from "../build/wmbToken.json";
 
const instance = new web3.eth.Contract(
  WMBToken.abi,
  //"0x02475d95A214E4458AeD3A1e7b4C9f08461f09A5"
  "0x279336615a2e6400BdF5146b0DA4B12E1e7691cD"
);
 
export default instance;