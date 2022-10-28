import React, { Component } from 'react';
import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
//import RewardNFT from '../utils/rewardNFT';
import {errorHandle} from '../utils/errorMessageHandle'

//gives you options to transfer your tokens to other wallet addresses. 
class Personal extends Component {
    state = {
        message: '', 
        myBalance: 0,
        errorMessage: '', 
        loading: false, 
        amount: '',
        amountToWMB: 0,
        accountTo: '',
        approvedAccount: '',
        accountToTransfer: '', 
        accountFrom: ''
    }
    async componentDidMount() {
        try{
        const accounts = await web3.eth.getAccounts();
        const myBalance = await token.methods.balanceOf(accounts[0]).call();
        this.setState({ myBalance: myBalance/100});
        }catch (err){
            console.log(err);
        }
    }

    onTransferSubmit = async (event) => {
        event.preventDefault();
        this.setState({amountToWMB: this.state.amount * 100})
        this.setState({loading: true, errorMessage: ''});
        console.log(this.state.accountTo + ' ' + this.state.amountToWMB);

        try{
            const accounts = await web3.eth.getAccounts();
             //tells users what is going on since it takes time to make a transaction
        
            await token.methods.transfer(this.state.accountTo, this.state.amountToWMB).send({
                from: accounts[0],
            }); //this takes 15 - 30 sec
        }catch (err) {
            this.setState({errorMessage: err.message});
        }

        this.setState({loading: false});
      };

      onAllowanceSubmit = async (event) => {
        event.preventDefault();
        this.setState({amountToWMB: this.state.amount * 100})
        this.setState({loading: true, errorMessage: ''});
        //tells users what is going on since it takes time to make a transaction

        try{
            const accounts = await web3.eth.getAccounts();
        
            await token.methods.approve(this.state.approvedAccount, this.state.amountToWMB).send({
                from: accounts[0],
            }); //this takes 15 - 30 sec
        }catch (err) {
            this.setState({errorMessage: err.message})
        }

        this.setState({loading: false});
      };

      onTransferFromSubmit = async (event) => {
        event.preventDefault();
        this.setState({amountToWMB: this.state.amount * 100})
        this.setState({loading: true, errorMessage: ''});

        try{
            const accounts = await web3.eth.getAccounts();
        
            await token.methods.transferFrom(this.state.accountFrom, this.state.accountToTransfer, this.state.amountToWMB).send({
                from: accounts[0],
            }); //this takes 15 - 30 sec
        }catch (err) {
            this.setState({errorMessage: err.message})
        }

        this.setState({loading: false});
      };

    render () {
        return ( 
            
            <div style={{textAlign: 'center'}}>
                <h1>WMB Token Information</h1>
                <h2>Your Total Supply: {this.state.myBalance}</h2>

                <hr/>
                <div style={{textAlign: 'left'}}>
                <h2>Manage your WMB tokens: </h2>
                <br/>
                { this.state.errorMessage && <Alert severity='error'> { errorHandle(this.state.errorMessage) } </Alert> }
                <br />
                <form>
                <label>Enter Amount of WMB</label>
                    <input 
                        label="amount"
                        value= {this.state.amount}
                        onChange={event => this.setState({amount: (event.target.value)})}
                    />
                </form>
                <h3>Transfer</h3>
                <form onSubmit={this.onTransferSubmit}>
                    <div>
                    <label>Transfer {this.state.amount || 0} of tokens to: </label>
                    <input 
                        label="accountTo"
                        value= {this.state.accountTo}
                        onChange={event => this.setState({accountTo: (event.target.value)})}
                    />
                    </div>
                    <LoadingButton type="submit" loading={this.state.loading} variant="outlined">
                        Submit
                    </LoadingButton>

                </form>
                <h3>Approve Sender</h3>
                <form onSubmit={this.onAllowanceSubmit}>
                    <div>
                    <label>Approve this address: </label>
                    <input 
                        label="approvedAccount"
                        value= {this.state.approvedAccount}
                        onChange={event => this.setState({approvedAccount: (event.target.value)})}
                    />
                    <label> to send {this.state.amount || 0} tokens on your behalf</label>
                    </div>
                    <LoadingButton type="submit" loading={this.state.loading} variant="outlined">
                        Submit
                    </LoadingButton>

                </form>
                <h3>Transfer on Behalf</h3>
                <form onSubmit={this.onTransferFromSubmit}>
                    <div>
                        <p>Transfer amount of money to send on approved persosns behalf</p>
                    <label>Send {this.state.amount || 0} tokens to </label>
                    <input 
                        label="accountToTransfer"
                        value= {this.state.accountToTransfer}
                        onChange={event => this.setState({accountToTransfer: (event.target.value)})}
                    />
                    <label> on behalf of: </label>
                    <input 
                        label="accountFrom"
                        value= {this.state.accountFrom}
                        onChange={event => this.setState({accountFrom: (event.target.value)})}
                    />
                    </div>
                    <LoadingButton type="submit" loading={this.state.loading} variant="outlined">
                        Submit
                    </LoadingButton>
                </form>
                </div>
           </div> 
        )
    }
}
export default Personal