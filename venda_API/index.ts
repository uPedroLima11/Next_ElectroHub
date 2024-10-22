import express from 'express'
import marcasRoutes from './routes/marcas'
import produtosRoutes from './routes/produtos'
import clienterRoutes from './routes/clientes'
import avalicoesRoutes from './routes/avaliacoes'
import cors from 'cors'
const app = express()
const port = 3004

app.options('*', cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/marcas", marcasRoutes)
app.use("/produtos", produtosRoutes)
app.use("/clientes", clienterRoutes)
app.use("/avaliacoes", avalicoesRoutes)

app.get('/', (req, res) => {
  res.send('API: Sistema de vendas de produtos para computadores')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})