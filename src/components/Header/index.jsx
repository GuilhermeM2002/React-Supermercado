import { HeaderStyle, HeaderTitle, ShoppingCart } from "../UI";
import shoppingCart from "/images/shoppingCart.svg"
export default function Header(props){
  return(
    <HeaderStyle>
      <ShoppingCart src={shoppingCart}/>
      <HeaderTitle>{props.title}</HeaderTitle>
    </HeaderStyle>
  )
}