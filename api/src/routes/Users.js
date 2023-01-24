const { Router } = require ('express');
const router = Router();
const { prueba } = require('../controller/Users.js')

router.get('/api/prueba', prueba);


module.exports = router;