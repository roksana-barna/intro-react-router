import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to='/friends'>Friends</Link>

            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/service'>Service</Link>
            <Link to='/detail'>Detail</Link>
            
        </nav>
    );
};

export default Header;