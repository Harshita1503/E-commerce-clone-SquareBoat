
import React, { useState } from "react";

function Cart(props) {
  const { items , cart,showCart } = props;


const [shippingAddress, setShippingAddress] = useState(false);
const handleCartClick = () => {
    
   setShippingAddress(!shippingAddress)
  };

  return (

    <div className="cart-sidesheet">
        {showCart &&
          cart.map((product) => (

            <div key={product.id} className="cart-item">
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
            
          )
          )}
          {showCart && 
    <button onClick={handleCartClick}>"Add Shipping Address"</button>}
       
      </div>
  );
}

export default Cart;
