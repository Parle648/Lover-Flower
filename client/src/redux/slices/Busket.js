import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const BusketSlice = createSlice({
    name: 'Busket',
    initialState: {
        value: [],
    },
    reducers: {
        addProduct(state, obj) {
            state.value.push(obj.payload);
        },
        removeProduct (state, id) {
            state.value = state.value.filter(product => product.id !== id)
        },
        countPlus (state, id) {
            state.value = state.value.map(product => {
                if (product.id !== id) {
                    return product;
                } else {
                    product.id++;
                    return product;
                }
            })
        },
        countMinus (state, id) {
            state.value = state.value.map(product => {
                if (product.id !== id) {
                    return product;
                } else {
                    product.id++;
                    return product;
                }
            })
        }
    },
})

export const { addProduct, removeProduct, countPlus, countMinus} = BusketSlice.actions

export default BusketSlice.reducer;