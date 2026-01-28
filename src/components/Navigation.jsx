import React from 'react';
import logo from '../assets/logo.png';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Texis Limited" className="logo-img" />
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
