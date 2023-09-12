import { configureStore } from '@reduxjs/toolkit';
import BusketSlice from '../slices/Busket.js';

export default configureStore({
    reducer: {
        basket: BusketSlice,
    }
})