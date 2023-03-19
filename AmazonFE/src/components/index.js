import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from "../App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// import React from "react";
// import App from "../App";
// import { ReactDOM } from "react";

// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );
  
//   function tick() {
//     const element = (
//       <div>
//        <App/>
//       </div>
//     );
  
//    root.render(element);
//   }
  
//   setInterval(tick, 1000);

// export {default as ProductCard}  from './ProductCard/ProductCard'
// export {default as Navbar} from './Navbar/Navbar'
// export {default as Login} from './Login'
// export {default as Register} from './Register'
// export {default as Cart} from './Cart'
// export {default as Basic} from './Shippingaddress'
