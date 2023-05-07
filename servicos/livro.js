const fs = require("fs")

function getTodosLivros(){
  return JSON.parse(fs.readFileSync('livros.json'))
}

function getTodosLivroPorId(id){
  const livros = JSON.parse(fs.readFileSync('livros.json'))
  const livroFiltrado = livros.filter(livro=> livro.id == id)
  return livroFiltrado
}

function inserirLivro(livroNovo){
  const livros = JSON.parse(fs.readFileSync('livros.json'))
  const novaLista = [...livros, livroNovo]
  fs.writeFileSync("livros.json",JSON.stringify(novaLista))
}
function modificaLivro (modificacoes,id){
  let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
  const indiceModificado = livrosAtuais.findIndex(livro=> livro.id == id)
  const conteudoAlterado = {...livrosAtuais[indiceModificado], ... modificacoes}
  livrosAtuais[indiceModificado] = conteudoAlterado
  fs.writeFileSync('livros.json',JSON.stringify(livrosAtuais))
}
function deleteLivroId(id){
  const livros = JSON.parse(fs.readFileSync('livros.json'))
  const livroFiltrado = livros.filter(livro=> livro.id != id)  
  fs.writeFileSync('livros.json',JSON.stringify(livroFiltrado))
}

module.exports ={
  getTodosLivros,
  getTodosLivroPorId,
  inserirLivro,
  modificaLivro,
  deleteLivroId
}