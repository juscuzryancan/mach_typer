const client = require('./client');

const dropTables = async () => {
    console.log('Dropping All Tables...');
    try {
        await client.query(`
            DROP IF EXISTS users
        `)
        console.log('Successfully Dropped All Tables');
    } catch (error) {
        console.error('Failed Dropping Tables');
        throw error;
    }
}

const createTables = async () => {
    console.log('Creating Tables');
    try {
        await client.query(`
            CREATE TABLE users(
                id SERIAL PRIMARY
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );
        `);
    } catch (error) {
        console.log('Failed creating tables')
        throw error
    }
}

const rebuildDB = async () => {
    try {
        client.connect();
    } catch (error) {
        console.error('Error during rebuildDB');
        throw error;
    }
}

module.exports = {
    rebuildDB
}