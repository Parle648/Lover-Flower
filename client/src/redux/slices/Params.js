import { createSlice } from "@reduxjs/toolkit";

const Params = createSlice({
    name: 'Params',
    initialState: {
        value: {
            light: [],
            cost: [],
            format: [],
            Cost: [],
            flowers: [],
        },
    },
    reducers: {
        pushParam (state, {payload}) {
            const name = Object.keys(payload)[0]
            state.value[name].push(payload[name])
        },
        popParam (state, {payload}) {
            const name = Object.keys(payload)[0]
            state.value[name].pop(payload[name])
        }
    }
})

export const { pushParam, popParam } = Params.actions;

export default Params.reducer;