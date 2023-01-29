import FormLogin from "../components/Form";
import LoginFooter from "../components/LoginFooter";
import LoginHeader from "../components/LoginHeader";

export default function LoginPage(){
  return(
    <div>
      <LoginHeader />
      <FormLogin />
      <LoginFooter />
    </div>
  )
}