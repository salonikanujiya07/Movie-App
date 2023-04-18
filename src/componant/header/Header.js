import './Header.css'
import { Link } from 'react-router-dom'
import user from "../images/user.jpg"

import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerleft">
                <Link to="./" style={{textDecoration: "none"}}><span>Movie App</span> </Link>
                <Link to ="/movies/popular"style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to ="/movies/top_rated"style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming " style={{textDecoration: "none"}}><span>Upcoming</span> </Link>
            </div>
            <div className='user-image'>
                <img src={user} alt="user"/>

            </div>
            
        </div>
        
    );
};

export default Header;