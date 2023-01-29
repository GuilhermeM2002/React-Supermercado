import Footer from "../components/Footer";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";

export default function ProductPage() {
  return (
    <>
      <Header title={"Frutas e verduras"} />
      <ListProducts />
      <Footer />
    </>
  );
}
