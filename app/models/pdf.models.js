module.exports = (sequelize, Sequelize) => {
    const pdf = sequelize.define("pdf", {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      coleção: {
        type: Sequelize.BOOLEAN
      }
    });
  

    pdf.belongsTo(sequelize.models.estante, {
      foreignKey: 'estanteId',
      as: 'estante'
    });
    
    return pdf;
  };