const router = require('express').Router();
const {
    createUser,
    getUser,
} = require('../../db');

router.post('/login', async (req, res, next) => {
    const {username, password} = req.body;
    try {
        const user = await getUser({username, password});
        res.send(user);
    } catch (error) {
        console.error('Server Error: Bad Login')
        next(error);
    }
});

router.post('/register', async (req, res, next) => {
    const {username, password} = req.body;
    try {
        const user = await createUser({username, password});
        res.send(user);
    } catch (error) {
        console.error('Server Error: Bad Login')
        next(error);
    }

});

module.exports = router;