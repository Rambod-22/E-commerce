import React, {useContext, useState} from "react"
import {UserContext} from "../Context"
function CartItem({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeCart} = useContext(UserContext)
    const className = hovered ? "ri-delete-bin-fill": "ri-delete-bin-line"
  return(
      <div className="cart-item">
          <i onMouseEnter={() => {setHovered(true)}}
            onMouseLeave={() => {setHovered(false)}} 
          onClick={() => {
              removeCart(item.id)
          }} className={className}></i>
          <img src={item.url} width="130px" />
          <p>$5.99</p>
      </div>
  )
}

export default CartItem