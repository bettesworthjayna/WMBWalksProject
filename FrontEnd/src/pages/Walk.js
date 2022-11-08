import React, { Component } from 'react';
import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import  Button  from '@mui/material/Button';
import {errorHandle} from '../utils/errorMessageHandle';
import {handleLogin} from '../utils/handleLogin';
import RewardNFT from '../utils/rewardNFT';

//main page where you earn tokens based on your km walk. It has option to connect to strava, to change your name
//and you can see the amount of tokens you have when you log on. 
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
        contractName: '',
        account: ''
    }
    async componentDidMount() {
        try{
        const name = await token.methods.name().call();
        const symbol = await token.methods.symbol().call();
        const totalSupply = await token.methods.totalSupply().call();
        const accounts = await web3.eth.getAccounts();
        const myBalance = await token.methods.balanceOf(accounts[0]).call();
        const contractName = await token.methods.personName(accounts[0]).call();
        this.setState({name, symbol, totalSupply, myBalance: myBalance/100, contractName, account: accounts[0]});
        } catch (err){
            console.log(err);

        }
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
            <div style={{textAlign: 'center'}}>
                 { this.state.errorMessage && <Alert severity='error'> { errorHandle(this.state.errorMessage) } </Alert> }
                <h2>{ (this.state.contractName )|| ((this.state.account).substring(0, 12) + '...') }'s Account:</h2>
                <h3>Token Name: {this.state.name}, </h3>
                <h3>Token Symbol: {this.state.symbol}, </h3>
                <h3>Your Total Supply: {this.state.myBalance}</h3>
                <br/>
                <div style={{backgroundColor: '#b3e5fc', paddingBottom: '10px', maxWidth: '350px', margin: '0 auto', boxShadow: '5px 5px #e1f5fe'}}>
                    <h3>Connect to strava to mine new tokens</h3>
                    <p>(Update your Balance)</p>
                    <Button variant="outlined" style={{color: '#ffffff', backgroundColor: '#1a237e'}} onClick={handleLogin} >Connect</Button>
                    <br/>
                </div>

                <h2>Your Tokens:</h2>
                <RewardNFT/>

                <form onSubmit={this.onNameSubmit}>
                    <div>
                    <h3>Change Name:</h3>
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
               
                
            </div>
        )
    }

}
export default Walk