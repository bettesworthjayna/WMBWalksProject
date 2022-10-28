import axios from "axios";

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

//function to get information from the returned url from strava
export const getParamValues = (url) => {
    return url
        .slice(1)
        .split("&")
        .reduce((prev, curr) => {
            const [title, value] = curr.split("=");
            prev[title] = value;
            return prev;
        }, {});
};

//a function to clean up the auth token given to be used. 
export const cleanUpAuthToken = (str) => {
    return str.split("&")[1].slice(5);
};

//this gets the authenticated users data from the url token. 
export const testAuthGetter = async (authTok) => {
    try {
        const response = await axios.post(
            `https://www.strava.com/api/v3/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authTok}&grant_type=authorization_code`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//this gets the overarching stats from the user
export const getUserData = async (userID, accessToken) => {
    try {
        const response = await axios.get(
            `https://www.strava.com/api/v3/athletes/${userID}/stats`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
};

//this gets the total distance the user has traveled after giving an array of activities
export const getTotalActivityDistance = async (activities, startDate) => {
    if(startDate === 0){
        return 0;
    }
    let i = 0;
    let distance = 0;
    while(i < activities.length){
        //if walk or run (what about others like bike ride or swim)
        if (activities[i].sport_type === "Run" || activities[i].sport_type === "Walk" || activities[i].sport_type === "Hike" || activities[i].sport_type === "TrailRun"){
            distance += activities[i].distance;
        }
        i++;
    }
    return distance;
}

//this gets an array of all the users activities after a certain data
export const getUserActivityArray = async (after, page, per_page, accessToken) => {
    try{
        const response = await axios.get(
            `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}&after=${after}&page=${page}&per_page=${per_page}`,
            //{ headers: { Authorization: `Bearer ${accessToken}` } }
        );
        return response.data;
    }catch(err){
        console.log(err);
    }
}
