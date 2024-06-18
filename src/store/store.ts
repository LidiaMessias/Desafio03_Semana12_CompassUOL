import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
//import cartReducer from '../reducers/cartReducer';

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>

//const store = createStore(cartReducer);

export default store;