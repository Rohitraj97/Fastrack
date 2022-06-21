 
import { Home } from './components/Home';
import { HomeDetails }  from './components/Homedetails';
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Cart } from './components/Cart';
import {Checkout} from "./components/Checkout"
import { Login } from './components/Login';
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<HomeDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
