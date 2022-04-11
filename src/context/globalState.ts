import axios from "axios";
import create from "zustand";
import { ProductProps } from "../components/Product";


type ProductsType = {
	products: ProductProps[],
	setProducts: () => void,
	setProductList: (productslist: ProductProps[]) => void,

}

export const useProducts = create<ProductsType>(set => ({
	products: [],
	setProducts: async () => {
		const response = await axios.get('http://localhost:3001/products')
		set(() => ({ products: response.data }))

		response.data.map((product: ProductProps) => product.quantityBuy = 0)
		set(() => ({products: response.data}))
	
	},
	setProductList: (productlist) => set({products: productlist})
}))

type CartType = {
	cart: ProductProps[],
	setCart: (id: number, name: string, price: number, picture: string, quantityBuy: number, quantity: number) => void,
}

export const useCart = create<CartType>((set) => ({
	cart: [],
	setCart: (id, name, price, picture, quantityBuy, quantity) => {
		set(({ cart }) => {
			let validate = true;
			cart.forEach(products => {
				if (products.id === id) validate = false
			});

			if (validate) {
				return { cart: [...cart, { id, name, price, picture, quantityBuy, quantity }] }
			};
			return { cart };
		});
	},
}));