import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import {Home , Contact, Login, Register, Reset, Admin} from "./pages";
import {Header , Footer} from "./components";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";






function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
     <Header />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/reset" element={<Reset/>}/>
      


      <Route path="/admin/*" element={
        <AdminOnlyRoute>
      <Admin />
      </AdminOnlyRoute>
       }
      />
        <Route path="/product-details/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
     </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
