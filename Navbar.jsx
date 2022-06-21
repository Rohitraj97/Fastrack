import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar=()=> {
    return (
        <>
        <div className="nav">
  
        </div>
        <div className="black">
          <div>  <Link to="/"><h3 style={{color:"white"}}>WATCH</h3></Link></div>
          <h3>Fastrack</h3>
          <div><Link to="/cart"><h3 style={{color:"white"}}>CART</h3></Link> </div>
         <div>   <Link to="/login"><h3 style={{color:"white"}}>LOGIN</h3></Link></div>
             
        </div>
        </>
    )
}