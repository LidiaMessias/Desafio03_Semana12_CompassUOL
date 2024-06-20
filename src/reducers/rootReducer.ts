import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import updateFormDataReducer from './updateFormDataReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  updateForm: updateFormDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;