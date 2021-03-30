import React from 'react';
import{ NavLink } from 'react-router-dom';

const notFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Sorry, Page Not Found !</h3>
                <NavLink exact to="/">
                <i className="las la-home"></i>
                    <span> Accueil</span>
                </NavLink>
            </div>
            
            
        </div>
    );
};

export default notFound;