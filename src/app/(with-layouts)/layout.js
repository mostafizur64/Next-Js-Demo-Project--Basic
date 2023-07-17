import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const withLayouts = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>footer</footer>
        </div>
    );
};

export default withLayouts;