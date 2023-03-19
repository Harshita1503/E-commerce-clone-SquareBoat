//jshint esversion: 9
import { Link } from "react-router-dom";
import "./productCard.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch } from "react-redux";
import { addCart } from "./../../redux";
import { totalItem } from "../../redux/total_item/total_action";

const ProductCard = (props) => {
    const dispatch = useDispatch();

    // expected data can be changed
    const { name, imgURL, description, price, id } = props;
    console.log("qwerty",imgURL)
    return (
        // <div className="col-12 col-sm-3 p-sm-4 mt-4">
        <div className="product-container">
            <Link to={`/product/${id}`}>
                <div className="product-img">
                    <img src={imgURL} alt="" />
                    <div className="product-tray">
                        <i
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(addCart(props.data));
                                dispatch(totalItem());
                            }}
                            className="bi bi-cart-check"
                        ></i>
                    </div>
                </div>
                <div className="product-name">
                    <span className="name">{name}</span>
                </div>
                <div className="product-price">
                    <span className="discount-price">Rs. {price} </span>
                    <span className="original-price">
                        {/* <strike>$ 900</strike> */}
                    </span>
                </div>
            </Link>
        </div>
        // </div>
    );
};

export default ProductCard;
