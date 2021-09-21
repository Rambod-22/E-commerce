import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {UserContext} from "../Context"
function Header() {
    const {cartItems} = useContext(UserContext)
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            {(cartItems.length > 0) ?
            <Link to="/cart">
                <i className="ri-shopping-cart-fill ri-fw ri-2x">
                    </i></Link> :
            <Link to="/cart">
                <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
                </Link>
            }
            
        </header>
    )
}

export default Header