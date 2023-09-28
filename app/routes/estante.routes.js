const express = require('express');
const router = express.Router();
const estanteController = require('../controllers/estante.controllers');

router.post('/', estanteController.create); 
router.get('/', estanteController.findAll);
router.put('/:id', estanteController.update);
router.delete('/:id', estanteController.delete);


module.exports = router;