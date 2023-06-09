import Navbar from './navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './home';
import Cart from './cart';
import Contact from "./contact"
import "./nav.css"
import Footer from "./footer"
const Main=()=>{
    
    return (
        <Router>
            <div className="app">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route exact path='/cart'>
                            <Cart/>
                        </Route>
                        <Route exact path='/dashboard'>
                            <Contact/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}
export default Main;