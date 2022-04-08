
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";


const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const pegarData = async () => {
      const response = await axios.get('http://localhost:3001/products')
      setProducts(response.data)
    }
    pegarData()
  }, [])

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {products.map(product =>
          <Product
            id={product.id}
            picture={product.picture}
            name={product.name}
            price={product.price} />)}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
