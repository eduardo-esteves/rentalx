import CategoriesRepository, { CreateCategoryDTO } from "../repositories/CategoriesRepository"

class CreateCategoryService {

  private categoriesRepository: CategoriesRepository

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute({ name, description }: CreateCategoryDTO): void {

    const categoryAlreadyExists = this.categoriesRepository.findByCategory(name)

    if (categoryAlreadyExists) {
      throw new Error(`Categoria ${name} já existe`)
    }

    this.categoriesRepository.create({name, description})
  }

}

export default CreateCategoryService