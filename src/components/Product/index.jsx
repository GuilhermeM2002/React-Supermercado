import styled from "styled-components";
import products from "../../products.json";
import { gray800 } from "../UI/variables";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  width: 100%;
`;
const Fruit = styled.img`
  height: 36px;
  width: 36px;
`;
const Text = styled.p`
  color: ${gray800};
  font-size: 16px;
  
`;
const Plus = styled.img`
  color: ${gray800};
  height: 32px;
  width: 32px;
`;

export default function Product() {
  const listProducts = Object.entries(products);
  const singleProduct = listProducts.map((products) => [...products]);

  return singleProduct.map((product) => {
    return (
      <Section key={`${product[1].nome}${product[1].preco}`}>
        <Fruit src={product[1].imagem} />
        <Text>{product[1].nome}</Text>
        <Text>R$ {product[1].preco}</Text>
        <Plus src="/images/plusCircle.svg" />
      </Section>
    );
  });
}
