import styled from "styled-components";
import Product from "../Product";

const Container = styled.main`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 32px 36px 0 36px;
`;

export default function ListProducts() {
  return (
    <Container>
      <Product />
    </Container>
  );
}
