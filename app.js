const express = require("express")
const rotaLivro = require("./rotas/livro")
const rotaFavorito = require('./rotas/favorito')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))
app.use('/livro',rotaLivro)
app.use('favoritos',rotaFavorito)
const port = 8000

app.get('/',(req, res)=>{
    res.send('Hello Word')
})

app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)
})