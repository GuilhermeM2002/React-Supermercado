import styled from "styled-components";
import { gray100, gray800, red800 } from "./variables";

export const ShoppingCart = styled.img`
  color: ${red800};
  height: 52px;
  width: 52px;
`
export const ButtonSubmit = styled.button`
  align-items: center;
  background-color: ${red800};
  border: none;
  border-radius: 4px;
  color: ${gray100};
  display: flex;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-around;
  padding: 12px;
  height: 40px;
  width: 248px;
`

export const HeaderStyle = styled.header`
  align-items: center;
  display: flex;
  margin: 32px 36px;
  justify-content: space-between;
`
export const HeaderTitle = styled.h1`
  color: ${gray800};
  font-size: 20px;
  font-weight: bold;
`
