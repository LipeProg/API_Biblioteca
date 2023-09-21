module.exports = (sequelize, Sequelize) => {
    const livros = sequelize.define("pdf", {
      titulo: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },

    });
  
    return livros;
  };