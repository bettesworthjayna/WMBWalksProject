import web3 from "./web3";
import WMBToken from "../build/wmbToken.json";
 
const instance = new web3.eth.Contract(
  WMBToken.abi,
  "0x02475d95A214E4458AeD3A1e7b4C9f08461f09A5"
);
 
export default instance;