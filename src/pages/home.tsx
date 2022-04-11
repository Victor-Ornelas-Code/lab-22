
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import { useProducts } from "../Data/data";



const Home = () => {
  const {products, setProducts} = useProducts();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProducts()
  }, [])

//  const products = useGetData((state) => state.setProducts);
//  const victor = products(["oi"])
//  console.log(useGetData((state) => state.products))
 

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {products.map(product =>
          <Product
            key={product.id} {...product}/>)}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
