import { takeLatest } from '@redux-saga/core/effects';
import {
     DELETE_PRODUCT_PROGRESS,
     GET_PRODUCT_PROGRESS,
     POST_PRODUCT_PROGRESS,
     UPDATE_PRODUCT_PROGRESS,
}
     from '../../Product/action/action';
import {
     handleDeleteProduct,
     handleGetProduct,
     handlePostProduct,
     handleUpdateProduct,
}
     from '../manageProduct/manageProduct';


// GET_PRODUCT_SAGA
export function* getProductSaga() {
     yield takeLatest(GET_PRODUCT_PROGRESS, handleGetProduct);
}
// POST_PRODUCT_SAGA
export function* postProductSaga() {
     yield takeLatest(POST_PRODUCT_PROGRESS, handlePostProduct);
}
// DELETE_PRODUCT_SAGA

export function* deleteProductSage() {
     yield takeLatest(DELETE_PRODUCT_PROGRESS, handleDeleteProduct);
}
// UPDATE_PRODUCT_SAGA


export function* updateProductSaga() {
     yield takeLatest(UPDATE_PRODUCT_PROGRESS, handleUpdateProduct);
}