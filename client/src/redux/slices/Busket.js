import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const BusketSlice = createSlice({
    name: 'Busket',
    initialState: {
        value: [],
    },
    reducers: {
        updateStore(state, store) {
            state.value = store.payload;
        },
        addProduct(state, obj) {
            state.value.push(obj.payload);
        },
        removeProduct (state, id) {
            state.value = state.value.filter(product => product.id !== id.payload)
        },
        countPlus (state, id) {
            state.value = state.value.map(product => {
                if (product.id !== id.payload) {
                    return product;
                } else {
                    product.count++;
                    return product;
                }
            })
        },
        countMinus (state, id) {
            state.value = state.value.map(product => {
                if (product.id !== id.payload) {
                    return product;
                } else {
                    product.count--;
                    return product;
                }
            })
        }
    },
})

export const { updateStore, addProduct, removeProduct, countPlus, countMinus} = BusketSlice.actions

export default BusketSlice.reducer;