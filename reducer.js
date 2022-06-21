import { getcartActions } from "./action"
const initState = {
    loading:false,
    error:false,
     showcart:[],
    
}



export const Cartreducer=(state=initState,action)=> {
    switch(action.type)
    {
        case getcartActions.GET_CART_REQUEST :{
            // console.log("state",state)
         return  {
  
             ...state,
             loading:true,
             error:false,
              
         }
        }

        case getcartActions.GET_CART_SUCCESS:{
            return  {
                ...state,
                
                loading:false,
                showcart :action.payload,
                
            }
        } 
        case getcartActions.GET_CART_FAILURE :{
            return {
            
              ...state,
              loading:false,
              error:true
            } 
        }


        

      


        default:
            return state



    }
}