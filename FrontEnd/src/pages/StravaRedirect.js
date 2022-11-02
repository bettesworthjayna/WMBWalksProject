import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import web3 from "../EtherConnect/web3";
import token from "../EtherConnect/token"
import { setUser, setUserActivities } from "../actions";
import {
    cleanUpAuthToken,
    testAuthGetter,
    //getUserData,
    getUserActivityArray,
   // getTotalActivityDistance,
} from "../utils/stravaFunctions";

//redirect. This gets all the information from the strava API and puts them into props to be used later. 
class StravaRedirect extends React.Component {
    state = {
        startDate: 0,
    }
    async componentDidMount() {
        const accounts = await web3.eth.getAccounts();
        const startDate = await token.methods.startDate(accounts[0]).call();
        this.setState({startDate});

        const authenticate = async () => {
            const { history, location } = this.props;
            try {
                // If not redirected to Strava, return to home
                if (_.isEmpty(location)) {
                    return history.push("/");
                }

                // Save the Auth Token to the Store (it's located under 'search' for some reason)
                const stravaAuthToken = cleanUpAuthToken(location.search);

                // Post Request to Strava (with AuthToken) which returns Refresh Token and and Access Token
                const tokens = await testAuthGetter(stravaAuthToken);
                this.props.setUser(tokens); //redux setting actions 
                const accessToken = tokens.access_token;
                //const userID = tokens.athlete.id;

                // Axios request to get users info
               // const user = await getUserData(userID, accessToken);
               // this.props.setUserActivities(user); //redux setting actions

               //axios request to get users activity array
               
                const activities = await getUserActivityArray( startDate, 1, 200, accessToken); //that EPOTCH number will eventually need to be changed to when the user first signs up for the contract. 
               
                //get total distance in the array of all events:\
               // const distance = await getTotalActivityDistance(activities);
                //console.log(distance)
                this.props.setUserActivities(activities);
                // Once complete, go to display page
               
                history.push("/yourdistance");
            } catch (error) {
                history.push("/yourdistance");
                console.log(error);
            }
        };
        authenticate();
    }

    render() {
        return <div style={{textAlign: 'center'}}>
            <br/>
            <h3>Loading ... </h3>
            
            </div>;
    }
}

const mapStateToProps = (state) => {
    return { authTokenURL: state.authTokenURL };
};

export default connect(mapStateToProps, {
    setUserActivities,
    setUser,
})(StravaRedirect);
