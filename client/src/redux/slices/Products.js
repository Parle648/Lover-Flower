import { createSlice } from "@reduxjs/toolkit";

const Products = createSlice({
    name: 'Products',
    initialState: {
        value: [],
    },
    reducers: {
        addProducts(state, arr) {
            const res = state.value.concat(arr.payload);
            state.value = res
        },
        deleteProducts(state, arr) {
            arr.payload.forEach(element => {
                state.value.pop(element);
            });
        },
        update (state, arr) {
            state.value = arr.payload;
        }
    },
})

export const {addProducts, deleteProducts, update} = Products.actions

export default Products.reducer;