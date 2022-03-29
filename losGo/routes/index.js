var express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

/* GET de Pagina de Inicio */
router.get('/', controller.index);
/* GET de Pagina de Contacto */
router.get('/contacto',controller.contact);
/* POST de contacto */
router.post('/contacto',controller.send)
/* GET de Pagina de Propuestas por id */
router.get('/propuesta/:id/',controller.proposal);

module.exports = router;
