const { client } = require('./');
const { rebuildDB } = require('./seedData.js');

rebuildDB()
    .catch(console.error)
    .finally(() => client.end());
