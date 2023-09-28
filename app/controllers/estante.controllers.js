const db = require("../models");
const Estante = db.estante;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

// aqui estamos definindo os atributos da tabela estante
// puxando os atributos do model
    const estante = {
        genero: req.body.genero,
        coleções: req.body.coleções
    };


 /* estamos usando o metodo create do sequelize
    pra criar um registro na DB(Estante, la do começo)
    com os dados contidos na const 'estante' */
    Estante.create(estante)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar criar o item."
      });
    });
};

exports.findAll = (req, res) => {

  //estamos definindo o parametro name
    const name = req.query.name;
  //estamos usando um operador ternario para validar o parametro name
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  

  //estamos usando no DB o metodo findAll do sequelize para fazer consulta
    Estante.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar pesquisar os itens."
        });
      });
};


exports.update = (req, res) => {
    const id = req.params.id;

    Estante.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O item foi atualizado."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar o item com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar atualizar o item com o id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Estante.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O item foi apagado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel apagar o item com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar apagar o item com o id=" + id
        });
      });
};
