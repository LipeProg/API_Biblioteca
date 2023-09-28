const express = require("express");
const router = express.Router();
const livrosController = require('../controllers/livros.controllers');


router.post('/', livrosController.create); 
router.get('/', livrosController.findAll);
router.get('/:id', livrosController.findOne);
router.put('/:id', livrosController.update);
router.delete('/:id', livrosController.delete);

module.exports = router;