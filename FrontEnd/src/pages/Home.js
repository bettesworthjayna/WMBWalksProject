import React, { Component } from 'react';
import token from '../EtherConnect/token';
import  Button from '@mui/material/Button';
import Leaderboard  from '../utils/leaderboard';

//homepage of the application. This displays the information about the token and rewards you can win
//from this page you also have to connect to metamask to sii important information
class WMBIndex extends Component {
    state = {
        name: '', 
        symbol: '',
        totalSupply: ''
    }
    async componentDidMount() {
        const name = await token.methods.name().call();
        const symbol = await token.methods.symbol().call();
        const totalSupply = await token.methods.totalSupply().call();
        this.setState({name, symbol, totalSupply});
    }
    render () {
        return ( 
            <div style={{textAlign: 'center'}}>
                <h1>WMB Fit</h1>
                <hr/>
               <p>Connect your Metamask account to access your tokens and progress on this application</p>
               <p>Make sure your wallet is connected to the Goerli Test Network</p>
               <p>Sign up by connecting to Strava in the account section and record walks, runs, or hikes to earn tokens</p>
               <p> Need help with any of these tasks? </p>
               <Button color="success" href='/tutorials'> Go to Tutorials Page &gt; &gt;</Button>
                <h3>Token Name: {this.state.name} </h3>
                <h3>Token Symbol: {this.state.symbol} </h3>
                {/*<h3> Current Total Supply: {this.state.totalSupply / 100}</h3>*/}
                 
                <hr/>
                <br/>
                <Leaderboard />  

                <h2>NFT Prizes</h2>
                <p>Walking or running gives you NFTs and the following NFTs gives you rewards.</p>
                <p>For more information go to the  
                    <a href="/about" target="_blank" rel="noreferrer"> About Page </a>
                </p>
                <br/>
                <hr/>
                <br/>
                          

            </div>

        )
    }

}
export default WMBIndex;
