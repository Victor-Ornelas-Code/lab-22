import axios, { responseEncoding } from "axios";
import { Iterations } from "styled-icons/octicons";
import create from "zustand";
import { ProductProps } from "../components/Product";


type Products = {
	products: ProductProps[],
	setProducts: () => void,
	setProductInicial: (productslist: ProductProps[]) => void,

}

export const useProducts = create<Products>(set => ({
	products: [],
	setProducts: async () => {
		const response = await axios.get('http://localhost:3001/products')
		set(() => ({ products: response.data }))

		response.data.map((product: ProductProps) => product.quantityCart = 0)
		set(() => ({products: response.data}))
	
	},
	setProductInicial: (productlist) => set({products: productlist})
}))

type CartProps = {
	cart: ProductProps[],
	setCart: (id: number, name: string, price: number, picture: string, quantityCart: number) => void,
}

export const useCart = create<CartProps>((set) => ({
	cart: [],
	setCart: (id, name, price, picture, quantityCart) => {
		set(({ cart }) => {
			let validate = true;
			cart.forEach(products => {
				if (products.id === id) validate = false
			});

			if (validate) {
				return { cart: [...cart, { id, name, price, picture, quantityCart }] }
			};
			return { cart };
		});
	},
}));