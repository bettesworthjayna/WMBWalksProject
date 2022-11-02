import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../utils/handleLogin";
import { mineTokens } from "../utils/mineTokens";
import { Alert } from "@mui/material";
import { errorHandle } from "../utils/errorMessageHandle";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import { getTotalActivityDistance } from "../utils/stravaFunctions";
import web3 from "../EtherConnect/web3";
import token from "../EtherConnect/token"


//connects the strava API info to your account and mines the correct amount of tokens accordingly. 
const YourDistance =  (props) => {
     const [returnMessage, setReturnMessage] = useState('');
     const [runWalkDistance, setRunWalkDistance] = useState(0);
     const [errorMessage, setErrorMessage] = useState('');
     const [loading, setLoading] = useState(false);

        useEffect( () => {
            
            async function fetchData (){
                try{
                    const accounts = await web3.eth.getAccounts();
                    const startDate = await token.methods.startDate(accounts[0]).call();
                    const distance = await getTotalActivityDistance(props.user)
                    if(startDate != 0){
                    setRunWalkDistance ( Math.floor(distance / 10)/100);
                    }else{
                        setRunWalkDistance(0);
                    }
                    setLoading(true);
                    if (startDate !== 0){
                    setReturnMessage (await mineTokens(Math.floor(distance / 10)));
                    }else{
                        await mineTokens(Math.floor(distance / 10))
                        setReturnMessage("Your now connected to the WMB App! Record your run walk or hike on strava to earn tokens");
                    }
                    setLoading(false);
                }catch(err){
                    console.log(err);
                    setErrorMessage(err);
                }
            }
            
            fetchData();
        }, []);
    try{     
        

    return (
        
        <div style={{textAlign: 'center'}}>
            <h1>Hi, {props.returnTokens.athlete.firstname}!</h1>
            <h2>Run / Walk total distance: {runWalkDistance}</h2>
            <h3>{returnMessage}</h3>
            <LoadingButton type="submit" loading={loading}  >
                        
            </LoadingButton>
            <br/>
            <p> </p>
            { errorMessage && <Alert severity='error'> { errorHandle(this.state.errorMessage) } </Alert> }
            
            <Button color="inherit" href='/walk'> &lt; &lt; Back to Account Page</Button>
        </div>
       
    );
    }catch (err) {
        console.log(err);

        return (
            <div style={{textAlign: 'center'}}>
                 { errorMessage && <Alert severity='error'> { "please connect your metamask account before connecting to strava" } </Alert> }
                <br />
                <Button variant="outlined" style={{color: '#ffffff', backgroundColor: '#1a237e'}} onClick={handleLogin} >Connect with Strava</Button>
                
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        returnTokens: state.returnTokens,
    };
};

export default connect(mapStateToProps)(YourDistance);
