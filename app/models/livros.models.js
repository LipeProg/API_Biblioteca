module.exports = (sequelize, Sequelize) => {
    const livros = sequelize.define("livros", {
      titulo: {
        type: Sequelize.STRING
      },
      editora: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      coleção: {
        type: Sequelize.BOOLEAN
      },
      nota: {
        type: Sequelize.FLOAT
      }
    });
  
    return livros;
  };