import React from 'react';
import ResponsiveAppBar from './navbar';

const Layout = (props) => {
    return (
        <div>
            <ResponsiveAppBar />
            {props.children}
            <h1> Footer </h1>
        </div>
    )
};
export default Layout;