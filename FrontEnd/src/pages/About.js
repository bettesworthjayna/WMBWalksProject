import React, { Component } from 'react';
import Walk100 from '../images/ChangedPNGs/100kmN.PNG';
import Walk250 from '../images/ChangedPNGs/250km.PNG';
import Walk500 from '../images/ChangedPNGs/500km.PNG';
import Walk1000 from '../images/PNGs/1000km.PNG'
//simple about page that tells users about the account
class About extends Component{

    render(){
        return(
            
            <div>
                <h1>About WMB Fit</h1>

                <h3> This is an experimental web3 platform. Our goal for this application is to teach users about web3 while collecting tokens to track excersise. </h3>
                <p>We aim to collect the km that you have ran or walked on strava and convert them into tokens. When you reach certain amounts of tokens, you can earn NFTs. 
                    You will be able to see these NFTs on Opensea and your WMB tokens on Metamask. 4 of the NFTs (as seen below) have prizes attached. Walking or running 
                    gives you NFTs and the more you run or walk, the higher reward you qualify for. 
                </p>
                <p>
                    Your total kilometers will start being included in the contest from the date that you sign up for WMB Walks (thus, even if you have km in Strava during 
                    the dates of the competition, it will only be included/counted in your total from the time that you register for WMB Walks) 
                </p>

                <br/>
                <p>Some Prizes you can qualify for:</p>
                <ul>
                    <li>If your cumulative total by the end of April 16th is between 100km - 249.99km you are eligible to recieve a pair of running socks</li>
                    <li>If your cumulative total by the end of April 16th is between 250km - 499.99km you are eligible to recieve a waterbottle</li>
                    <li>If your cumulative total by the end of April 16th is between 500km - 999.99km you are eligible to recieve 1 pair of running shoes (max. value: $200) OR a Lululemon Yoga Mat</li>
                    <li>If your cumulative total by the end of April 16th is 1000km or higher, you are eligible to recieve 1 vacation day (to be used in the 2023)</li>
                </ul>
                <p>For example, if you have run 720km by April 16th, you are eligable to choose one prize out of a pair of nunning socks, a waterbottle, running shoes, or a yoga mat. </p>
                <h3>What you need</h3>
                <ul> 
                    <li>Metamask Account: Connect your metamask account or create one as an app or browser extension</li>
                    <li>Strava Account: Sign in or sign up for strava. This will get you the ability to mine for tokens</li>
                </ul>
                <h4> &emsp; Tutorials for how to do this are located in the tutorials tab</h4>
                <br/>
                <div style={{textAlign: 'center'}}>
                <h2>NFT Prizes</h2>
                <p>Walking or running gives you NFTs and the following NFTs gives you rewards.</p>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    
                    <div>
                        <hr/>
                        <p>Walk 100 km total:</p>
                        <p>Win a pair of running socks</p>
                        <p>-</p>
                        <img  src={Walk100} height='175' alt="walk 100" />
                        
                    </div>

                    <div>
                        <hr/>
                        <p>Walk 250 km total:</p>
                        <p>Win a Water Bottle</p>
                        <p>-</p>
                        <img  src={Walk250} height='175' alt="walk 10000" />
                        
                    </div>
                    <div>
                        <hr/>
                        <p>Walk 500 km total:</p>
                        <p>Win 1 pair of running shoes </p><p>or a yoga mat</p>

                        <img  src={Walk500} height='175' alt="walk 10000" />
                        
                    </div>
                    <div>
                        <hr/>
                        <p>Walk 1000 km total:</p>
                        <p>Win 1 vacation day</p>
                        <p>-</p>
                        <img  src={Walk1000} height='175' alt="walk 10000" />
                        
                    </div>
                </div>
                </div>
            </div>
            
        )
    }

}
export default About