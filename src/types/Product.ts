export interface Category {
    id?: number;
    name: string;
    beautifulName: string
}

export interface Product {
    id?: number;
    name: string;
    description: string;
    image: string;
    category: Category["name"];
    price: string;
}
