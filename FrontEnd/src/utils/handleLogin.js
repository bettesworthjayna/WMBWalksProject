const { REACT_APP_CLIENT_ID } = process.env;
const redirectUrl = "http://localhost:3000/redirect"

export const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read`;
};