import React, { Component } from 'react';

//simple about page that tells users about the account
class About extends Component{

    render(){
        return(
            
            <div>
                <h1>About WMB Fit</h1>

                <h3> This is an experimental web3 platform. Our goal for this application is to teach users about web3 while collecting tokens to track excersise. </h3>
                <p>We aim to collect the km that you have ran or walked on strava and convert them into tokens. When you reach certain amounts of tokens, you can earn NFTs. 
                    You will be able to see these NFTs on Opensea and your WMB tokens on Metamask. Each NFT you get might have certain prizes, for example a water bottle or a vacation day! The more you walk, the more you get!! 
                </p>

                <h3>What you need</h3>
                <ul> 
                    <li>Metamask Account: Connect your metamask account or create one as an app or browser extension</li>
                    <li>Strava Account: Sign in or sign up for strava. This will get you the ability to mine for tokens</li>
                </ul>
                <h4> &emsp; Tutorials for how to do this are located in the tutorials tab</h4>
            </div>
            
        )
    }

}
export default About