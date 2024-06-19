import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { deleteFromCart } from '../action/cartAction';
import { Link } from 'react-router-dom';
import Trash from '../assets/images/ant-design_delete-filled.png';

interface CartModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isVisible, onClose }) => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleDeleteFromCart = (id: number) => {
        dispatch(deleteFromCart(id));
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="absolute top-14 right-4 w-96 bg-white shadow-lg p-4 z-50">
            <div>

                
            </div>
        <h3 className="font-poppins-semibold text-2xl mb-2">Shopping Cart</h3>
        {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty</p>
        ) : (
            <ul>
            {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between mb-2">
                <img src={item.image} alt={item.title} className="w-12 h-12 rounded" />
                <span className="text-gray4 font-poppins-regular">{item.title}</span>
                <span className="font-poppins-regular">{item.quantity}</span>
                <img
                    src={Trash}
                    alt="Trash icon"
                    onClick={() => handleDeleteFromCart(item.id)}
                    className="w-5 h-5 cursor-pointer"
                />
                </li>
            ))}
            </ul>
        )}
        <div className="mt-2 flex justify-between">
            <Link to="/cart" className="bg-blue-500 text-white py-1 px-2 rounded-lg">
            Cart
            </Link>
            <Link to="/checkout" className="bg-green-500 text-white py-1 px-2 rounded-lg">
            Checkout
            </Link>
        </div>
        <button onClick={onClose} className="mt-2 w-full text-center bg-red-500 text-white py-1 rounded-lg">
            Close
        </button>
        </div>
    );
};

export default CartModal;
