import React from 'react';
import { TextField, Button, Switch } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

    return (
        <form className='login-form'>
            <h1>Sign In</h1>
            <TextField required variant='outlined' placeholder='Username'></TextField>
            <TextField required variant='outlined' placeholder='Password'></TextField>
            <Switch >Remember Me</Switch>
            <Button>Login</Button>
            <div>
                Need an account? <Link to="/register">Sign Up</Link>
            </div>
        </form>
    );
}

export default Login;