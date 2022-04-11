import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { Wrapper, IconWrapper, Quantity } from "./styles";


type IncrementorType = {
  id: number;
  quantityBuy: number;
  handleIncrement: (id: number, quantityBuy: number) => void;
  handleDecrement: (id: number, quantityBuy: number) => void;
};

const Incrementor = ({ id, quantityBuy: quantityBuy, handleIncrement,  handleDecrement}: IncrementorType) => {
 
  return (
    <Wrapper>
      <IconWrapper>
      <SubtractIcon onClick={() => handleDecrement(id, quantityBuy)} aria-label="Subtract item" />
      </IconWrapper>
      <Quantity>{quantityBuy}</Quantity>
      <IconWrapper>
      <PlusIcon onClick={() => handleIncrement(id, quantityBuy)} aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
  )
}


export default Incrementor;
