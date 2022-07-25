import Category from "../model/Category"

interface CreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
    
  private categories: Category[] 

  constructor() {
    this.categories = []
  }

  getCategories(): Category[] {
    return this.categories
  }

  findByCategory(cat: string): Category | undefined {
    return this.categories.find(category => category.name === cat)
  }

  create({ name, description }: CreateCategoryDTO): void {
    const category = new Category

    const categoryAlreadyExists = this.findByCategory(name)

    if (categoryAlreadyExists) {
      throw new Error(`Categoria ${name} já existe`)
    }

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push(category)
  }

}

export default CategoriesRepository