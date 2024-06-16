import LocalIcon from '../assets/images/localicon.png'
import PhoneIcon from '../assets/images/phoneicon.png'
import Timeicon from '../assets/images/timeicon.png'

const ContactForm = () => {
  return (
    <div className='flex flex-col items-center pt-24 pb-15'>
        <h1 className=' font-poppins-semibold text-4xl'>Get In Touch With Us</h1>
        <p className=' font-poppins-regular text-gray4 lg:px-100 text-center mt-3'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

        <div className='flex justify-center md:gap-36 w-full md:px-48 mt-20'>
            <div className='flex gap-10 pt-12'>
                <div className='flex flex-col items-start '>
                    <img src={LocalIcon} alt="Localization icon" className=' w-6 h-7 mb-32' />
                    <img src={PhoneIcon} alt="Phone icon" className=' w-7 h-7 mb-28'/>
                    <img src={Timeicon} alt="Time icon" className=' w-6 h-6' />
                </div>
                <div className='flex flex-col items-start max-w-52'>
                    <h2 className=' font-poppins-medium text-2xl'>Address</h2>
                    <span className=' font-poppins-regular mb-10'>236 5th SE Avenue, New York NY10000, United States</span>
                    <h2 className=' font-poppins-medium text-2xl mt-2'>Phone</h2>
                    <span className=' font-poppins-regular mb-10'>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</span>
                    <h2 className=' font-poppins-medium text-2xl mt-4'>Working Time</h2>
                    <span className=' font-poppins-regular mb-10'>Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00</span>
                </div>
            </div>

            <div className=' pt-12 flex flex-col'>
                <form action="">
                    <div className=' flex flex-col mb-9 gap-6 '>
                        <label htmlFor="" className=' font-poppins-medium'>Your Name</label>
                        <input type="text" placeholder='Abc' className=' w-97 h-18 border pl-7 rounded-xl border-gray4 ' />
                    </div>
                    <div className=' flex flex-col mb-9 gap-6 '>
                        <label htmlFor="" className=' font-poppins-medium'> Email address</label>
                        <input type="email" placeholder='Abc@def.com' className=' w-97 h-18 border pl-7 rounded-xl border-gray4' />
                    </div>
                    <div className=' flex flex-col mb-9 gap-6 '>
                        <label htmlFor="" className=' font-poppins-medium'>Subject</label>
                        <input type="text" placeholder='This is an optional' className=' w-97 h-18 pl-7 border rounded-xl border-gray4'/>
                    </div>
                    <div className=' flex flex-col gap-6 mb-12'>
                        <label htmlFor="" className=' font-poppins-medium'>Message</label>
                        <textarea name="" id="" placeholder="Hi! I'd like to ask about..." className=' w-97 h-32 pl-7 pt-6 border rounded-xl border-gray4'></textarea>
                    </div>
                    
                    <button className=' w-60 h-14 text-center py-3 bg-mostarda rounded-md font-poppins-regular text-white'>Submit</button>
                </form>

            </div>

        </div>
    </div>
  )
}

export default ContactForm