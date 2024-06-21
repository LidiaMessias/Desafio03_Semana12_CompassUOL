import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { updateFormData } from '../action/updateFormDataAction'
import { useDispatch ,useSelector } from "react-redux"
import { RootState } from "../reducers/rootReducer";
import { FormSchema, userFormSchema } from "../types/userFormSchema";
import Elipse1 from '../assets/images/Ellipse1.png'
import { resetCart } from "../action/cartAction";


const PlaceOrder = () => {

    const submitRef = useRef<HTMLButtonElement>(null);

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const billingData = useSelector((state: RootState) => state.updateForm.formData);
    console.log(billingData);

    const { register, handleSubmit, setValue, watch, formState: { errors }, reset} = useForm <FormSchema>({
        resolver: zodResolver(userFormSchema),
    });

    const dispatch = useDispatch();
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = (data: FormSchema) => {
        dispatch(updateFormData(data));
        console.log("Form data submited: ", data);
        dispatch(resetCart());
        reset();
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
    };

    const zipCode = watch('zipCode');

    useEffect(() => {
        if (zipCode?.length === 8) {
            axios.get(`https://viacep.com.br/ws/${zipCode}/json/`)
            .then(response => {
                const { logradouro, localidade, uf } = response.data;
                setValue('address.street', logradouro);
                setValue('address.town', localidade);
                setValue('address.province', uf);
            })
            .catch(error => {
                console.error('Invalid ZIP code', error);
            })
        }
    }, [zipCode, setValue]);

    const total = cartItems.reduce((acum, item) => acum + item.finalPrice * item.quantity, 0);
    

  return (
    <div className='flex justify-between pt-16 pb-18 mb-12 px-28'>
        {/*<form action="">*/}
        <div className='flex flex-col gap-9 px-18 pt-7 w-106'>
            <div className=' flex justify-start'>
               <h2 className=' font-poppins-semibold text-4xl mb-5'>Billing details</h2> 
            </div>    
            <form onSubmit={handleSubmit(onSubmit)} >        
                <div className='flex gap-6 mb-9'>
                    <div className='flex flex-col gap-5 w-94'>
                        <label htmlFor="firstName" className=' font-poppins-medium'>First Name</label>
                        <input type="text" id="firstName" {...register("firstName")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl font-poppins-regular'/>
                        {errors.firstName && <small className="text-red-500 italic">{errors.firstName.message}</small>}
                    </div>
                    <div className='flex flex-col gap-5 w-94'>
                        <label htmlFor="lastName" className=' font-poppins-medium'>Last Name</label>
                        <input type="text" id="lastName" {...register("lastName")}  className=' h-18 pl-7 py-6 border border-gray4 rounded-xl font-poppins-regular '/>
                        {errors.lastName && <small className="text-red-500 italic">{errors.lastName.message}</small>}
                    </div>
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="company" className=' font-poppins-medium'>Company Name (Optional)</label>
                    <input type="text" id="company" {...register("company")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="zipCode" className=' font-poppins-medium'>ZIP code</label>
                    <input type="text" id="zipCode" {...register("zipCode")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                    {errors.zipCode && <small className="text-red-500 italic">{errors.zipCode.message}</small>}
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="country" className=' font-poppins-medium'>Country / Region</label>
                    <input type="text" id="country" {...register("address.country")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                    {errors.address?.country && <small className="text-red-500 italic">{errors.address?.country.message}</small>}
                </div>
                                  
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="street" className=' font-poppins-medium'>Street address</label>
                    <input type="text" id="street" {...register("address.street")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular'/>
                    {errors.address?.street && <small className="text-red-500 italic">{errors.address?.street.message}</small>}
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="town" className=' font-poppins-medium'>Town / City</label>
                    <input type="text" id="town" {...register("address.town")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular' />
                    {errors.address?.town && <small className="text-red-500 italic">{errors.address?.town.message}</small>}
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="province" className=' font-poppins-medium'>Province</label>
                    <input type="text" id="province" {...register("address.province")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular'/>
                    {errors.address?.province && <small className="text-red-500 italic">{errors.address?.province.message}</small>}
                </div>
                            
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="adAddress" className=' font-poppins-medium'>Add-on address</label>
                    <input type="text" id="adAddress" {...register("address.adAddress")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="mail" className=' font-poppins-medium'>Email address</label>
                    <input type="text" id="mail" {...register("email")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
                    {errors.email && <small className="text-red-500 italic">{errors.email.message}</small>}
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="infoadd" className=' font-poppins-medium'></label>
                    <input type="text" id="infoadd" {...register("infoadd")} placeholder='Additional information' className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
                </div>
                <button type="submit" ref={submitRef}></button>
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

            <div className="flex gap-4 mt-6 mb-3 items-center">
                <img src={Elipse1} alt="Radio checked" className=" w-3 h-3" />
                <p className=" font-poppins-regular">Direct Bank Transfer</p>
            </div>                               
            <p className=" font-poppins-light text-gray4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

            <form action="">   
                <div className="flex flex-col items-start my-6 ">
                    <div className="flex gap-4 font-poppins-medium text-gray4">
                        <input type="radio" name="meth_payment" id="trasnfer" value="Transfer"/>
                        <label htmlFor="transfer">Direct Bank Transfer</label>
                    </div>
                    <div className="flex gap-4 font-poppins-medium text-gray4">
                        <input type="radio" name="meth_payment" id="cash" value="Cash" />
                        <label htmlFor="cash">Cash on Delivery</label>
                    </div>
                </div>
                   

                <p className=" font-poppins-regular mb-10">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className=" font-poppins-semibold">privacy policy.</span> </p>
                
            </form>

            <div className="flex flex-col justify-center items-center">
                <button className=" px-24 py-4 border border-black rounded-2xl font-poppins-regular text-xl cursor-pointer" onClick={() => submitRef.current?.click()}>Place order</button>
                {isSuccess && <button className=" px-20 py-4 mt-10 bg-green-700 text-white font-poppins-medium text-xl rounded-2xl">Order placed successfully</button>}
            </div>

        </div>

    </div>
  )
}

export default PlaceOrder