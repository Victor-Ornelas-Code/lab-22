import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";

import { Wrapper, Subtotal, Header } from "./styles";
import { useCart } from "../../context/globalState";
import Product from "../Product";

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};


const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const { cart } = useCart();

  const valueTotal = () => {
    let total: number = 0;
    cart.forEach((product) => {
      total = total + (product.quantityBuy * product.price)
    })
    return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size="large" fontWeight={600}>
          Produtos no carrinho
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
      {cart.map((product) => product.quantityBuy > 0 &&
        <Product
          key={product.id} {...product} />)}

      <Subtotal>
        <Typography level={5} size="large" fontWeight={600}>
          Total
        </Typography>
        <Typography>{valueTotal()}</Typography>
      </Subtotal>

      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  )
};

export default MenuPayment;
