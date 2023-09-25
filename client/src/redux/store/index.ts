import { configureStore } from '@reduxjs/toolkit';
import BusketSlice from '../slices/Busket.js';
import Products from '../slices/Products.js';
import ProductTypes from '../slices/ProductTypes.js';
import Params from '../slices/Params.js';

export default configureStore({
    reducer: {
        basket: BusketSlice,
        products: Products,
        prodTypes: ProductTypes,
        Params: Params,
    }
})