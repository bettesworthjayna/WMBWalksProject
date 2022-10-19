import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../utils/handleLogin";
import { mineTokens } from "../utils/mineTokens";
import { Alert } from "@mui/material";
import { errorHandle } from "../utils/errorMessageHandle";

const YourDistance =  (props) => {
    // const runWalkDistance = Math.floor(props.user.data.all_run_totals.distance / 10)/100;
     const [returnMessage, setReturnMessage] = useState('');
     const [runWalkDistance, setRunWalkDistance] = useState(0);
     const [errorMessage, setErrorMessage] = useState('');

        useEffect( () => {
            async function fetchData (){
                try{
                    setRunWalkDistance ( Math.floor(props.user.data.all_run_totals.distance / 10)/100);
                    
                    setReturnMessage (await mineTokens(Math.floor(props.user.data.all_run_totals.distance / 10)));
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
            <h2>Bike ride total distance: {props.user.data.all_ride_totals.distance}</h2>
            <h2>Swimming total distance: {props.user.data.all_swim_totals.distance}</h2>
            <h3>{returnMessage}</h3>
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
