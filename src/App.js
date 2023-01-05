import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Testing from "./pages/Testing";
import CardDetails from "./pages/CardDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <div>
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Product' element={<Product />}/>
        <Route path='/ProductList' element={<ProductList />}/>
        <Route path='/CardDetails' element={<CardDetails />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/login' element={<Login />}/>
       
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
