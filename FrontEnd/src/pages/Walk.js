import React, { Component } from 'react';
import token from '../EtherConnect/token';
import web3 from '../EtherConnect/web3';
import Alert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';



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
        firstName: ''
    }
    async componentDidMount() {
        const name = await token.methods.name().call();
        const symbol = await token.methods.symbol().call();
        const totalSupply = await token.methods.totalSupply().call();
        const accounts = await web3.eth.getAccounts();
        const myBalance = await token.methods.balanceOf(accounts[0]).call();
        const firstName = await token.methods.personName(accounts[0]).call();
        this.setState({name, symbol, totalSupply, myBalance: myBalance/100, firstName});
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

      

    render () {
        return (
            <div>
                <h1>{this.state.firstName || "Your" } Account:</h1>
                <h3>Token Name: {this.state.name}, </h3>
                <h3>Token Symbol: {this.state.symbol} </h3>
                <h3> Current Total Supply: {this.state.totalSupply / 100}</h3>
                <h3>Your Total Supply: {this.state.myBalance}</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <h4>How Many km did you walk?</h4>
                    <input 
                        label="km"
                        value= {this.state.km}
                        onChange={event => this.setState({km: (event.target.value)})}
                    />
                    </div>
                    <br/>
                    <LoadingButton type="submit" loading={this.state.loading} variant="outlined">
                        Submit
                    </LoadingButton>
                </form>
                { this.state.errorMessage && <Alert severity='error'> { this.state.errorMessage } </Alert> }
            </div>
        )
    }

}
export default Walk