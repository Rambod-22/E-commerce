import React, { useState,useEffect } from "react";


const UserContext = React.createContext()


function UserContextProvider(props) {

    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
function toggleFavorite(id) {
    const pickedPhotos = photos.map((photo) => {
        if(photo.id === id) {
            console.log(id)
            console.log(!photo.isFavorite)
            return {
                ...photo,
                isFavorite: !photo.isFavorite
            }
        }
        return photo
    })
    setPhotos(pickedPhotos)
}

function addCart(newItem) {
   setCartItems(item => [...item, newItem])
}

function removeCart(id) {
    setCartItems((cartItems) => cartItems.filter((item) => {
        return (
            item.id !== id
        )
    }))
}

function emptyCart() {
    setCartItems([])
}


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(info => {
            setPhotos(info)
        })
    }, [])
   console.log(cartItems)
    return(
   <UserContext.Provider value={{photos, toggleFavorite, addCart,cartItems, removeCart, emptyCart}}>
{props.children}
   </UserContext.Provider>)
}

export {UserContextProvider, UserContext}