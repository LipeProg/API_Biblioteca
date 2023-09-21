module.exports = (sequelize, Sequelize) => {
    const livros = sequelize.define("estante", {
      genero: {
        type: Sequelize.STRING
      },
      coleções: {
        type: Sequelize.STRING
      }
    });
  
    return livros;
  };