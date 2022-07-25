import { Router } from 'express'
import CategoriesRepository from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository

categoriesRoutes.post('/categories', (req, resp) => {

  const { name, description } = req.body

  try{
    categoriesRepository.create({name, description})
    const categories = categoriesRepository.getCategories()
    return resp.status(201).json(categories)
  }catch(e: any) {
    return resp.status(400).json({error: e.message})
  }

})

categoriesRoutes.get('/categories', (req, resp) => {
  const categories = categoriesRepository.getCategories()
  
  return resp.json(categories)
})

export { categoriesRoutes }
