import { createSlice } from "@reduxjs/toolkit";

const prodTypes = createSlice({
    name: 'prodTypes',
    initialState: {
        value: [],
    },
    reducers: {
        pushType (state, type) {
            state.value = state.value.concat(type.payload);
        },
        popType (state, type) {
            state.value.pop(type);
        },
    }
})

export const {pushType, popType} = prodTypes.actions;

export default prodTypes.reducer;