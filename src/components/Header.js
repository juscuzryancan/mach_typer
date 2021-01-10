import React from 'react';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="app-header">
            <Button>
                <Link className="nav-link" to='/'>Home</Link>
            </Button>
            <Button>
                <Link className="nav-link" to='/leaderboards'>Leaderboards</Link>
            </Button>
            <Button>
                <Link className="nav-link" to='/login'>Login</Link>
            </Button> 
            <Button>
                <Link className="nav-link" to='/register'>Register</Link>
            </Button>
        </header>
    );
}

export default Header;