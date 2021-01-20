import axios from 'axios';

const login = async (username, password) => {
    try {
        const { data: token } = axios.post(`/api/users/login`, {
            username,
            password
        });
        return token;
    } catch (error) {
        console.error(error);
    }
}

const register = async (username, password) => {
    try {
        const { data: token } = axios.post(`/api/users/register`, {
            username,
            password
        });
        return token; 
    } catch (error) {
        console.error(error);
    }
}

export {
    login,
    register
}