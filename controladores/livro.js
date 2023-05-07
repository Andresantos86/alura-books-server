const { getTodosLivros, getTodosLivroPorId, inserirLivro, modificaLivro, deleteLivroId } = require('../servicos/livro')

function getLivros(req, res) {
  try {
    const livros = getTodosLivros()
    res.send(livros)
  } catch (error) {
    res.send(error)
  }
}

function getLivroId(req, res) {
  try {
    const id = req.params.id
    if (!id && !Number(id)) {
      throw new error("Informe um numero")
    }
    const livro = getTodosLivroPorId()
    res.send(livro)
  } catch (error) {
    res.send(error)
  }
}

function postLivro(req, res) {
  try {
    const livronovo = req.body
    inserirLivro(livronovo)
    res.status(201)
  } catch (error) {
    res.send(error.message)
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      const body = req.body
      modificaLivro(body, id)
      res.send("Item modificado com sucesso")
    } else {
      res.status(422)
      res.send("Id inválido")
    }

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      deletaLivroPorId(id)
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
module.exports = {
  getLivros,
  getLivroId,
  postLivro,
  patchLivro,
  deleteLivro
}