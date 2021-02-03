import React, {useState} from 'react';
import { TextField, Button, Card } from '@material-ui/core';
import { register } from '../../api';
import './Register.css'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = (e) => {
        e.preventDefault();
        register(username, password);
    }

    return (
        <form className="register-form" onSubmit={handleRegister}>
            <TextField onChange={(e) => setUsername(e.target.value)} required variant='outlined' placeholder='Username'></TextField>
            <TextField onChange={(e) => setPassword(e.target.value)} required variant='outlined' placeholder='Password'></TextField>
            <TextField onChange={(e) => setPassword(e.target.value)} required variant='outlined' placeholder='Verify Password'></TextField>
            <Button type='submit'>Register</Button>
        </form>
    );
}

export default Register;