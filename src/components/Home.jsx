import React, { useContext, useState } from 'react'
import Context1 from './MYContext'
import Product from './Product'
import "./container.css"
const Home = () => {
    const { products } = useContext(Context1)
    console.log({products})
    return (
        <>
            <div className="container">
            {products.map((product) => (<Product key={product.id} product={product}/>))}
            </div>
        </>
    )
}

export default Home
