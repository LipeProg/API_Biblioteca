const express = require("express");
const cors = require ("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const routes = require('./app/routes/index')
app.use('/', routes);

app.get("/", (req,res) => {
   res.json({message: 'API Estante'}) 
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}.`);
});