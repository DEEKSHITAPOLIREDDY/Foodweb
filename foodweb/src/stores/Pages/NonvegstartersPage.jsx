import React, { useState } from 'react'
import { nonVegStarters } from '../fooddata/nonvegstarters'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const NonvegstartersPage = () => {
  
    const [selectedProduct,setSelectedProduct]=useState([]);
    const companyHandler = (productName) => {
      if (selectedProduct.includes(productName)) {
        setSelectedProduct(selectedProduct.filter(item => item !== productName));
      } else {
        setSelectedProduct([...selectedProduct,productName]);
      }
    };
  
    const filteredProduct = selectedProduct.length === 0 ?
      nonVegStarters : nonVegStarters.filter(orange => selectedProduct.includes(orange.product));
    return (
        <>
        <Navbar/>
        <div className="fullpage">
        <div className="pro-selected">
          {nonVegStarters.map((product) => (
            <div className='pro-input' key={product.id}>
              <label>
                <input 
                  type="checkbox" 
                  checked={selectedProduct.includes(product.product)}
                  onChange={() => companyHandler(product.product)}
                />
                {product.product}
              </label>
            </div>
          ))}
        </div>
        <div className="container">
            <h1 className='h1'>Non-Veg Starters Menu</h1>
            <div className="menu">
              {filteredProduct.map((item) => (
                <div className="card" key={item.id}>
                  <Link to={`/nonvegstarters/${item.id}`}>
                  <img src={item.image} alt={item.product} />
                  </Link>
                  
                  <h3>{item.product}</h3>
                  <p>{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        
          </>
      );
};

export default NonvegstartersPage