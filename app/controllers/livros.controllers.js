const db = require("../models");
const Livros = db.livro;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.titulo) {
        res.status(400).send({
          message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const livro = {
        titulo: req.body.titulo,
        editora: req.body.editora,
        genero: req.body.genero,
        coleção: req.body.coleção ? req.body.coleção : false,
        nota: req.body.nota
    };

    Livros.create(livro)
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
    const titulo = req.query.titulo;
    var condition = titulo ? { titulo: { [Op.iLike]: `%${titulo}%` } } : null;
  
    Livros.findAll({ where: condition })
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

exports.findOne = (req, res) => {
    const id = req.params.id;

    Livros.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Não foi possível encontrar o item com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar encontrar o item com o id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Livros.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O dados do livro foram atualizado."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar os dados livro com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar atualizar os dados do livro com o id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Livros.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O livro foi apagado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel apagar o livro com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar apagar o livro com o id=" + id
        });
      });
};



