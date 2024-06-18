//import { CartState } from "../action/types";
import { CartActionTypes, ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_QUANTITY } from "../action/cartAction";
import { CartItem } from '../action/cartAction'

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
    switch (action.type) {
        case ADD_TO_CART: {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item => 
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload],
                };
            }
        }

        case DELETE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        case UPDATE_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                ),
            };

        default:
            return state;
    }
};

export default cartReducer;