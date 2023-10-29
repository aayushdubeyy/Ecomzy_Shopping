import {createSlice} from "@reduxjs/toolkit"


export const CartSlice = createSlice({
    name: "cart", // naam kya rkhna hai
    initialState:[], // initialize kisse krna hai
    reducers:{ // functions kya chahiye
        add:(state, action) =>{
            state.push(action.payload) // input parameter jo daala hai use action.payload se haasil kiya ja skta h
        }, 
        remove:(state, action) =>{
            return state.filter((item) => item.id !== action.payload)
        },
    }
})

export const {add, remove} = CartSlice.actions; //function aise hi export krte h
export default CartSlice.reducer;