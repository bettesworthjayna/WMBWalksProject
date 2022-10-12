import React, { Component } from 'react';
import token from '../EtherConnect/token';
import Walk100 from '../images/wmb100.PNG';
import Walk500 from '../images/wmb500.PNG';
import Walk1000 from '../images/wmb1000.PNG';
import Walk10000 from '../images/wmb10000.PNG';

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
            <div>
                <h1>WMB Walks</h1>
                <hr/>
               <p>Connect your MetaMask account to access your tokens and progress on this application</p>
               <p>Sign up and record walks or runs to earn tokens</p>
                <h3>Token Name: {this.state.name}, </h3>
                <h3>Token Symbol: {this.state.symbol} </h3>
                <h3> Current Total Supply: {this.state.totalSupply / 100}</h3>
                <hr/>
                <h2>Potential Awards</h2>
                <div style={{display: 'flex'}}>
                    <div>
                        <p>Walk 100 km total:</p>
                        <p>Win a free waterbottle</p>
                        <img  src={Walk100}  alt="walk 100" />
                    </div>
                    <div>
                        <p>Walk 500 km total:</p>
                        <p>Win a pair of comfy socks</p>
                        <img  src={Walk500}  alt="walk 500" />
                    </div>
                    <div>
                        <p>Walk 1000 km total:</p>
                        <p>Win a free lunch</p>
                        <img  src={Walk1000}  alt="walk 1000" />
                    </div>
                    <div>
                        <p>Walk 10,000 km total:</p>
                        <p>Win a vacation day</p>
                        <img  src={Walk10000}  alt="walk 10000" />
                    </div>
                </div>               

            </div>

        )
    }

}
export default WMBIndex;
