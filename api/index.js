const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('API UNDER CONSTRUCTION');
});

router.get('/health', (req, res, next) => {
    res.send({message: 'The server is up'});
});

router.get('*', (req, res, next) => {
    res.status(404).send('Page was not found');
});

module.exports = router;