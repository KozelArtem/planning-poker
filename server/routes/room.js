const { Router } = require('express');

const ctrl = require('../controllers/room');
const { loadRoomByHash } = require('./middlewares/room');

const router = Router();

router.post('/rooms', ctrl.create);
// router.get('/rooms/:hash', loadRoomByHash, ctrl.get);

module.exports = router;
