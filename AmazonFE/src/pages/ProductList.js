//jshint esversion: 9
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import { fetchProducts } from "../redux/products/ProductsActions";
import ProductCard from "../components/productPage/ProductCard";

const ProductsList = () => {
    const products = useSelector(state => state.products.products)
    console.log("qwertyui")
    const dispatch = useDispatch()
    // const fetching_data = async() =>{
    //     try{
    //         const data = await axios.get("products/")
    //         return data
    //     }
    //     catch(error){
    //         throw error
    //     }
    // }
    // useEffect(() => {
    //     // call axios
    //     fetching_data.then((result) => {
    //         dispatch(fetchProducts());
    //     })

       
    // }, []);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    console.log("harshita", products[0].img)
    const Part = () => {
        return (
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-12 col-sm-3 p-sm-4 mt-4">
                            <ProductCard key={product.id} imgURL={product.img} id={product.id} name={product.name} price={product.price} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    if (products) return <Part />;
    else return <p>Loadinggggggggg</p>;
};
export default ProductsList;
