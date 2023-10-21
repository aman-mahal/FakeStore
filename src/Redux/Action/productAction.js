import axios from "axios";
import { ActionTypes } from "../Constants/action-type";

export const fetchProducts = () => async (dispatch)=> {
    const response = await axios.get("https://fakestoreapi.com/products")
    dispatch(setProducts(response.data))
  };

export const fetchProduct = (id) => async (dispatch)=> {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch(selectedProduct(response.data))
  };

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
