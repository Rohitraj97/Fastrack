 

import "./Checkout.css"
 export const Checkout=()=> {
    const handlesuccess=()=> {
        alert("SUCCESSFULLY PURCHASED")
    }
    return (
        <div className="paymentbox">
             

            <h2>ENTER 16 DIGIT CARD NUMBER</h2>
            <input type="text" placeholder="Enter CARD 16 MUMBER"/>


            <h2>ENTER PIN</h2>
            <input type="text" placeholder="Enter PIN"/>
     <button style={{border:"none"}} onClick={handlesuccess}>CONFIRM</button>


        </div>
    )
 }