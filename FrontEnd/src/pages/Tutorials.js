import React, { Component } from 'react';
import AddNetwork from '../images/Add Polygon/1-AddNetwork.PNG';
import Information from '../images/Add Polygon/2-Information.PNG'

//tutorial section on how to use and set up components like metamask or polygon ect...
class Tutorials extends Component{

    render(){
        return(
            
            <div style={{textAlign: 'center'}}>
                <h1>Tutorials</h1>
                <h2>Get Metamask Wallet extension</h2>
                <p>Download one of the following extensions depending on your browser </p>
                <ul style={{listStyleType: 'none'}}>
                    <li>
                        <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">Chrome Extension </a>
                    </li>
                    <li>
                        <a href="https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm" target="_blank"> Microsoft Edge Extension</a>
                    </li>
                    <li>
                        <a href="https://addons.mozilla.org/en-CA/firefox/addon/ether-metamask/" target="_blank"> Firefox Extension</a>
                    </li>
                    <li>The metamask web extension is supported on Chrome, Firefox, Brave, Edge, and Opera. You can find the extension download for each of these at their sites.</li>
                    <p>Set up - Follow this tutorial:</p>
                    <a href="https://www.one37pm.com/nft/how-to-set-up-metamask-wallet" target="_blank" >Set up Metamask</a>
                </ul>
                <h2>Connect to goerli network</h2>
                <p>In order to see your tokens, you need to be connected to the goerli network.</p>
                <a href="https://www.one37pm.com/nft/how-to-set-up-metamhttps://blog.cryptostars.is/goerli-g%C3%B6rli-testnet-network-to-metamask-and-receiving-test-ethereum-in-less-than-2-min-de13e6fe5677ask-wallet" target="_blank" >Set up Goerli in your Metamask</a>

                <h2> Get Free Goerli ETH</h2>
                <p>In order to mine tokens, you need to get Goerli ETH to pay for the gas fee. </p> 
                <p>To mine tokens, copy your account address in metamask, and mine tokens </p> 
                <a href='https://goerli-faucet.pk910.de/' target="_blank" > At this link</a>

                <h2>Connect to pollygon network</h2>
                    <p>The contract is going to be mined on the polygon network - in the future - Befor you can use and mine tokens, you have to connect to the polygon network. To do this,  you first need to open your metamask extension</p>
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