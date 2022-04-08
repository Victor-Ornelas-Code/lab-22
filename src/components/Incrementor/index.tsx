import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { Wrapper, IconWrapper, Quantity } from "./styles";
import create from 'zustand'
import { constants } from "buffer";

type IncrementorProps = {
  id: number;
  quantity: number;
};

const Incrementor = ({ id, quantity }: IncrementorProps) => {

  type useStoleProps = {
    count: number,
    inc: () => void,
    dec: () => void,
  }

  const useStore = create<useStoleProps>(set => ({
    count: 0,
    inc: () => set(state => ({ count: state.count + 1 })),
    dec: () => set(state => ({ count: state.count - 1 })),
  }))

  const PlusControl = () => {
    const inc = useStore(state => state.inc)
    return <PlusIcon onClick={inc} aria-label="Add item" />
  }

  const SubtractControl = () => {
    const dec = useStore(state => state.dec)
    return <SubtractIcon onClick={dec} aria-label="Subtract item" />
  }

  const Counter = () => {
    const count = useStore(state => state.count)
    return <Quantity>{count}</Quantity>
  }

  return (
    <Wrapper>
      <IconWrapper>
        <SubtractControl />
      </IconWrapper>
      <Counter />
      <IconWrapper>
        <PlusControl />
      </IconWrapper>
    </Wrapper>
  )
}


export default Incrementor;
