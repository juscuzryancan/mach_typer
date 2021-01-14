import React from 'react';
import { TextField, Button, Switch } from '@material-ui/core';

const Register = () => {

    return (
        <form className='login-form'>
            <TextField required variant='outlined' placeholder='Username'></TextField>
            <TextField required variant='outlined' placeholder='Password'></TextField>
            <Switch />   
            <Button>Login</Button>
        </form>
    );
}

export default Register;