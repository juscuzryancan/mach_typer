const router = require('express').Router();
const {
    createUser,
    getUser,
} = require('../db');

router.post('/', async (req, res, next) => {
    const {username, password} = req;
    try {
        const user = await createUser({username, password});
        res.send(user);
    } catch (error) {
        console.error('Error posting on /users')
        next(error);
    }
});

module.exports = router;