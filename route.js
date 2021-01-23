const { Router } = require('express');

const router = new Router();

const { StartGame, playGame } = require('./controller')

router.route('/start/:number')
    .get((...args) => StartGame(...args));

router.route('/play/:number')
    .get((...args) => playGame(...args));

module.exports = router;