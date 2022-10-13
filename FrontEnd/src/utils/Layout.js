import React from 'react';
import ResponsiveAppBar from './navbar';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';



const Layout = (props) => {
    return (
        <div>
            <ResponsiveAppBar />
            <Paper elevation={1}>
                <Container maxWidth="xl">
                    {props.children}
                    <br/>
                </Container>
            </Paper>
            <br/>

        </div>
    )
};
export default Layout;