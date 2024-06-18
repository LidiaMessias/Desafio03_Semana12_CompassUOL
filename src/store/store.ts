import { createStore } from 'redux';
import cartReducer from '../reducers/cartReducer';

export type RootState = ReturnType<typeof cartReducer>

const store = createStore(cartReducer);

export default store;