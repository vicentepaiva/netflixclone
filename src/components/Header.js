import React from 'react';
import './Header.css';

export default ({black}) => {
    
    
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://github.com/gustavo-nt/netflix-clone/blob/master/public/logo.png?raw=true" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://github.com/gustavo-nt/netflix-clone/blob/master/public/user.png?raw=true" alt="Usuário" />
                </a>
            </div>
        </header>
    )
}