import React from 'react';
import Navigation from '../components/Navigation';
import { copyToClipboard } from 'react-copy-to-clipboard';

const contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="las la-map-marker-alt"></i>
                            <span>Toulon</span>
                            <li>
                                <i className="las la-mobile-alt"></i>
                                <copyToClipboard text="0664190832">
                                    <span className="clickInput" 
                                        onClick={() => { alert('Téléphone copié !'); }}>
                                            06 64 19 08 32
                                    </span>
                                </copyToClipboard>
                            </li>
                            
                                
                                <li>
                                    <i className="las la-envelope"></i>
                                    <copyToClipboard text="alexisvergoz@gmail.com">
                                        <span className="clickInput" 
                                            onClick={() => { alert('Mail copié !'); }}>
                                                alexisvergoz@gmail.com
                                        </span>
                                    </copyToClipboard>
                                </li>
                            
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/alexisvergoz/" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="lab la-linkedin"></i>
                        </a>
                        <a href="https://github.com/AlexisVergoz" target="_blank" rel="noopener noreferrer">
                            <h4>GitHub</h4>
                            <i className="lab la-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default contact;