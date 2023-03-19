import React, { useState } from "react";
import "./ProductHome.css";
import { images } from "../../constants";
// import {Cart} from "../../components"
import Cart from "../../components/Cart";

const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 1099,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: 1999,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: 799,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 1",
      price: 1099,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 1",
      price: 1099,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description of Product 1",
      price: 1099,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description of Product 1",
      price: 1099,
      imageUrl: "https://via.placeholder.com/150",
    },
    // add more products as needed
  ];
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCartClick = () => {
    
    setShowCart(!showCart);
  };

  return (
    <div className="product-details-container">
      <div className="product-cart">
        <h2>My MarketPlace</h2>
        <button onClick={handleCartClick}>{`Cart ${cart.length}`}</button>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={images.pic1} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            {/* <button onClick={() => handleAddToCart(product)}>Details</button> */}
          </div>
        ))}
      </div>
      <Cart showCart ={showCart} cart={cart}/>
      {/* <div className="cart-sidesheet">
        {showCart &&
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default ProductDetails;

// const ProductDetails = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Product 1",
//       description: "Description of Product 1",
//       price: 10.99,
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       description: "Description of Product 2",
//       price: 19.99,
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       description: "Description of Product 3",
//       price: 7.99,
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     // add more products as needed
//   ];

//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="product-details-container">
//       {products.map((product) => (
//         <div key={product.id} className="product-card">
//           <img src={images.pic1} alt={product.name} />
//           <h2>{product.name}</h2>
//           <p>{product.details}</p>
//           <p>Price: ${product.price}</p>
//           <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//       <div className="cart">
//         <h2>Cart</h2>
//         {cart.map((product) => (
//           <div key={product.id} className="cart-item">
//             <p>{product.name}</p>
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
