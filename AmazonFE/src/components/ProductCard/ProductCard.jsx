// import React from "react";
// import "./ProductCard.css";
// const ProductCard = (props) => {
//   return (
//     <div className=" product-card">
//       <img className="product-card-image" src={props.image} alt={props.name} />
//       <h2>{props.name}</h2>
//       <p>{props.shortDetail}</p>
//       <p>{props.price}</p>
//       <button onClick={props.addToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import "./ProductCard.css";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.details}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
