const router = require('express').Router();
const {
    index,
    store,
    update,
} = require('../controllers/UserController');

router.get('/',index);
router.get('/store',store);
router.put('/:id',update);

module.exports = router;
