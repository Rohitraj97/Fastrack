import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    // Tooltip,
  } from '@chakra-ui/react';
  import { FiShoppingCart } from 'react-icons/fi';

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCart } from "../Redux/cart/action"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

   import "./Cart.css"
export const Cart=()=> {
    const cartdata= useSelector((store)=> store.Cartreducer.showcart)
    console.log("cartdata",cartdata)
const dispatch= useDispatch()

    useEffect(()=> {
        getCart(dispatch)
    },[])

    const handle=(e)=> {
  console.log("e",e)
   
    }
    return (
        <>
       <div className="mainboxes" >
      {cartdata.map((item)=> (
        <div className='card'>
         <div><img src={item.homedata.img}  /></div>
         <div><h4>{item.homedata.name}</h4></div>
         <div><h4>Price:₹{item.homedata.price}</h4></div>
         <div><h4>Quantity:{item.count}</h4></div>
        
         <div><h4>Total:₹{item.count*item.total}</h4></div>
      <div className='btn'>   <button onClick={()=> {handle(item.id)}}>REMOVE</button>
     <Link to ="/checkout"> <button >CHECKOUT</button></Link></div>
          </div>
      ))}
       </div>
          

           
   
  </>
      )
    }
      

















 