
import './App.css';
import {ProductHome} from './container'
// import { Navbar}  from './components/Navbar';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
// import {Login} from './components';
// import {Register} from './components';
// import {Cart} from './components';
// import {Basic} from './components';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Basic from './components/Shippingaddress';



function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
    <ProductHome/>
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <Cart/> */}
    {/* <Basic/> */}
    {/* <Router>
      <main className="py-3">
      <Route exact path="/register" component={Register} />
          <Route path='/login' render={Login} />
          {/* <Route path='/register' render={Register} /> */}
          
      {/* </main>
    </Router> */} 
    </div>
  );

}

export default App;
