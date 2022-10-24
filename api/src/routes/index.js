const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const getDogs = require('./getDogs')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', getDogs);

module.exports = router;
