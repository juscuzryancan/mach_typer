import React from 'react';
import {Button} from '@material-ui/core';

const Header = () => {
    return (
        <header className="app-header">
            <Button>Leaderboards</Button>
            <Button>Login</Button>
            <Button>Register</Button>
        </header>
    );
}

export default Header;