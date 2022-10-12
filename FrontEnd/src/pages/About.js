import React, { Component } from 'react';

class About extends Component{

    render(){
        return(
            
            <div>
                <h1>About WMB Walks</h1>

                <h3> This is an expirimental web3 platform. On here, our goal is to use tokens to track excersise. </h3>
                <p>We aim to collect your strava routes and convert the km traveled into tokens. With those tokens, once you have enough you can earn NFTs. 
                    The NFTs set specific goals for you to cash in on at WMB. the 100km NFT gives you a free water bottle. The 500 km nft gives you free WMV comfy socks
                    the 100km nft gives you a free lunch! The more you walk, the more you get!! 
                </p>

                <h3>What you need</h3>
                <ul> 
                    <li>Metamask Account: Connect your metamask account or create one as an app or browser extension</li>
                    <li>Strava Account: Sign in or sign up for strava. This will get you the ability to mine for tokens</li>
                </ul>
            </div>
            
        )
    }

}
export default About