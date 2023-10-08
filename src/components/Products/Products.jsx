import React, { useState } from 'react';
import './Product.css'




const Products = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      details: 'Product 1 details...',
      imageUrl:'image1.png'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 500,
      details: 'Product 2 details...',
      imageUrl:'image1.png'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20,
      details: 'Product 3 details...',
      imageUrl:'image1.png'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 10,
      details: 'Product 1 details...',
      imageUrl:'image1.png'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500,
      details: 'Product 2 details...',
      imageUrl:'image1.png'
    },
    {
      id: 6,
      name: 'Product 6',
      price: 20,
      details: 'Product 3 details...',
      imageUrl:'image1.png'
    },
    {
      id: 7,
      name: 'Product 7',
      price: 10,
      details: 'Product 1 details...',
      imageUrl:'image1.png'
    },
    {
      id: 8,
      name: 'Product 8',
      price: 500,
      details: 'Product 2 details...',
      imageUrl:'image1.png'
    },
    {
      id: 9,
      name: 'Product 9',
      price: 20,
      details: 'Product 3 details...',
      imageUrl:'image1.png'
    },
  ];
 


  // State to manage the cart
  const [cart, setCart] = useState([]);


  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  return (
    <div>
      <h2 className="heading">Products</h2>
      <ul>
        {products.map((product) => (
          <li className="container" key={product.id}>
            <img src={product.imageUrl} alt={product.name} width="100" height="100" />
            <div>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Details: {product.details}</p>
             
            </div>
           
          {/* ... (rest of your product details and Add to Cart button) */}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
 
};


export default Products;