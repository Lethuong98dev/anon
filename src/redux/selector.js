import { createSelector } from '@reduxjs/toolkit';

// motel post
export const cartListSelector = (state) => state.cart.cartList;
export const grandCost = createSelector(
    cartListSelector,
    (cartList) => {
        let sum = 10;
        cartList.forEach(element => sum += element.price * element.quality);
        return sum;
    }
)
