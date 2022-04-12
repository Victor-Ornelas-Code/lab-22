import { useCart, useProducts } from "../../context/globalState";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
  quantityBuy: number;
};

const Product = ({ id, name, price, picture, quantityBuy: quantityBuy }: ProductProps) => {
  const { cart, setCart } = useCart();
  const { products, setProductList } = useProducts();

  const handleIncrement = (quantityBuy: number, quantity: number) => {
    const product = products.find((product) => product.id === id);
    if (product!.quantity >= product!.quantityBuy + 1) {
      if (cart.length >= 0) {
        const product = cart.find((item) => item.id === id)

        if (product) {
          product.quantityBuy = product.quantityBuy + 1;
        } else {
          setCart(id, name, price, picture, 1, quantity);
        }
      } else {
        setCart(id, name, price, picture, quantityBuy, quantity)
      }
      updateProductList('increment')
    }
  }

  const handleDecrement = (quantityBuy: number , quantity: number) => {
    const product = products.find((product) => product.id === id)!.quantityBuy;

    if (product - 1 >= 0) {
      const product = cart.find((product) => product.id === id);
      if (product) {
        product.quantityBuy = product.quantityBuy - 1
      }

      setCart(id, name, price, picture, quantityBuy - 1, quantity)
      updateProductList('decrement')
    }

  }

  const updateProductList = (actionType: string) => {
    let product = products.find((product) => product.id === id);

    if (actionType === 'increment') {
      product!.quantityBuy = product!.quantityBuy + 1;
      setProductList(products)
    } else {
      product!.quantityBuy = product!.quantityBuy - 1;
      setProductList(products)
    }
  }

  const priceStyle = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  return (
    <Wrapper>

      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{priceStyle}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            id={id}
            quantityBuy={quantityBuy} />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  )
};

export default Product;
