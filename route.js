const { Router } = require('express');

const router = new Router();

const { StartGame, playGame, view } = require('./controller')

router.route('/start/:number')
    .get((...args) => StartGame(...args));

router.route('/play/:number')
    .get((...args) => playGame(...args));

router.route('/')
    .get((...args) => view(...args));

module.exports = router;