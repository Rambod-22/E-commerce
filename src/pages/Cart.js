import React, {useContext, useState} from "react"
import {UserContext} from "../Context"
import CartItem from "../components/cartItem"
function Cart() {
    const [text, setText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(UserContext)
    const cartElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    const price = cartItems.length * 5.99
    const cost = price.toLocaleString("en-US", {style:"currency", currency:"USD"})

    function handleClick(){
        setText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed!")
            setText("Place Order")
            emptyCart()
        }, 3000)
          
    }
     return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p className="total-cost">Total: {cost}</p>
            <div className="order-button">
                {cartItems.length > 0 ? <button onClick={handleClick}>{text}</button>:
                null}
                
            </div>
        </main>
    )
}

export default Cart