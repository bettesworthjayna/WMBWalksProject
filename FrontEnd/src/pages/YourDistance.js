import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../utils/handleLogin";
import { mineTokens } from "../utils/mineTokens";

const YourDistance =  (props) => {
    // const runWalkDistance = Math.floor(props.user.data.all_run_totals.distance / 10)/100;
     const [returnMessage, setReturnMessage] = useState('');
     const [runWalkDistance, setRunWalkDistance] = useState(0);
        useEffect( () => {
            async function fetchData (){
                try{
                    setRunWalkDistance ( Math.floor(props.user.data.all_run_totals.distance / 10)/100);
                    console.log(runWalkDistance );
                    setReturnMessage (await mineTokens(Math.floor(props.user.data.all_run_totals.distance / 10)));
                }catch(err){
                    console.log(err);
                    console.log("!!!!!!!");
                }
            }
            
            fetchData();
            console.log(runWalkDistance + "hi there")
        }, []);
    console.log(runWalkDistance + '   !!')
    try{

        // const runWalkDistance = Math.floor(props.user.data.all_run_totals.distance / 10)/100;
        // useEffect(async () => {
        //     returnMessage = await mineTokens(runWalkDistance);
        // }, []);
        
        

    return (
        
        <div>
            <h1>Hi, {props.returnTokens.athlete.firstname}!</h1>
            <h2>Run / Walk total distance: {runWalkDistance}</h2>
            <h2>Bike ride total distance: {props.user.data.all_ride_totals.distance}</h2>
            <h2>Swimming total distance: {props.user.data.all_swim_totals.distance}</h2>
            <h3>{returnMessage}</h3>
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
