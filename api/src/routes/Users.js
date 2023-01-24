const { Router } = require ('express');
const router = Router();
const { allUsers, userById, updateUserById } = require('../controller/Users.js')
const { api } = require('../controller/index.js')

router.get('/api', api);
router.get('/api/users', allUsers);
router.get('/api/users/:id', userById);
router.put('/api/users/:id', updateUserById);



module.exports = router;