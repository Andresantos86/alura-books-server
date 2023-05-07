const fs = require("fs")

function getTodosFavoritos(){
  return JSON.parse(fs.readFileSync('favoritos.json'))
}

function inserirFavorito(id){
  const livros = JSON.parse(fs.readFileSync('livros.json'))
  const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))
  const livroInserido = livros.find(livro => livro.id === id)
  const novaListaFavoritos = [...favoritos, livroInserido]
  fs.writeFileSync("favoritos.json",JSON.stringify(novaListaFavoritos))
}

function deleteFavoritoId(id){
  const livros = JSON.parse(fs.readFileSync('favoritos.json'))
  const livroFiltrado = livros.filter(livro=> livro.id != id)  
  fs.writeFileSync('favoritos.json',JSON.stringify(livroFiltrado))
}

module.exports = {
  getTodosFavoritos,
  deleteFavoritoId,
  inserirFavorito,
}