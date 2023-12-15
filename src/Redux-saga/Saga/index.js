import { all } from "@redux-saga/core/effects";
import {
     deleteProductSage,
     getProductSaga,
     postProductSaga,
     updateProductSaga,
}
     from "../Saga/root/rootProductSaga";
export function* rootSaga() {
     yield all([getProductSaga(), postProductSaga(), deleteProductSage(),updateProductSaga()]);
}   