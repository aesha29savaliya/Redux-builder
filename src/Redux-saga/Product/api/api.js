import axios from "axios";
import {
     BASE_URL,
     DELETE_PRODUCT_API,
     GET_PRODUCT_API,
     POST_PRODUCT_API,
     UPDATE_PRODUCT_API,
}
     from "../../constant";

// get_product
export const getProduct = () => {
     return axios.get(BASE_URL + GET_PRODUCT_API)
          .then(
               (res) => {
                    const data = res.data;
                    const status = res.status;

                    return {
                         data,
                         status
                    };
               })
          .catch(
               (error) =>
                    console.log(error)
          )
}
// post_product

export const postProduct = (action) => {
     return axios.post(BASE_URL + POST_PRODUCT_API, action.payload)
          .then(
               (res) => {
                    const data = res.data;
                    console.log(data, "data api file");
                    const status = res.status;


                    return {
                         data,
                         status
                    };
               })
          .catch(
               (error) =>
                    console.log(error)
          )
}
// delet_product

export const deleteProduct = (action) => {
     return axios.delete(BASE_URL + DELETE_PRODUCT_API + action.payload)
          .then(
               (res) => {
                    const data = action.payload;
                    const status = res.status;

                    return {
                         data, status
                    };
               })
          .catch(
               (error) =>
                    console.log(error)
          )
}

// update_product

export const updateProduct = (action) => {

     return axios.put(BASE_URL + UPDATE_PRODUCT_API + action.payload.id, action.payload)
          .then(
               (res) => {

                    const data = action.payload;
                    const status = res.status;

                    return {
                         data, status
                    };
               })
          .catch(
               (error) =>
                    console.log(error)
          )
}
