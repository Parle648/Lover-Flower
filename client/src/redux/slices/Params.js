import { createSlice } from "@reduxjs/toolkit";

const Params = createSlice({
    name: 'Params',
    initialState: {
        value: [],
    },
    reducers: {
        pushParam (state, params) {
            state.value.push(params)
        },
        popParam (state, params) {
            state.value.pop(params)
        }
    }
})

export const { pushParam, popParam } = Params.actions;

export default Params.reducer;