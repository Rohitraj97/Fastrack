import "./Homedetails.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getHomedetails } from "../Redux/Home/action"
import { useParams } from "react-router-dom"
import  { posttocart } from "../Redux/Home/action"
import { Link } from "react-router-dom"
export const HomeDetails = () => {
  const [count,setcount] = useState(1)
  const [total,setotal]= useState(1)
  const [state,setstate] = useState(false)
  const dispatch = useDispatch()
  const { id } = useParams()
  const homedata = useSelector((store) => store.Homereducer.homedetails)
  console.log("homedata", homedata)
  useEffect(() => {
    getHomedetails(dispatch, id)
  }, [])


   const handlecount=()=> {
   
    setcount(count+1)
    console.log(count)
   }

   const handlecount1=()=> {
    if(count==1){
      return
    }
    setcount(count-1)
    console.log(count)
   }


   const handlevalue=(e)=> {
    
    let sum=0
    sum=sum+homedata.price
    setotal(sum)
    posttocart({
      homedata:homedata,
      count:count,
       
      dispatch
})
   alert("ITEMS ADDED SUCCESSFULLY")
   
   }


   const handlesubmit=()=> {
           
   }
  return (
    <>
      <div className="detailsmain">
        <div className="imagedetails">
          <img src={homedata.img} />
        </div>
        <div className="textdetails">

          <div className="namedetails">   <h1>{homedata.name}</h1>
            <h3 style={{ fontSize: "22px", textAlign: "left" }}>₹{homedata.price}</h3>
          </div>
          <div className="maincount">
          <button style={{margin:"0.5rem",width:"35px",textAlign:"center"}} onClick={()=> handlecount1()}>-</button>
         
          <div className="count" style={{margin:"1rem", width:"35px",textAlign:"center"}}>{count}</div>
          <button style={{margin:"0.5rem",width:"35px",textAlign:"center"}} onClick={()=> {handlecount()}}>+</button>
           <br />
         
          </div>
   <button style={{width:"350px",height:"50px",marginTop:"20px",backgroundColor:"rgb(34,34,34)",color:"white",textAlign:"center"}} onClick={()=> {handlevalue(homedata)}}>ADD TO CART</button>
        </div>
    {/* {state? <div> 

      <div className="detailsmainmini">
        <div className="imagedetailsmini">
          <img src={homedata.img} />
        </div>
        <div className="textdetailsmini">

          <div className="namedetailsmini">   <p>{homedata.name}</p>
            <p style={{ fontSize: "22px", textAlign: "left" }}>Total:₹{count*total}</p>
            <hr></hr>
            <div>Quantity:{count}</div>
            
          </div>
          
          </div>
          
          </div>
 <Link to="/cart">  <button style={{width:"370px",height:"50px",backgroundColor:"rgb(34,34,34)",color:"white",textAlign:"center"}} onClick={handlesubmit}>VIEW ON CART</button></Link>    
    </div>:null} */}
        </div>
       <div className="imagebox">
<img className="images" src="https://www.fastrack.in/wps/wcm/connect/fastrack/2982c72f-70b2-4c24-a291-ea44ac6cd5f6/desktop/FT-1000x200-01.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-2982c72f-70b2-4c24-a291-ea44ac6cd5f6-desktop-nV4GVNo"/>
    <h1>YOU MAY ALSO LIKE THIS</h1> 
    <img className="images" src="https://staticimg.titan.co.in/production/promotions/fastrack/barebasics/BB_1.jpg"/>
    <h3>The easy collection, that's just the vibe for your everyday wear. Choose any one from the range and it just goes with whatever you flow with, dapper formals and even brunch casuals.
</h3>
</div>
    </>
  )
}