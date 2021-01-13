const client = require('./client');

const dropTables = async () => {
    console.log('Dropping All Tables...');
    try {
        await client.query(`
            DROP TABLE IF EXISTS tests; 
            DROP TABLE IF EXISTS users;
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
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );

            CREATE TABLE tests(
                id SERIAL PRIMARY KEY,
                "userId" INTEGER REFERENCES users(id),
                timeConstraint INTEGER,
                wordConstraint INTEGER,
                wpm INTEGER
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
        await dropTables();
        await createTables();
    } catch (error) {
        console.error('Error during rebuildDB');
        throw error;
    }
}

module.exports = {
    rebuildDB
}