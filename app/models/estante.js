module.exports = (sequelize, Sequelize) => {
    const Estante = sequelize.define("estante", {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      genero: {
        type: Sequelize.STRING
      },
      coleções: {
        type: Sequelize.STRING
      }
    });
  
    return Estante;
  };