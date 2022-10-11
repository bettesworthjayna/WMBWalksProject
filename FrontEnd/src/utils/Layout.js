import React from 'react';
import ResponsiveAppBar from './navbar';

export default props => {
    return (
        <div>
            <ResponsiveAppBar />
            {props.children}
            <h1> Footer </h1>
        </div>
    )
};