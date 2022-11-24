import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        grandCost: 0
    },
    reducers: {
        addProduct: (state, action) => {

            const found = state.cartList.find(element => element.idProduct === action.payload.idProduct);
            if (found) {
                found.quality++;
            }
            else {
                state.cartList.push(action.payload);
            }
        },
        deleteProduct: (state, action) => {
            state.cartList.splice(state.cartList.findIndex((item) => item.idProducts === action.payload), 1);
        },
        increase: (state, action) => {
            const found = state.cartList.find(element => element.idProduct === action.payload);
            if (found) {
                found.quality++;
            }
        },
        unincrease: (state, action) => {
            const found = state.cartList.find(element => element.idProduct === action.payload);
            if (found && found.quality > 1) {
                found.quality--;
            }
        },
    }
});