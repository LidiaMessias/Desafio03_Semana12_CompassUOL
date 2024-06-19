import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { deleteFromCart } from '../action/cartAction';
import { useNavigate } from 'react-router-dom';
import Trash from '../assets/images/ant-design_delete-filled.png';

interface CartModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isVisible, onClose }) => {
    const navigate = useNavigate();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleDeleteFromCart = (id: number) => {
        dispatch(deleteFromCart(id));
    };

    const handleCartClick = () => {
        onClose();
        navigate('/cart');
    };
    
    const handleCheckoutClick = () => {
        onClose();
        navigate('/checkout');
    };

    const handleDeleteItemClick = (id: number, e:React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.stopPropagation();  //Impede a propagação do evento para não fechar o modal
        handleDeleteFromCart(id)
    }

    if (!isVisible) {
        return null;
    }

    const total = cartItems.reduce((acum, item) => acum + item.finalPrice * item.quantity, 0);

    return (
        <div className="cart-modal relative w-96 bg-white shadow-lg p-4 z-20 overflow-y-auto">
            <div className='flex flex-col px-4'>
                <h3 className="font-poppins-semibold text-2xl border-b border-gray6 mt-5 mb-9 pb-8">Shopping Cart</h3>

                {cartItems.length === 0 ? (
                    <p className="text-center font-poppins-semibold">Your cart is empty</p>
                ) : (
                    <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex items-center mb-5">
                        <img src={item.image} alt={item.title} className=" w-24 h-24 rounded-lg" />
                        <div className='flex flex-col gap-2 w-32 ml-6 mr-20'>
                            <span className="font-poppins-regular">{item.title}</span>
                            <div className='flex gap-5 items-center'>
                                <span className=" font-poppins-light">{item.quantity}</span>
                                <span className=' font-poppins-light'>X</span>
                                <span className=' font-poppins-medium text-xs text-mostarda'>Rs. {item.finalPrice}</span>
                            </div>
                        </div>
                        
                        <img
                            src={Trash}
                            alt="Trash icon"
                            onClick={(e) => handleDeleteItemClick(item.id, e)}
                            className="w-5 h-5 cursor-pointer"
                        />
                        </li>
                    ))}
                    </ul>
                )}

                <div className='flex gap-28 items-center mt-36'>
                    <span className=' font-poppins-regular'>SubTotal</span>
                    <span className=' font-poppins-semibold text-mostarda'>Rs. {total.toFixed(2)}</span>
                </div>
            </div>   
        
            <div className='flex justify-between px-4 py-7 mt-6 border-t border-gray6'>
                <button 
                    className=" font-poppins-regular text-xs border border-black py-1 px-7 rounded-4xl"
                    onClick={handleCartClick}    
                >
                    Cart
                </button>
                <button
                    className=" font-poppins-regular text-xs border border-black py-1 px-7 rounded-4xl"
                    onClick={handleCheckoutClick}
                >
                    Checkout
                </button>
                <button className=' font-poppins-regular text-xs border border-black py-1 px-7 rounded-4xl'>Comparison</button>
            </div>
            
        </div>
    );
};

export default CartModal;
