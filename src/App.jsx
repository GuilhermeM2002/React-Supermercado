import FormLogin from "./components/Form"
import { GlobalStyle } from "./components/GlobalStyle"
import LoginFooter from "./components/LoginFooter"
import LoginHeader from "./components/LoginHeader"

function App() {

  return (
    <>
      <GlobalStyle />
      <LoginHeader />
      <FormLogin />
      <LoginFooter />
    </>
    
  )
}

export default App
