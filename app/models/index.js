const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const estante = require("./estante.js")(sequelize, Sequelize);
const livro = require("./livros.models.js")(sequelize, Sequelize);
const pdf = require("./pdf.models.js")(sequelize, Sequelize);

estante.hasMany(livro, { as: "livros" });
estante.hasMany(pdf, { as: "pdf" });

sequelize.sync()
  .then(() => {
    console.log('Tabelas sincronizadas com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas com o banco de dados:', error);
  });

  module.exports = db;