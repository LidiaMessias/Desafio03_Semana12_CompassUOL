import { useSelector, useDispatch } from "react-redux"
//import { RootState } from "../store/store";
import { RootState } from "../reducers/rootReducer";
import { deleteFromCart, updateItemQuant } from '../action/cartAction'
import Trash from '../assets/images/ant-design_delete-filled.png'

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

    const handleIncrement = (id: number) => {
        const item = cartItems.find(item => item.id === id)
        console.log(item)
        dispatch(updateItemQuant(id, item!.quantity + 1));
        
    }

    const handleDecrement = (id: number) => {
        const item = cartItems.find(item => item.id === id)
        dispatch(updateItemQuant(id, item!.quantity - 1));
    }

    //const handleIncrement = () => setQuantity(prev => prev + 1);
    //const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));


  return (
    <>
      <div className='flex w-full px-24 py-18'>
          
        {cartItems.length === 0 ? (
          <h2 className=" font-poppins-semibold text-3xl text-center">Your cart is empty</h2>
          ) : ( 
            <div className="flex w-full gap-8">
                <div className="flex flex-col md:w-2/3 ">
                    <div className="flex justify-start gap-12 items-center h-14 bg-bege">
                        <span className=" font-poppins-medium ml-36 w-28">Product</span>
                        <span className=" font-poppins-medium w-28">Price</span>
                        <span className=" font-poppins-medium w-28">Quantity</span>
                        <span className=" font-poppins-medium pr-9 w-28">Subtotal</span>
                    </div>

                    <ul>
                      <div className="flex items-center justify-start">                    
                        {cartItems.map(item => (
                          <li key={item.id}>
                            <img src={item.image} alt={item.title} className=" w-24 h-24 rounded-xl"/>
                            <span className=" text-gray4 font-poppins-regular w-28">{item.title}</span>
                            <span className="text-gray4 font-poppins-regular w-28">{item.finalPrice}</span>
                            
                            <div className=' flex items-center justify-between w-28 h-16 border px-3 border-gray4 rounded-xl '>
                                <button onClick={() => handleDecrement(item.id)}>-</button>
                                <input 
                                  type="number" 
                                  value={item.quantity} 
                                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                  className='w-16 text-center hide-arrow'
                                  style={{ appearance: 'textfield' }}
                                />
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                            </div>

                            <span className=" w-28 font-poppins-regular">{(item.finalPrice * item.quantity).toFixed(2)}</span>
                            
                            <img src={Trash} alt="Trash icon" 
                                onClick={() => handleDeleteFromCart(item.id)} 
                                className=" w-7 h-7 cursor-pointer"
                            />

                          </li>
                        ))}
                      </div>
                    </ul>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center bg-bege pb-15 pt-4">
                    <h3 className=" font-poppins-semibold text-3xl">Cart Totals</h3>
                    <div className=" flex justify-between gap-10 items-center mt-11 mb-8 w-52">
                      <span className="font-poppins-medium text-start w-16 ">Subtotal</span>
                      <span className=" font-poppins-regular text-gray4 w-36 text-end">{total.toFixed(2)}</span>
                    </div>
                    <div className=" flex justify-between gap-10 items-center mb-11 w-52">
                      <span className="font-poppins-medium text-start w-16 ">Total</span>
                      <span className="font-poppins-medium  text-xl text-mostarda w-36 text-end">{total.toFixed(2)}</span>
                    </div>
                    
                    <button className=" w-52 font-poppins-regular text-xl text-center border border-black rounded-2xl py-3 ">Check Out</button>
                </div>
            
            
            </div>
          )} 
                  
      </div>
    </>
  )
}

export default CartShop