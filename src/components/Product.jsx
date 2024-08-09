import React, { useContext } from 'react'
import "./Product.css"
import CartContext from './CartContext'

const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext)
  const addcart = () => { 
    setCart([...cart, product])
  };
  const removecart = () => {
    setCart(cart.filter((c)=>c.id!==product.id))
   };
  return (
      <div className='card'>
          <div className="image">
              <img src={product.images} alt={product.title} />
          </div>
          <div className="details">
              <h3>{product.title}</h3>
              <p><b>Category:</b>{product.category}</p>
              <p><b>Brand:</b>{product.brand}</p>
              <p><b>About:</b>{product.description}</p>
              <p><b>Price:</b> {product.price}</p>
              <p><b>Discount%:</b> {product.discountPercentage}</p>
              <p><b>Stock:</b>{product.stock}</p>
            <div className='btn'>
          {
            cart.includes(product) ?
              <button className='btnremove' onClick={removecart}>Remove from cart</button> :
              <button onClick={addcart}>Add to cart</button>
                }
              </div>
          </div>
    </div>
  )
}

export default Product
