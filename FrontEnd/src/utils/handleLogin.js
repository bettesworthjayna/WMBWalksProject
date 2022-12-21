const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "http://localhost:3000/redirect" //"https://wmbfit.netlify.app/redirect"//

//"https://splendid-ganache-ee2feb.netlify.app/redirect";
// change above to "http://localhost:3000/redirect" in testing

//goes to the strava site and requests authorization of the app to use strava information
export const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=activity:read_all`;
};