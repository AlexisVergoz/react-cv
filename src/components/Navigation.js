import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
    <div className="sidebar">
            <div className="id">
                <div className="idContent">
                <img src="./media/alexisvergoz.jpg" alt="profil-pic"/>
                <h3>Vergoz Alexis</h3>
                
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                    <NavLink exact to="/" activeClassName="navActive">
                        <i className="las la-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/competence" activeClassName="navActive">
                    <i className="las la-atlas"></i>
                        <span>Compétence</span>
                    </NavLink>

                    </li>
                    <li>
                    <NavLink exact to="/portfolio" activeClassName="navActive">
                    <i class="las la-laptop"></i>
                        <span>Portfolio</span>
                    </NavLink>

                    </li>
                    <li>
                    <NavLink exact to="/contact" activeClassName="navActive">
                    <i className="las la-id-card"></i>
                        <span>Contact</span>
                    </NavLink>

                    </li>
                </ul>
            </div>
        
        <div className="socialNetwork">
            <ul >
                <li>
                    <a href="https://www.linkedin.com/in/alexisvergoz/" target="_blank" rel="noopener noreferrer"><i class="lab la-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://github.com/AlexisVergoz" target="_blank" rel="noopener noreferrer"> <i class="lab la-github"></i></a>
                </li>
               
            </ul>
            <div className="signature">
                <p>VergozAlexis - 2021</p>
            </div>
        </div>
    </div>
        </>
    );
};

export default Navigation;