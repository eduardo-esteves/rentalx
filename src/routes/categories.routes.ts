import { Router } from 'express'
import CategoriesRepository from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository

categoriesRoutes.post('/categories', (req, resp) => {
  const { name, description } = req.body

  const categoryAlreadyExists = categoriesRepository.findByCategory(name)

  if (categoryAlreadyExists) {
    return resp.status(400).json({error: `category ${categoryAlreadyExists.name} already exists`})
  }

  categoriesRepository.create({name, description})

  return resp.status(201).send()
})

categoriesRoutes.get('/categories', (req, resp) => {
  const categories = categoriesRepository.getCategories()
  
  return resp.json(categories)
})

export { categoriesRoutes }
