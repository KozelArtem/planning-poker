const { Router } = require('express');

const ctrl = require('../controllers/auth');

const router = Router();

router.post('/login', ctrl.login);
router.post('/signup', ctrl.signUp);
router.post('/signup/anonymous', ctrl.signUpAnonymous);

module.exports = router;
