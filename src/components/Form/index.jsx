import Input from "../Input";
import { Envelope, Lock } from "phosphor-react";
import Button from "../Button";
import styled from "styled-components";

const Form = styled.form`
  margin: 32px 36px 44px 36px;
`
export default function FormLogin() {
  return (
    <main>
      <Form>
        <Input
          label={"Endereço de e-mail"}
          type={"email"}
          placeholder={"guilherme@email.com"}
        />
        <Input label={"Senha"} type={"password"} placeholder={"********"} />
        <Button>
          Fazer login
        </Button>
      </Form>      
    </main>
  );
}
