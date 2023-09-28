const db = require("../models");
const PDF = db.pdf;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.titulo) {
        res.status(400).send({
          message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const pdf = {
        titulo: req.body.titulo,
        genero: req.body.genero,
        coleção: req.body.coleção ? req.body.coleção : false
    };

    PDF.create(pdf)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao registrar o pdf."
      });
    });
};

exports.findAll = (req, res) => {
    const titulo = req.query.titulo;
    var condition = titulo ? { titulo: { [Op.iLike]: `%${titulo}%` } } : null;
  
    PDF.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar pesquisar o pdf."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    PDF.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Não foi possível encontrar o pdf com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar encontrar o pdf com o id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    PDF.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O dados do pdf foram atualizado."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar os dados do pdf com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar atualizar os dados do pdf com o id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    PDF.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O pdf foi apagado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel apagar o pdf com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar apagar o pdf com o id=" + id
        });
      });
};



