import web3 from "./web3";
import WMBNFT from "../buildJson/NFTABI.json";
 
const instance = new web3.eth.Contract(
  WMBNFT, //this is already in ABI format
  //"0x02475d95A214E4458AeD3A1e7b4C9f08461f09A5"
  //"0x279336615a2e6400BdF5146b0DA4B12E1e7691cD"
  //"0x5bD70949254bB823baF6F82a9f9A84B9f98B9253"
  //put contract code here
  "0xe3600C744A3757243c3ae83c635c37F64b8fA096"
);
 
export default instance;