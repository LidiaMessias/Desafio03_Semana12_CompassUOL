import BackImage from '../assets/images/Rectangle 1.png'
import { Link } from 'react-router-dom'
import RightArrow from '../assets/images/dashicons_arrow-down-alt2.png'

const ShopBanner = () => {
  return (
    <> 
        <div className=' h-80 bg-cover text-center flex flex-col justify-center ' style={{ backgroundImage: `url(${BackImage})` }}>
            <h1 className=' font-poppins-medium text-5xl'>Shop</h1>
            <div className='flex justify-center gap-3 mt-3'>
                <Link to={'/'} className=' font-poppins-medium'>
                    Home
                </Link>
                <img src={RightArrow} alt="Icone de seta para a direita" />
                <span className='font-poppins-light'>Shop</span>
            </div>
        </div>
    </>
  )
}

export default ShopBanner