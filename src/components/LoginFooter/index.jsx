import styled from "styled-components"
import { gray800 } from "../UI/variables"

const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Link = styled.a`
  color: ${gray800};
  font-size: 12px;
  font-weight: bold;
  margin: 8px;
  text-decoration: none;
`

export default function LoginFooter(){
  return(
    <Footer>
      <Link>Esqueceu sua senha?</Link>
      <Link>Realize aqui seu cadastro</Link>
    </Footer>
  )
}