import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { Wrapper, IconWrapper, Quantity } from "./styles";
import create from 'zustand'
import { constants } from "buffer";
import { useCart } from "../../Data/data";

type IncrementorProps = {
  id: number;
  quantityCart: number;
  handleIncrement: (id: number, quantityCart: number) => void;
  handleDecrement: (id: number, quantityCart: number) => void;
};

const Incrementor = ({ id, quantityCart, handleIncrement,  handleDecrement}: IncrementorProps) => {
 
  return (
    <Wrapper>
      <IconWrapper>
      <SubtractIcon onClick={() => handleDecrement(id, quantityCart)} aria-label="Subtract item" />
      </IconWrapper>
      <Quantity>{quantityCart}</Quantity>
      <IconWrapper>
      <PlusIcon onClick={() => handleIncrement(id, quantityCart)} aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  )
}


export default Incrementor;
