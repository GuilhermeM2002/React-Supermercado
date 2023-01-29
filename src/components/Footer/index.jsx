import styled from "styled-components"
import Button from "../Button"
import Quantity from "../Quantity"

const FooterStyle = styled.footer`
  margin: 0 36px 32px 36px;
`
export default function Footer(){
  return(
    <FooterStyle>
      <Quantity />
      <Button>
        Ver carrinho
      </Button>
    </FooterStyle>
  )
} 