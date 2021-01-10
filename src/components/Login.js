import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './Login.css'

const Login = () => {

    return (
        <form className='login-form'>
            <TextField required variant='outlined' placeholder='Username'></TextField>
            <TextField required variant='outlined' placeholder='Password'></TextField>
            <Button>Login</Button>
        </form>
    );
}

export default Login;