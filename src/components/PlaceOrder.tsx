import { useSelector } from "react-redux"
import { RootState } from "../reducers/rootReducer";

const PlaceOrder = () => {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const total = cartItems.reduce((acum, item) => acum + item.finalPrice * item.quantity, 0);

  return (
    <div className='flex justify-between pt-16 pb-18 mb-12 px-28'>
        {/*<form action="">*/}
        <div className='flex flex-col gap-9 px-18 pt-7 w-106'>
            <div className=' flex justify-start'>
               <h2 className=' font-poppins-semibold text-4xl mb-5'>Billing details</h2> 
            </div>    
            <form action="">        
                <div className='flex gap-6 mb-9'>
                    <div className='flex flex-col gap-5 w-94'>
                        <label htmlFor="" className=' font-poppins-medium'>First Name</label>
                        <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl font-poppins-regular '/>
                    </div>
                    <div className='flex flex-col gap-5 w-94'>
                        <label htmlFor="" className=' font-poppins-medium'>Last Name</label>
                        <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl font-poppins-regular ' />
                    </div>
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Company Name (Optional)</label>
                    <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>ZIP code</label>
                    <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Country / Region</label>
                    <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Street address</label>
                    <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Town / City</label>
                    <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Province</label>
                    <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Add-on address</label>
                    <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Email address</label>
                    <input type="text" className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'></label>
                    <input type="text" placeholder='Additional information' className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
                </div>
            </form>
        </div>
        {/*</form>*/}

        <div className='flex flex-col mt-12 py-12 px-10 w-106 '>
            <div className=' w-full flex justify-between mb-8'>
                <span className=' font-poppins-medium text-2xl'>Product</span>
                <span className=' font-poppins-medium text-2xl'>Subtotal</span>
            </div>
            <ul>
                {cartItems.map(item => (    
                    <li key={item.id}>
                        <div className=' w-full flex justify-between mb-7 '>
                            <div className="flex items-center">
                                <span className=' font-poppins-regular text-gray4 w-36'>{item.title}</span>
                                <span className=" font-poppins-medium text-sm">X {item.quantity} </span>
                            </div>       
                            <span className=' font-poppins-light'>Rs. {(item.finalPrice * item.quantity).toFixed(2)}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className=' w-full flex justify-between mb-8'>
                <span className='font-poppins-regular'>Subtotal</span>
                <span className='font-poppins-regular'>Rs. {total.toFixed(2)}</span>
            </div>
            <div className=' w-full flex justify-between pb-10 border-b border-gray6 '>
                <span className='font-poppins-regular'>Total</span>
                <span className='font-poppins-bold text-2xl text-mostarda'>Rs. {total.toFixed(2)}</span>
            </div>

        </div>

    </div>
  )
}

export default PlaceOrder