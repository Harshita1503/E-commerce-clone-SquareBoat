//jshint esversion: 9
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import logo from "./../../assets/logo.png";
const Navbar = () => {
    const len = useSelector((state) => state.total);

    return (
        <nav className="navbar navbar-expand-md navbar-light nav shadow-sm">
            <div className="container py-3">
                <Link className="navbar-brand" to="/">
                    <span className="fw-bold h3 d-flex align-items-center">
                        <img className="img-fluid" src={logo} alt="logo" />
                        <span className="fs-4 fw-bold ps-2">E-Mart</span>
                    </span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main-nav"
                    aria-controls="main-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item pe-4">
                            <Link to="/" className="nav-link fs-5 fw-bold color">
                                <i class="bi bi-house-door"></i>
                            </Link>
                        </li>
                        <li className="nav-item pe-4">
                            <Link to="/register" className="nav-link h4 color">
                                <p>Register</p>
                            </Link>
                        </li>
                        <li className="nav-item pe-4">
                            <Link to="/login" className="nav-link h4 color">
                                <p>Login</p>
                            </Link>
                        </li>
                        <li className="nav-item pe-4">
                            <Link to="/cart" className="nav-link fs-5 fw-bold color">
                                <i class="bi bi-cart4"></i>
                                <sup class="fs-6" style={{ color: "#FF2020" }}>
                                    {len}
                                </sup>
                            </Link>
                        </li>
                        {/* <li className="nav-item pe-4">
                            <Link to="/cart" className="nav-link fs-4 fw-bold color">
                                <i class="bi bi-person"></i>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
