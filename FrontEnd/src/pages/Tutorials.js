import React, { Component } from 'react';
import AddNetwork from '../images/Add Polygon/1-AddNetwork.PNG';
import Information from '../images/Add Polygon/2-Information.PNG'

//tutorial section on how to use and set up components like metamask or polygon ect...
class Tutorials extends Component{

    render(){
        return(
            
            <div>
                <h1>Tutorials</h1>
                <h2>Get Metamask Wallet extension</h2>
                    <p>Download one of the following extensions depending on your browser </p>
                    <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Chrome Extension </a>
                    <a href="https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm"> Microsoft Edge Extension</a>
                    <p>Set up - Follow this tutorial:</p>
                    <a href="https://www.one37pm.com/nft/how-to-set-up-metamask-wallet" >Set up Metamask</a>
                

                <h2>Connect to pollygon network</h2>
                    <p>First open metamask</p>
                    <p>Next, at the top of the metamask page, you should see a tab showing the ethereum network. 
                        Click on that dropdown to show all networks that your connected to
                    </p>
                    <br/>
                    <img src={AddNetwork} height="400" alt="Add Network" />
                    <p> click on "Add network" at the bottom of the page</p>
                    <p> from here you should see a page to enter information about your desired network</p>
                    <img src={Information} height="450" alt="Information To Add" />
                    <p>Add in the text boxes the information you see on the above picture</p>
                    <p>Network name: Polygon</p>
                    <p>New RPC URL: https://polygon-rpc.com</p>
                    <p>Chain ID: 137</p>
                    <p>Currency Symbol: MANTIC</p>
                    <p>Block Explorer URL: https://polygonscan.com/</p>
                    <br />
                    <p>Next press save to save the network</p>
                    <br/>
                    <p>Now you should be connected to the polygon network and be able to use it! </p>
                <h2>View your WMB tokens on Metamask</h2>
                    <p>Do this once contract is deployed on polygon network</p>
                <h2>View and send NFTs</h2>
                <h2>Sign up for strava</h2>
                    <p>Head to the Strava website:</p>
                    <a href='https://www.strava.com'>Sign up for Strava</a>
            </div>
            
        )
    }

}
export default Tutorials