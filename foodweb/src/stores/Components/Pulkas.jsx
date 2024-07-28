import React from 'react'
import { pulkas } from '../fooddata/pulkas'

const Pulkas = () => {
    const fivelements= pulkas.slice(0,5)
    return (
  
        <div className="container">
            <h1>Pulkas</h1>
            <div className="menu">
              {fivelements.map((item) => (
                <div className="card" key={item.id}>
                  <img src={item.image} alt={item.product} />
                  <h3>{item.product}</h3>
                  <p>{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
        </div>
      )
}

export default Pulkas