import { Router } from 'express'

const categoriesRoutes = Router()

const categories: object[] = []

categoriesRoutes.post('/categories', (req, resp) => {
  const { name, description } = req.body

  categories.push({
    name,
    description,
  })

  return resp.status(201).json(categories)
})

export { categoriesRoutes }
