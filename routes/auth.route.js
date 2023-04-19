const router = require('express').Router();
const {signIn} = require('../controllers/AuthController');

router.post('/',signIn);

module.exports = router;


