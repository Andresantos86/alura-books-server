const { inserirFavorito, deleteFavoritoId, getTodosFavoritos} = require("../servicos/favorito")

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos()
    res.send(livros)
  } catch (error) {
    res.send(error)
  }
}


function deleteFavorito(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      deleteFavoritoId(id)
      res.send("livro deletado com sucesso")
    } else {
      res.status(422)
      res.send("ID inválido")
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function postFavorito(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      inserirFavorito(id)
      res.send("livro cadastrado com sucesso")
    } else {
      res.status(422)
      res.send("ID inválido")
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getFavoritos,
  deleteFavorito,
  postFavorito
}