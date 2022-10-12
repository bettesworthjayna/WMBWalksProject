import React from "react";
import { connect } from "react-redux";
import { handleLogin } from "../utils/handleLogin";

const YourDistance = ({ user, returnTokens }) => {
    try{
    return (
        
        <div>
            <h1>Hi, {returnTokens.athlete.firstname}!</h1>
            <h2>Run / Walk total distance: {user.data.all_run_totals.distance}</h2>
            <h2>Bike ride total distance: {user.data.all_ride_totals.distance}</h2>
            <h2>Swimming total distance: {user.data.all_swim_totals.distance}</h2>
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
