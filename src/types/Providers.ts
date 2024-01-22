import { Dispatch, SetStateAction } from "react";
import { Category } from "./Product";

export interface ICategoryContext {
    categories: Category[],
    selectedCategory: Category,
    setSelectedCategory: Dispatch<SetStateAction<Category>>
}