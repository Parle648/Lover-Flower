import { createSlice } from "@reduxjs/toolkit";

const ProductTypeSlice = createSlice({
    name: 'ProductTypeSlice',
    initialState: {
        value: [],
    },
    reducers: {
        pushType(state, string) {
            state.value.push(string)
        },
        popType(state, string) {
            state.value.pop(string)
        }
    }
})

export const {pushType, popType} = ProductTypeSlice.actions;

export default ProductTypeSlice.reducer;