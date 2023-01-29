import styled from "styled-components"

import { ShoppingCart } from "../UI"
import {red800, red600} from "../UI/variables"

import shoppingCart from "/images/shoppingCart.svg"

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 32px;
`
const H1 = styled.h1`
  color: ${red800};
  margin-bottom: 8px;
  margin-top: 12px;
  font-size: 24px;
  font-weight: 600;
`
const P = styled.p`
  color: ${red600};
  font-size: 12px;
  font-weight: 600;
`

export default function LoginHeader(){
  return(
    <Header>
      <ShoppingCart src={shoppingCart}/>
      <H1>Supermercado</H1>
      <P>Faça login e comece a usar!</P>
    </Header>
  )
}