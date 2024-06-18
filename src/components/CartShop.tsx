import { useSelector, useDispatch } from "react-redux"
//import { RootState } from "../store/store";
import { RootState } from "../reducers/rootReducer";
import { deleteFromCart, updateItemQuant } from '../action/cartAction'

const CartShop = () => {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleDeleteFromCart = (id: number) => {
        dispatch(deleteFromCart(id));
    };
    
    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateItemQuant(id, quantity));
        }
    };

    const total = cartItems.reduce((acum, item) => acum + item.finalPrice * item.quantity, 0);


  return (
    <>
      <div className='flex w-full px-24 py-18 text-center'>
          
          {cartItems.length === 0 ? (
          <h2 className=" font-poppins-semibold text-3xl">Your cart is empty</h2>
          ) : (
            <div className="flex w-full gap-8">
                <div className="flex flex-col gap">

                </div>
                <div>

                </div>
            
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} style={{ width: '50px' }} />
                  <span>{item.title}</span>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                  <span>{item.finalPrice}</span>
                  <button onClick={() => handleDeleteFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            </div>
          )}
    <h3>Total: {total.toFixed(2)}</h3>
    <button>Checkout</button>
      </div>
    </>
  )
}

export default CartShop