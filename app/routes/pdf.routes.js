const express = require("express");
const router = express.Router();
const pdfController = require('../controllers/pdf.controllers');

router.post('/', pdfController.create); 
router.get('/', pdfController.findAll);
router.get('/:id', pdfController.findOne);
router.put('/:id', pdfController.update);
router.delete('/:id', pdfController.delete);

module.exports = router;