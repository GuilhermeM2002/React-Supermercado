import styled from "styled-components"
import { gray800, green200 } from "../UI/variables"

const Div = styled.div`
  display: flex;
  margin: 32px 0;
  flex-direction: column;
`

const Label = styled.label`
  color: ${gray800};
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
`

const InputLogin = styled.input`
  background-color: ${green200};
  border: none;
  border-radius: 4px;
  padding: 0 8px;
  padding-left: 16px;
  height: 40px;
  width: 248px;
` 
export function InputIcon(props) {
  return (
    <Slot>
      {props.children}
    </Slot>
  )
}

export default function Input({label, type, placeholder}){
  return(
    <Div>
      <Label>{label}</Label>
      <InputLogin type={type} placeholder={placeholder}/>
    </Div>
  )
}