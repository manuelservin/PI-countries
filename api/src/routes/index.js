const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoutes = require('./CountryRoutes')
const activityRoutes = require('./ActivityRoutes')

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/country', countryRoutes);
router.use('/activity', activityRoutes);



module.exports = router;
