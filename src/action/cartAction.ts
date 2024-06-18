import { Product } from "../types/product";

export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';

export type CartItem = Product & {
    quantity: number;
}

type AddToCartAction = {
    type: typeof ADD_TO_CART;
    payload: Product;
}

type DeleteFromCartAction = {
    type: typeof DELETE_FROM_CART;
    payload: number;
}

type UpdateItemQuantity = {
    type: typeof UPDATE_ITEM_QUANTITY;
    payload: {
        id: number;
        quantity: number;
    };
}

export type CartActionTypes = AddToCartAction | DeleteFromCartAction | UpdateItemQuantity;

export const addToCart = (product: Product): AddToCartAction => ({
    type: ADD_TO_CART,
    payload: product,
});

export const deleteFromCart = (id: number): DeleteFromCartAction => ({
    type: DELETE_FROM_CART,
    payload: id,
});

export const updateItemQuant = (id: number, quantity: number): UpdateItemQuantity => ({
    type: UPDATE_ITEM_QUANTITY,
    payload: {id, quantity},
});

