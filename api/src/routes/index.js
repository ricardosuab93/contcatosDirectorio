const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usuarioRoutes = require('./Users.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', usuarioRoutes);
//router.use('/', activityRoutes);

module.exports = router;