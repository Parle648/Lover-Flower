import { configureStore } from '@reduxjs/toolkit';
import BusketSlice from '../slices/Busket.js';
import Products from '../slices/Products.js';

export default configureStore({
    reducer: {
        basket: BusketSlice,
        products: Products,
    }
})