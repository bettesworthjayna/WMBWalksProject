import React from 'react';
import ResponsiveAppBar from './navbar';

const Layout = (props) => {
    return (
        <div>
            <ResponsiveAppBar />
            {props.children}
            <br/>
            <hr />
            <hr/>
        </div>
    )
};
export default Layout;