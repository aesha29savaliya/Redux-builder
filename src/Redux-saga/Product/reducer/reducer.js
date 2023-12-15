import {
     DELETE_PRODUCT_ERROR,
     DELETE_PRODUCT_PROGRESS,
     DELETE_PRODUCT_SUCCESS,
     GET_PRODUCT_ERROR,
     GET_PRODUCT_PROGRESS,
     GET_PRODUCT_SUCCESS,
     POST_PRODUCT_ERROR,
     POST_PRODUCT_PROGRESS,
     POST_PRODUCT_SUCCESS,
     UPDATE_PRODUCT_ERROR,
     UPDATE_PRODUCT_PROGRESS,
     UPDATE_PRODUCT_SUCCESS,
} from "../action/action"

const initialState = {
     product: [],

     productProgrss: false,
     productError: null,

     dataIsLoaded: false,
}

const productReducer = (state = initialState, action) => {

     console.log(action, "action");
     switch (action.type) {
          case GET_PRODUCT_PROGRESS: {
               return {
                    ...state,
                    productProgrss: true,
                    productError: null,
                    dataIsLoaded: false,
               }
          }

          case GET_PRODUCT_SUCCESS: {
               return {
                    ...state,
                    productProgrss: false,
                    productError: null,
                    product: action.data,
                    dataIsLoaded: true,
               }
          }

          case GET_PRODUCT_ERROR: {
               return {
                    ...state,
                    productProgrss: false,
                    productError: action.data,
                    dataIsLoaded: false,
               }
          }

          // post_product_reducer

          case POST_PRODUCT_PROGRESS: {
               return {
                    ...state,
                    productProgrss: true,
                    productError: null,
                    dataIsLoaded: false,
               }
          }

          case POST_PRODUCT_SUCCESS: {
               return {
                    ...state,
                    productProgrss: false,
                    productError: null,
                    product: state.product.concat(action.data),
                    dataIsLoaded: true,
               }
          }

          case POST_PRODUCT_ERROR: {
               return {
                    ...state,
                    productProgrss: false,
                    productError: action.data,
                    dataIsLoaded: false,
               }
          }
          // delete_product_reducer


          case DELETE_PRODUCT_PROGRESS: {
               return {
                    ...state,
                    productProgrss: true,
                    productError: null,
                    dataIsLoaded: false,
               }
          }

          case DELETE_PRODUCT_SUCCESS: {
               return {
                    ...state,
                    productProgrss: false,
                    productError: null,
                    product: state.product.filter(
                         (e) =>
                              e.id !==
                              action.data
                    ),
                    dataIsLoaded: true,
               }
          }

          case DELETE_PRODUCT_ERROR: {

               return {
                    ...state,
                    productProgrss: false,
                    productError: action.data,
                    dataIsLoaded: false,
               }
          }
          // update_product_reducer

          case UPDATE_PRODUCT_PROGRESS: {
               return {
                    ...state,
                    productProgrss: true,
                    productError: null,
                    dataIsLoaded: false,
               }
          }
          case UPDATE_PRODUCT_SUCCESS: {
               return {
                    ...state,
                    productProgrss: false,
                    productError: null,
                    product: state.product.map
                         (
                              (val) =>
                                   val.id === action.data.id ? action.data : val
                              ),
                    dataIsLoaded: true,
               }
          }

          case UPDATE_PRODUCT_ERROR: {
               return {
                    ...state,
                    productProgrss: false,
                    productError: action.data,
                    dataIsLoaded: false,
               }
          }


          default: {
               return {
                    ...state
               }
          }
     }
}


export default productReducer