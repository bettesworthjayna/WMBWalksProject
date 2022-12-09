import React, { Component } from 'react';
import Walk10 from '../images/PNGs/10km.PNG';
import Walk50 from '../images/PNGs/50km.PNG';
import Walk100 from '../images/PNGs/100km.PNG';
import Walk250 from '../images/PNGs/250km.PNG';
import Walk375 from '../images/PNGs/375km.PNG';
import Walk500 from '../images/PNGs/500km.PNG';
import Walk1000 from '../images/PNGs/1000km.PNG'
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
                <br/>
                <div style={{textAlign: 'center'}}>
                <h2>NFT Prizes</h2>
                <p>Walking or running gives you NFTs and the following NFTs gives you rewards.</p>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    
                    <div>
                        <hr/>
                        <p>Walk 10 km total:</p>
                        <p>We'll donate $5 to charity</p>
                        <img  src={Walk10} height='175' alt="walk 100" />
                        
                    </div>
                    <div>
                        <hr/>
                        <p>Walk 50 km total:</p>
                        <p>Win running socks</p>
                        <img  src={Walk50} height='175' alt="walk 500" />
                        
                    </div>
                    <div>
                        <hr/>
                        <p>Walk 100 km total:</p>
                        <p>Win a water bottle</p>
                        <img  src={Walk100} height='175' alt="walk 1000" />
                       
                    </div>

                    <div>
                        <hr/>
                        <p>Walk 250 km total:</p>
                        <p>Win a $50 lunch voucher</p>
                        <img  src={Walk250} height='175' alt="walk 10000" />
                        
                    </div>
                    <div>
                        <hr/>
                        <p>Walk 375 km total:</p>
                        <p>Win a yoga mat</p>
                        <img  src={Walk375} height='175' alt="walk 10000" />
                        
                    </div>
                    <div>
                        <hr/>
                        <p>Walk 500 km total:</p>
                        <p>Win 1 pair of running shoes</p>
                        <img  src={Walk500} height='175' alt="walk 10000" />
                        
                    </div>
                    <div>
                        <hr/>
                        <p>Walk 1000 km total:</p>
                        <p>Win 1 vacation day</p>
                        <img  src={Walk1000} height='175' alt="walk 10000" />
                        
                    </div>
                </div>
                </div>
            </div>
            
        )
    }

}
export default About