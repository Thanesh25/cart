import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import CartContext from "./CartContext";
import Totalcontext from "./Totalcontext";

const Cart = () => {
  const { cart, SetCart } = useContext(CartContext)
  const { total, setTotal } = useContext(Totalcontext)
  useEffect(() => {
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
  }, [cart]);
  return (
    <>
      <h1 className="cart-heading">cart products</h1>
      <div className="Cart-container">
        {
          cart.map((product)=>(
        <div className="cart-product" key={product.id}>
              <div className="img">
                <img src={product.images} alt={product.title} />
              </div>
              <div className="cart-product-details">
                <h3>Product name:{product.title}</h3>
                <p>Price RS:{product.price}</p>
              </div>
        </div>
          ))
       }
        
      </div>
        <h2 className="cart-amt">Total Amount Rs: {total} </h2>
    </>
  );
};

export default Cart;
