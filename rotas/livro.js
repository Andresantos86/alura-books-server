const {Router} = require('express')
const { getLivros, getLivroId, postLivro, patchLivro, deleteLivro } = require('../controladores/livro')
const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivroId)

router.post('/',postLivro)


router.patch('/:id',patchLivro)

router.delete('/',deleteLivro)
module.exports = router