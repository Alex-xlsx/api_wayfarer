// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
// router.get('/cities', ctrl.cities.index);
// router.get('/:id', ctrl.games.show);
router.get('/desc', ctrl.blogPosts.newestFirst);
router.post('/new', ctrl.blogPosts.create);
router.put('/:id', ctrl.blogPosts.update);
router.delete('/:id', ctrl.blogPosts.destroy);

// exports
module.exports = router;
