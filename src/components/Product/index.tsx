import { useState } from "react";
import { useCart, useProducts } from "../../Data/data";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity?: number;
  quantityCart?: number;
};

const Product = ({ id, name, price, picture, quantityCart}: ProductProps) => {
  const {cart , setCart} = useCart();
  const {products, setProductInicial} = useProducts();

  const handleIncrement = (quantityCart: number) => {
    const product = products.find((product) => product.id === id);
    if(product!.quantity! >= product!.quantityCart! + 1){
      if(cart.length > 0){
        const product = cart.find((item) => item.id === id)

        if(product){
          product.quantityCart = product.quantityCart! + 1;
        } else{
          setCart(id, name, price, picture, 1);
        }
      } else{
        setCart(id, name, price, picture, quantityCart)
      }
      updateProductList('increment')
    }
  }

  const handleDecrement = (quantityCart: number) => {
    const product = products.find((product) => product.id === id)!.quantityCart;

    if(product! - 1 >= 0){
      const product = cart.find((product) => product.id === id);
      if(product){
        product.quantityCart = product.quantityCart! - 1
      }
      
      setCart(id, name, price, picture, quantityCart - 1)
      updateProductList('decrement')
    }

  }

  const updateProductList = (actionType: string) => {
    let product = products.find((product) => product.id === id);

    if(actionType === 'increment') {
      product!.quantityCart = product!.quantityCart! + 1;
      setProductInicial(products)
    } else {
      product!.quantityCart = product!.quantityCart! - 1;
      setProductInicial(products)
    }
  }

  const priceStyle = price.toLocaleString('pt-br' , { style: 'currency' , currency:'BRL'})

  return (
    <Wrapper>

      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{priceStyle}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor handleIncrement={handleIncrement} handleDecrement={handleDecrement} id={id} quantityCart={quantityCart!} />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  )
};

export default Product;
