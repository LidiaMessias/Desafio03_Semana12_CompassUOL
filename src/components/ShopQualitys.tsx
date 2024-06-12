import Troffy from '../assets/images/trophy 1.png'
import Warranty from '../assets/images/warranty.png'
import Shipping from '../assets/images/shipping.png'
import Support from '../assets/images/support.png'

const ShopQualitys = () => {
  return (
    <div className=' w-full h-68 px-14 flex justify-between bg-begeexlig items-center '>
        <div className='flex gap-3 '>
            <img src={Troffy} alt="Troffy Icon" className=' w-15 h-15' />
            <div className='flex flex-col gap-1'>
                <h3 className=' font-poppins-semibold text-gray5 text-2xl'>High Quality</h3>
                <p className=' font-poppins-medium text-xl text-graymed'>crafted from top materials</p>
            </div>
        </div>

        <div className='flex gap-3 '>
            <img src={Warranty} alt="Warranty Icon" className=' w-15 h-15' />
            <div className='flex flex-col gap-1'>
                <h3 className=' font-poppins-semibold text-gray5 text-2xl'>Warranty Protection</h3>
                <p className=' font-poppins-medium text-xl text-graymed'>Over 2 years</p>
            </div>
        </div>

        <div className='flex gap-3 '>
            <img src={Shipping} alt="Shipping Icon" className=' w-15 h-15' />
            <div className='flex flex-col gap-1'>
                <h3 className=' font-poppins-semibold text-gray5 text-2xl'>Free Shipping</h3>
                <p className=' font-poppins-medium text-xl text-graymed'>Order over 150 $</p>
            </div>
        </div>

        <div className='flex gap-3 '>
            <img src={Support} alt="Support Icon" className=' w-15 h-15' />
            <div className='flex flex-col gap-1'>
                <h3 className=' font-poppins-semibold text-gray5 text-2xl'>24 / 7 Support</h3>
                <p className=' font-poppins-medium text-xl text-graymed'>Dedicated support</p>
            </div>
        </div>

    </div>
  )
}

export default ShopQualitys