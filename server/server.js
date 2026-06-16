import express from 'express'
import './config/dotenv.js'
import recipesRouter from './routes/recipes.js'

const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Recipes API</h1>')
})

app.use('/recipes', recipesRouter)

app.use((req, res) => {
  res.status(404).sendFile('public/404.html', { root: '.' })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})