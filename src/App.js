import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";

import CardDetails from "./pages/CardDetails";
import {
  BrowserRouter ,

  Route,
 
  Routes,
  Navigate,
} from "react-router-dom";
import MobileVerification from "./pages/MobileVerification";
import Success from "./pages/Sucess";
import ForgotPass from "./pages/ForgotPass";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (

    <div>
      
      <BrowserRouter>
      <ToastContainer  />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={ <Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="CardDetails" element={<CardDetails />} />
        <Route path="MobileVerification" element={<MobileVerification />} />
        <Route path="Success" element={<Success />} />
        <Route path="ForgotPass" element={<ForgotPass />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Order" element={<Orders />} />
        <Route path="Login" element={user ? <Navigate replace to="/" /> : <Login/>} >

          </Route>
          <Route path="Register" element={user ? <Navigate replace to="/" /> : <Register />} ></Route>
          
        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
