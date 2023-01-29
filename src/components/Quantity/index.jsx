import styled from "styled-components"
import { gray800, green200 } from "../UI/variables"

const ContainerQuantity = styled.section`
  background-color: ${green200};
  color: ${gray800};
  display: flex;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 32px;
  padding: 16px 20px;
`

export default function Quantity() {
  return(
    <ContainerQuantity>
      <p>Produto</p>
      <p>Quantidade</p>
    </ContainerQuantity>
  )
}