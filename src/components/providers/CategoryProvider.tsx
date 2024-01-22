import { ReactNode, createContext, useEffect, useState } from 'react'
import { ICategoryContext } from '../../types/Providers'
import { Category } from '../../types/Product'
import { CategoryService } from '../../services/CategoriesService'

const CategoryContext = createContext<ICategoryContext>({} as ICategoryContext)


interface Props {
  children: ReactNode
}


export function CategoryProvider ({children}: Props) {

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    name: "PIZZA_TRAD",
    beautifulName: 'Pizzas tradicionales'
  })

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const CategoriesData = await CategoryService.getAllCategories();
      setCategories(CategoriesData);
    };

    fetchProducts();
  }, []);


  return (
    <CategoryContext.Provider value={{categories, selectedCategory, setSelectedCategory}}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContext