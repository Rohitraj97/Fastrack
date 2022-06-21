import axios from "axios"


export const getcartActions=  {
    GET_CART_REQUEST:"GET_CART_REQUEST",
    GET_CART_SUCCESS:"GET_CART_SUCCESS",
    GET_CART_FAILURE:"GET_CART_FAILURE",
}

export const getcartRequest=()=> (
    {
        type:getcartActions.GET_CART_REQUEST
    }
)





export const getcartSuccess=(data)=> (
    {
        type:getcartActions.GET_CART_SUCCESS,
        payload:data
    }
)
export const getcartFailure=()=> (
    {
        type:getcartActions.GET_CART_FAILURE
        // payload:data
    }
)



export const getCart=(dispatch)=> {
    const getcartRequestAction = getcartRequest()
         dispatch(getcartRequestAction)
         
return axios({
    url:" http://localhost:8080/postwatch",
    method:"GET"
})
.then((res)=> {
    // console.log(res )
     console.log(res.data)
const getcartSuccessAction = getcartSuccess(res.data)
console.log("getcart")
dispatch(getcartSuccessAction)
})
.catch((err)=> {
    const getcartErrorAction = getcartFailure()
dispatch(getcartErrorAction)
})
}