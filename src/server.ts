import express from 'express'

const app = express()

app.get('/', (req, resp) => resp.json({ message: 'Hello Dev Typescript' }))

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
