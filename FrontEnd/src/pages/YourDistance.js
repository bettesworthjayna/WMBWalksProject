import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../utils/handleLogin";
import { mineTokens } from "../utils/mineTokens";
import { Alert } from "@mui/material";
import { errorHandle } from "../utils/errorMessageHandle";
import LoadingButton from "@mui/lab/LoadingButton";

//connects the strava API info to your account and mines the correct amount of tokens accordingly. 
const YourDistance =  (props) => {
     const [returnMessage, setReturnMessage] = useState('');
     const [runWalkDistance, setRunWalkDistance] = useState(0);
     const [errorMessage, setErrorMessage] = useState('');
     const [loading, setLoading] = useState(false);

        useEffect( () => {
            
            async function fetchData (){
                try{
                    const distance = props.user
                    setRunWalkDistance ( Math.floor(distance / 10)/100);
                    
                    setLoading(true);
                    setReturnMessage (await mineTokens(Math.floor(distance / 10)));
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
        
        <div>
            <h1>Hi, {props.returnTokens.athlete.firstname}!</h1>
            <h2>Run / Walk total distance: {runWalkDistance}</h2>
            <h3>{returnMessage}</h3>
            <LoadingButton type="submit" loading={loading}  >
                        
            </LoadingButton>
            <br/>
            <p> </p>
            { errorMessage && <Alert severity='error'> { errorHandle(this.state.errorMessage) } </Alert> }
            <a href="/walk">Go back to Walk Page!</a>
        </div>
       
    );
    }catch (err) {
        console.log(err);

        return (
            <div>
                <br />
                <button onClick={handleLogin}>Connect with Strava</button>
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
