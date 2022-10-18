import React, { Component } from 'react';
import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import {errorHandle} from '../utils/errorMessageHandle';
import {handleLogin} from '../utils/handleLogin';
import RewardNFT from '../utils/rewardNFT';


class Walk extends Component {
    state = {
        name: '', 
        symbol: '',
        totalSupply: '', 
        message: '', 
        km: '',
        kmToWMB: 0,
        myBalance: 0,
        errorMessage: '', 
        loading: false, 
        firstName: '',
        contractName: ''
    }
    async componentDidMount() {
        const name = await token.methods.name().call();
        const symbol = await token.methods.symbol().call();
        const totalSupply = await token.methods.totalSupply().call();
        const accounts = await web3.eth.getAccounts();
        const myBalance = await token.methods.balanceOf(accounts[0]).call();
        const contractName = await token.methods.personName(accounts[0]).call();
        this.setState({name, symbol, totalSupply, myBalance: myBalance/100, contractName});
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({kmToWMB: this.state.km * 100})
        this.setState({loading: true, errorMessage: ''});
        try{
            const accounts = await web3.eth.getAccounts();
             //tells users what is going on since it takes time to make a transaction
        
            await token.methods.mint(this.state.kmToWMB).send({
                from: accounts[0],
            }); //this takes 15 - 30 sec
        }catch (err) {
            this.setState({errorMessage: err.message})
        }

        this.setState({loading: false});
        //window.location.reload(false);
      };

      onNameSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading: true, errorMessage: ''});
        this.setState({contractName: this.state.firstName});
        try{
            const accounts = await web3.eth.getAccounts();
             //tells users what is going on since it takes time to make a transaction
        
            await token.methods.setPersonName(this.state.contractName).send({
                from: accounts[0],
            }); //this takes 15 - 30 sec
        }catch (err) {
            this.setState({errorMessage: err.message})
        }

        this.setState({loading: false});
        //window.location.reload(false);
      };

    render () {
        return (
            <div>
                <h1>{this.state.contractName|| "Your" } Account:</h1>
                <h3>Token Name: {this.state.name}, </h3>
                <h3>Token Symbol: {this.state.symbol} </h3>
                <h3> Current Total Supply: {this.state.totalSupply / 100}</h3>
                <h3>Your Total Supply: {this.state.myBalance}</h3>
                <br/>
                
                <h4>Connect to strava to mine new tokens</h4>
                <button onClick={handleLogin} >Connect</button>
                <br/>

                <form onSubmit={this.onNameSubmit}>
                    <div>
                    <h4>Change Name:</h4>
                    <input 
                        label="km"
                        value= {this.state.firstName}
                        onChange={event => this.setState({firstName: (event.target.value)})}
                    />
                    </div>
                    <br/>
                    <LoadingButton type="submit" loading={this.state.loading} variant="outlined" >
                        Submit
                    </LoadingButton>
                </form>
                { this.state.errorMessage && <Alert severity='error'> { errorHandle(this.state.errorMessage) } </Alert> }
                <h2>Your Tokens:</h2>
                <RewardNFT/>
            </div>
        )
    }

}
export default Walk