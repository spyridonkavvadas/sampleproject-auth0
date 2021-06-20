import React from 'react';
import './Navigation.css';
import AuthenticationButton from './AuthenticationButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
//import { Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
    return (

        <div className='Nav'>
            <ul>
                <Link to='/'>
                <li className='nav-links'>Home</li>
                </Link>
                <Link to='/project'>
                <li className='nav-links'>Projects</li>
                </Link>
                
                <li className='nav-links'><AuthenticationButton /></li>
                <li className='nav-links'><LogoutButton /></li>
            </ul>
        </div>
    )
}

export default Navigation
