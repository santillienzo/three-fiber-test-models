import { Category } from "../types/Product";
import config from "../utils/config";
const {backendUri} = config

const BASE_URL = `${backendUri}/categories`;

export const CategoryService = {
  
    // Obtener todas las tareas
    getAllCategories: async (): Promise<Category[]> => {
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        return data;
    },

    // Obtener una tarea
    getOneCategory: async (id: number): Promise<Category> => {
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    },

    // Obtener tareas en una categoria
    getCategoryByName: async (name: string): Promise<Category[]> => {
        const response = await fetch(`${BASE_URL}?name=${name}`);
        const data = await response.json();
        return data;
    },

    // Eliminar una tarea
    deleteCategory: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/${id}`, {
          method: 'DELETE',
        });
    },
};
