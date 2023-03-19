import { FETCH_PRODUCTS_REQUEST } from "./ProductsTypes"
import { FETCH_PRODUCTS_FAILURE } from "./ProductsTypes"
import { FETCH_PRODUCTS_SUCCESS } from "./ProductsTypes"
import { getProducts } from "../../data"
import axois from 'axios'
export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }

}


export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }

}

export const fetchProducts = () => {
    return async (dispatch) => {
        // const config = {
        //             headers: {
        //                 'Content-type': 'application/json'
        //             },
        //             mode: 'no-cors'
        //          }axios.post(url,dictkey), useffect->dispatch()
        // const data  = await axois.get("http://127.0.0.1:8000/products/",config)
        // console.log(data)
        getProducts().then(async response => {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                },
                mode: "no-cors",
                
             }
        const { data }  = await axois.get("https://e-commerce-clone-square-boat-7468.vercel.app/products/",config)
        //  console.log(data)
            const products =data


            console.log(products)
           
            dispatch(fetchProductsSuccess(products))
        })
    }
}