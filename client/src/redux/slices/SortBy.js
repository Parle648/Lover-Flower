import { createSlice } from "@reduxjs/toolkit";

const sortBy = createSlice({
    name: "sortby",
    initialState: {
        value: '',
    },
    reducers: {
        updateValue (state, string) {
            state.value = string.payload;
        },
    }
});

export const { updateValue } = sortBy.actions;

export default sortBy.reducer;