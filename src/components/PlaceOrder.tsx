import { useEffect } from "react";
import { useForms, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { updateFormData } from '../action/updateFormDataAction'
import { useDispatch ,useSelector } from "react-redux"
import { RootState } from "../reducers/rootReducer";
import { FormSchema, userFormSchema } from "../types/userFormSchema";
import * as z from "zod";

const PlaceOrder = () => {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const billingData = useSelector((state: RootState) => state.updateForm.formData);
    console.log(billingData);

    const { register, handleSubmit, setValue, watch, formState: { errors }} = useForm <FormSchema>({
        resolver: zodResolver(userFormSchema),
    });

    const dispatch = useDispatch();

    const onSubmit = (data: FormSchema) => {
        dispatch(updateFormData(data));
        console.log("Form data submited: ", data);
        reset();
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
                        <label htmlFor="" className=' font-poppins-medium'>First Name</label>
                        <input type="text" {...register("firstName")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl font-poppins-regular '/>
                        {errors.firstName && <small className="text-red-500 italic">{errors.firstName.message}</small>}
                    </div>
                    <div className='flex flex-col gap-5 w-94'>
                        <label htmlFor="" className=' font-poppins-medium'>Last Name</label>
                        <input type="text" {...register("lastName")}  className=' h-18 pl-7 py-6 border border-gray4 rounded-xl font-poppins-regular '/>
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Company Name (Optional)</label>
                    <input type="text" {...register("company")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>ZIP code</label>
                    <input type="text" {...register("zipCode")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                    {errors.zipCode && <p>{errors.zipCode.message}</p>}
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Country / Region</label>
                    <input type="text" {...register("address.country")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular ' />
                    {errors.address?.country && <p>{errors.address?.country.message}</p>}
                </div>
               {/* {zipCode?.length === 8 && ( */}
                    <>
                        <div className='flex flex-col gap-5 mb-9'>
                            <label htmlFor="" className=' font-poppins-medium'>Street address</label>
                            <input type="text" {...register("address.street")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular'/>
                        </div>
                        <div className='flex flex-col gap-5 mb-9'>
                            <label htmlFor="" className=' font-poppins-medium'>Town / City</label>
                            <input type="text" {...register("address.town")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular' />
                        </div>
                        <div className='flex flex-col gap-5 mb-9'>
                            <label htmlFor="" className=' font-poppins-medium'>Province</label>
                            <input type="text" {...register("address.province")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular'/>
                        </div>
                    </>
              {/* )} */}
                
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Add-on address</label>
                    <input type="text" {...register("address.adAddress")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'>Email address</label>
                    <input type="text" {...register("email")} className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className='flex flex-col gap-5 mb-9'>
                    <label htmlFor="" className=' font-poppins-medium'></label>
                    <input type="text" {...register("infoadd")} placeholder='Additional information' className=' h-18 pl-7 py-6 border border-gray4 rounded-xl w-95 font-poppins-regular '/>
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
            <div className="flex justify-center">
                <button className=" px-24 py-4 border rounded-2xl font-poppins-regular text-xl cursor-pointer">Place order</button>
            </div>

        </div>

    </div>
  )
}

export default PlaceOrder