import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHome } from "../Redux/Home/action"
import { Dispatch } from "react"
import { Link } from "react-router-dom"
import  "./Home.css"
import { useState } from "react"
export const Home = () => {
    const dispatch=useDispatch()
    const [page,setpage] = useState(1)
    const [ratingOrder,setRatingorder]= useState(1)
    const [filterPrice,setFilterPrice] = useState(0)
    const homedata= useSelector((store)=> store.Homereducer.home)
    // console.log("homedata",homedata)
useEffect(()=> {
  getHome(dispatch,page,ratingOrder,filterPrice)
},[page,ratingOrder,filterPrice])
    return(
        <>
        
    <img width="100%" height="500px"  src="https://www.fastrack.in/wps/wcm/connect/fastrack/49bd3582-1093-4beb-915b-6367790db235/desktop/2500X400.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-49bd3582-1093-4beb-915b-6367790db235-desktop-o3-WiIm"/>
        <div className="main">
            <div className="left">
                {/* <h1>Found 425 GUYS WATCHES</h1> */}
                <h3>Filter BY</h3>
                <div className="button" onClick={()=> setFilterPrice("0")}><button>ALL WATCHES</button></div>
                <div className="button" onClick={()=> setFilterPrice("2000")}><button>Price MORE THAN 2000</button></div>
                <div className="button" onClick={()=> setFilterPrice("4500")}><button>Price MORE THAN 4500</button></div>
                <div className="button" onClick={()=> setFilterPrice("3000")}><button>Price MORE THAN 3000</button></div>
                {/* <div className="button"><button>Brand</button></div >
                <div className="button"><button>Gender</button></div > */}
                <br />
               
            </div>
            <div className="right">
                <div className="top">
               
                   <select onChange={(e)=>setRatingorder(e.target.value)}>
                    <option  value="1" >INCREASING PRICE</option>
                    <option  value="-1">DECREASING PRICE</option>
                    
                   </select>
                   <p>SORT BY:</p>
                </div>
                <div className="cardfather">
                {homedata.map((item)=> (
                    <div className="homecard">
                    <div style={{margin:"auto",width:"100%"}}><img style={{width:"100%"}} src={item.img}  /></div>
                    <div className="name"><h3>{item.name}</h3></div>
                   
     <div className="pricemain">  
     <div className="price"><p>₹{item.price}</p></div> 
      <div className="cutoff"><p>{item.cutoff_price}</p> </div>  
      <div className="discount"><p>{item.discount}</p></div> 
     </div>
    <Link to={`/${item.id}`}> <div className="quick "><button className="quckbutton"> QUICK VIEW</button>  </div></Link>
                    </div>
                ))}
                </div>
                <div className="page">
        <button disabled={page===1} onClick={()=> setpage(page-1)}>PREV</button>
                    <button  disabled={page===4}  onClick={()=> setpage(page+1)}>NEXT</button>
        </div>
            </div>
            
        </div>
        
        </>
    )
  
}