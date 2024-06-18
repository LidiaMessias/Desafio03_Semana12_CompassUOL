import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store/store";
import { deleteFromCart, updateItemQuant } from '../action/cartAction'

const CartShop = () => {

    const cartItems = useSelector((state: RootState) => state.items);
    const dispatch = useDispatch();

    const handleDeleteFromCart = (id: number) => {
        dispatch(deleteFromCart(id));
    };
    
    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateItemQuant(id, quantity));
        }
    };

    const total = cartItems.reduce((acum, item) => acum + item.price * item.quantity, 0);


  return (
    <>
        <div className=' flex w-full '>
        <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
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
              <span>{item.price}</span>
              <button onClick={() => handleDeleteFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: {total.toFixed(2)}</h3>
      <button>Checkout</button>
        </div>
    </>
  )
}

export default CartShop