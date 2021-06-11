// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/cities', ctrl.cities.index);
// router.get('/:id', ctrl.games.show);
// router.post('/', ctrl.games.create);
// router.put('/:id', ctrl.games.update);
// router.delete('/:id', ctrl.games.destroy);

// exports
module.exports = router;
