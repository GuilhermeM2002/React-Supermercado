import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import ProductPage from './pages/ProductsPage';

export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/produtos" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}