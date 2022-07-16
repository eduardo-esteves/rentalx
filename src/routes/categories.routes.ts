import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'

const categoriesRoutes = Router()

const categories: object[] = []

categoriesRoutes.post('/categories', (req, resp) => {
  const { name, description } = req.body

  categories.push({
    id: uuidV4(),
    name,
    description,
  })

  return resp.status(201).json(categories)
})

export { categoriesRoutes }
