import React, { Component } from 'react';
import AddNetwork from '../images/Add Polygon/1-AddNetwork.PNG';
import Information from '../images/Add Polygon/2-Information.PNG'
import Settings from '../images/tutorials/goToSettings.png';
import Advanced from '../images/tutorials/AdvancedSettings.png';
import Testnet from '../images/tutorials/showTestNet.png';
import Gor from '../images/tutorials/goToGoerli.png';
import  Copy from '../images/tutorials/copyAccount.png';
import Connect from '../images/tutorials/connectToStrava.png';
import StravaAuth from '../images/tutorials/StravaAuth.png';
import comTrans from '../images/tutorials/comfirmTransaction.png'

//tutorial section on how to use and set up components like metamask or polygon ect...
class Tutorials extends Component{

    render(){
        return(
            
            <div style={{textAlign: 'left', maxWidth: '650px', margin: '0 auto'}}>
                <h1 style={{textAlign: 'center'}}>Tutorials</h1>
                <p>What to complete before using the app:</p>
                <div style={{textAlign: 'left', maxWidth: '550px', margin: '0 auto'}}>
                <ol >
                    <li>&emsp; Install the Metamask extension on your web browser and create a wallet</li>
                    <li>&emsp; Enable testnets to be shown on Metamask</li>
                    <li>&emsp; Navigate to the Goerli network on your Metamask</li>
                    <li>&emsp; Put Goerli Ether into your account from a Goerli faucet. You need to do this &emsp; before making a transaction</li>
                    <li>&emsp; Connect your Metamask account to the application</li>
                    <li>&emsp; Log into strava</li>
                    <li>&emsp; Now you're all set. You can go on to the "Account" page of this application and mine new tokens.</li>
                </ol>
                </div>
                <p>For more detailed instructions, read below:</p>
                
                <h2 style={{textAlign: 'center', margin: '0 auto'}}>Install Metamask Extension</h2>
                <p>Search 'Metamask Extension' on your browser of choice. Metamask only works on Chrome, Firefox, Brave, Edge and Opera so chose one of those. If using Chrome or Edge, you can use the following links to install:</p>
                <ul style={{maxWidth: '550'}}>
                    <li>
                        <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank" rel="noreferrer">Chrome Extension </a>
                    </li>
                    <li>
                        <a href="https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm" target="_blank" rel="noreferrer"> Microsoft Edge Extension</a>
                    </li>
    
                </ul>
                <p>You can also search "metamask.io" and you will be directed to download the Metamask extension that is related to your browser you're currentlyt using</p>
                <h2 style={{textAlign: 'center'}}>Create a New Metamask Wallet </h2>
                <p style={{textAlign: 'center', margin: '0 auto'}}>(Or import an existing wallet if you already have one)</p>
                <p>If you need help with pictures: &nbsp;
                <a href="https://www.one37pm.com/nft/how-to-set-up-metamask-wallet" target="_blank" rel="noreferrer">Set up Metamask</a>
                </p>
                <p>Once you have Metamask installed, the next step is to open your Metamask account. You can do this by clicking the puzzle piece in the right top corner of your computer. 
                    In there you should see a fox shaped head which is your Metamask extension. Once the extension is installed the get started page might automatically pop up.
                    If you click that, you should be taken to your Metamask extension.
                    (If this doesnt wor'k then refresh the app, and a Metamask popup should appear if you added the extension correctly)</p>
                <p>When you first download Metamask, you should be prompted to get started. Once you click 'get started', you should choose to create a new Wallet
                    unless you already have one that you want to use. (If using a wallet you already created, create a new account in your wallet so you don't accidently
                    spend any real money)
                </p>
                <p> Next you should see a screen that asks you to improve Metamask. You can choose either yes or no, your experience will be the same either way</p>
                <p>After that, you need to create a password to log into your account. Next, you will see a page with a video explaining Metamask. You can either choose to watch it or click next.
                    Then, you'll be led to a page which gives you a secret recovery phrase. You'll have to click on the shaded box to see the phrase</p>
                <p>The secrete recovery phrase is very important. If you lose this, you will lose access to your wallet and won't be able to log back in. Make sure
                    to write it down and store it some place only you know so you can get back into your wallet if need be. Don't lose this phrase or give it to anyone else. 
                </p>
                <p>You will then be prompted to re-enter your recovery phrase to ensure that you indeed have it written down. Once you hit "confirm" then "all done", you are all set
                    and have created a Metamask wallet! Congrats!!
                </p>
                <h2 style={{textAlign: 'center'}}>Enable Test Networks: </h2>
                <p>Back on the Metamask extension, to use the Goerli Network (where the contract is written) you need to enable test networks. 
                    First, when in Metamask, you should see your icon circle in the top right-hand corner. When clicking on it, at the bottom of the dropdown should be a settings icon.
                    Click to be brought to settings. 
                </p>
                <div style={{textAlign: 'center'}}>
                    <img src={Settings} height="350" alt="Information To Add" />
                    </div>
                <p>Once in settings, choose the 'advanced' option. </p>
                <div style={{textAlign: 'center'}}>
                    <img src={Advanced} height="250" alt="Information To Add" />
                    </div>
                    <p>Scroll down to where it says 'show test networks' and turn it on. You now should have access to all the test networks</p>
                    <div style={{textAlign: 'center'}}>
                    <img src={Testnet} height='150' alt="Information To Add" />
                    </div>
                <p>Now on the top of your Metamask window, click where it says "Ethereum mainnet". On the dropdown that appears click Goerli Test Network</p>
                    Scroll down to where it says, "show test networks" and turn it on. You now should have access to all the test networks
                    <div style={{textAlign: 'center'}}>
                    <img src={Gor} height='350' alt="Information To Add" />
                    </div>
                    <p>In order to see your tokens and view the website, you need to be connected to the Goerli network. </p>
                    <p>A tutorial with pictures of the above instructions can be accessed here: </p>
                    <a href="https://blog.cryptostars.is/goerli-g%C3%B6rli-testnet-network-to-metamask-and-receiving-test-ethereum-in-less-than-2-min-de13e6fe5677" target="_blank" rel="noreferrer">Set up Goerli in your Metamask</a>

                <h2 style={{textAlign: 'center'}}> Get Free Goerli ETH</h2>
                    <p>In order to mine tokens, you need to get Goerli ETH to pay for the gas fee. </p> 
                    <p>To mine tokens, copy your account address in Metamask, and mine tokens </p> 
                    <p> To find your account address, on the main page, there should be the name of your account (this is likely Account 1). If you're 
                        still in settings, you need to click the "x" button before seeing the main page.
                        Below the Account 1 label, you will find a light grey string of characters. That is your address. Click on it and it should copy your address. 
                    </p>
                    <div style={{textAlign: 'center'}}>
                    <img src={Copy} height='150' alt="Information To Add" />
                    </div>
                    <p>Once you have a copy of your address, go to the following link to mine goerli gas. You will need gas in order to use this application. &emsp;
                    <a href='https://goerli-faucet.pk910.de/' target="_blank" rel="noreferrer" > At this link</a> </p>
                    <p>You will likely need to leave this running in the background of your computer for 1 - 2 hours to get a decent amount of gas. Make sure
                        you have a minimum of 0.02 Goerli ETH when you mine to interact with the contract. 
                    </p>
                    <p>After you have enough GoerliETH, make sure you stop mining and claim your reward</p>
                <h2 style={{textAlign: 'center'}}>Connect metamask</h2>
                    <p> Now that you have set up Metamask, and you have GoerliETH in your account, go back to the website. 
                        When you refresh the side, a pop up should appear from Metamask to connect your wallet. If you don't see it, 
                        refresh your screen to try again. Follow the directions and press next, to confirm and sign it. 
                    </p>
                    
                <h2 style={{textAlign: 'center'}}>Sign up for strava</h2>
                    <p>If you don't have a Strava account already, head to the Strava website:</p>
                    <a href='https://www.strava.com' target="_blank" rel="noreferrer" >Sign up for Strava</a>
                <h2 style={{textAlign: 'center'}}> Connecting the App to strava</h2>
                    <p>To connect to Strava, all you need to do is press connect on the account page. this will bring you to 
                        a page where you need to log in to Strava.  
                    </p>
                    <div style={{textAlign: 'center'}}>
                    <img src={Connect} height='150' alt="Information To Add" />
                    </div>
                    <p>Once logged in, an authorization screen should appear where 
                        you need to press authorize to allow the app to access Strava.</p>
                        <div style={{textAlign: 'center'}}>
                    <img src={StravaAuth} height='450' alt="Information To Add" />
                    </div> 
                    <p>The first time you press connect, you won't gain any tokens. Pressing connect allow you to earn tokens
                        the next time you go out and run walk or hike.
                    </p>
                <h2 style={{textAlign: 'center'}}>Authorization Screen</h2>
                        <p>When connecting to mine tokens on this application, you will see a Metamask pop up with information on the transaction that 
                            is trying to take place. Click confirm to proceed with the transaction. 
                        </p>
                    <div style={{textAlign: 'center'}}>
                    <img src={comTrans} height='450' alt="Information To Add" />
                    </div> 
                <h2 style={{textAlign: 'center'}}>View your WMB NFTs on Opensea</h2>
                    <p>To view all the NFTs that you have won, you can head to Opensea. Go to this link: &nbsp;
                        <a href='https://testnets.opensea.io/account' target="_blank" rel="noreferrer">https://testnets.opensea.io/account</a>
                    </p>
                    <p>You should see a screen titled "Connect your wallet". On that screen choose Metamask.</p>
                    <p>Upon Clicking Metamask, a Metamask pop up should appear asking if this application can "Connect with MetaMask". </p>
                    <p>You should click "Next" then "Connect". Back on Opensea you will then see a "Welcome to Opensea" popup in which you should press "accept and sign".
                        You will also need to sign on the Metamask pop up.
                    </p>
                <h2 style={{textAlign: 'center'}}>View your WMB tokens on Metamask</h2>
                    <p>-----Do this once contract is deployed on polygon network</p>
                <h2 style={{textAlign: 'center'}}>View and send NFTs</h2>
                    <p>Your NFTs earned on these site can be found in your wallet. Since the current tokens are on 
                        the goerli network, you will need to connect to the contract address and know what the token ID is.
                        You will also be able to see your tokens on openSea at 
                        <a href = 'https://testnets.opensea.io/account' target="_blank" rel="noreferrer" >The Opensea testnet site</a>
                        <p> To see your tokens here you need to connect your wallet to OpenSea.</p>
                        <a href = 'https://testnets.opensea.io/collection/wmbtoken' target="_blank" rel="noreferrer" >The entire WMB collection in circulation can be viewed here.</a>
                    </p>
                
                <hr/>
                <p> Below is for connecting to the polygon mainnet. You don't need to do this yet. This is for when the contract is deployed on a mainnet.</p>
                <h2 style={{textAlign: 'center'}}>Connect to pollygon network</h2>
                    <p>The contract is going to be mined on the polygon network - in the future - Before you can use and mine tokens, you have to connect to the polygon network. To do this, you first need to open your Metamask extension</p>
                    <p>Next, at the top of the Metamask page, you should see a tab showing the Ethereum network. 
                        Click on that dropdown to show all networks that your connected to
                    </p>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                    <img src={AddNetwork} height="400" alt="Add Network" />
                    </div>
                    <p> Click on "Add network" at the bottom of the page</p>
                    <p> From here you should see a page to enter information about your desired network</p>
                    <div style={{textAlign: 'center'}}>
                    <img src={Information} height="450" alt="Information To Add" />
                    </div>
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
            </div>
            
        )
    }

}
export default Tutorials