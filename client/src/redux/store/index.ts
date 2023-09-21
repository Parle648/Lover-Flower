import { configureStore } from '@reduxjs/toolkit';
import BusketSlice from '../slices/Busket.js';
import Products from '../slices/Products.js';
import ProductTypeSlice from '../slices/ProductTypes.js';

export default configureStore({
    reducer: {
        basket: BusketSlice,
        products: Products,
        productTypes: ProductTypeSlice,
    }
})