//jshint esversion: 9
import "./App.css";
import ProductPage from "./pages/ProductPage";
import ProductsList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar_footer/navbar";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./util/ScrollToTop";
import { ToastContainer } from 'react-toastify';
import ViewAll from "./pages/ViewAll";
import Register from "./components/register/register";
import Login from "./components/login/login";

function App() {
    return (
        <Router>
            {/* <ScrollToTop /> */}
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <ProductsList />
                </Route>
                <Route exact path="/product/:id">
                    <ProductPage />
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
                <Route exact path="/checkout">
                    <Checkout />
                </Route>
            </Switch>
                <ToastContainer
                    position="top-right"
                    autoClose={2002}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
        </Router>
    );
}

export default App;
