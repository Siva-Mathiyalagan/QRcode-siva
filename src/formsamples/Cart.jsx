import {useState} from 'react'

export const Cart = () => {
    const [cartcount,setcartcount]=useState(0);
    const handleclick=()=>setcartcount(cartcount+1)
  return (
    <>
    <h1>Number of items in the cart: {cartcount}</h1>
    <button onClick={handleclick}>{cartcount} Add to cart</button>
    </>
  )
}
