const express = require("express");
const router = express.Router();
const livrosRoutes = require(".//livros.routes");
const pdfRoutes = require(".//pdf.routes");
const estanteRoutes = require(".//estante.routes");


router.use("/livros", livrosRoutes);
router.use("/pdf", pdfRoutes);
router.use("/estante", estanteRoutes);

module.exports = router;