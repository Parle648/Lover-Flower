import { createSlice } from "@reduxjs/toolkit";

const Products = createSlice({
    name: 'Products',
    initialState: {
        value: [],
    },
    reducers: {
        update(state, arr) {
            console.log(arr);
            state.value = arr;
        }
    },
})

export const {update} = Products.actions

export default Products.reducer;