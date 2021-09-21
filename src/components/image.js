import React,{useContext, useState} from "react";
import Photos from "../pages/Photos";
import {UserContext} from "../Context"
import PropTypes from "prop-types"
function Image({className, img}) {
    const [hovered, setHovered] = useState(false)

   const {toggleFavorite, addCart, cartItems, removeCart} = useContext(UserContext)
let inCart = cartItems.find((item) => {
   return( item.id === img.id)
})
   function handleClick(){
    toggleFavorite(img.id)
   }

   function removeTheCart(){
       inCart = false;
      removeCart(img.id)
   }
    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={`${className} image-container`}>
            <img src={img.url} className="image-grid"/>
            {img.isFavorite ? 
            <div>
            <i onClick={handleClick} className="ri-heart-fill favorite"></i>
            
            </div>:
            null
            }
            {inCart ? 
            <div>
            <i onClick={removeTheCart} className="ri-shopping-cart-fill cart"></i>
            
            </div>:
            null
            }
        
            {(hovered && !inCart) ? <div>
                
                <i onClick={() => addCart(img)} className="ri-add-circle-line cart"></i>
            </div>: null}
            {(hovered && !img.isFavorite) ? <div>
                <i onClick={handleClick} className="ri-heart-line favorite"></i>
                
            </div>: null}
        </div>
    )

  
}

Image.propTypes = {
    className: PropTypes.string,
img: PropTypes.shape({
id: PropTypes.string.isRequired,
url: PropTypes.string.isRequired,
isFavorite: PropTypes.bool.isRequired
})
}

export default Image