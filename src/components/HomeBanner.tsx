import { Link } from 'react-router-dom'
import Banner from '../assets/images/scandinavian-interior-mockup-wall-decal-background 1.png'

const HomeBanner = () => {
  return (
    <div className=' w-full'>
        <img src={Banner}  alt="Living Room image" className='hidden lg:flex lg:w-full'/>
        <div className=' flex flex-col justify-start   md:w-101 md:h-100 bg-nude px-10  pt-14 pb-10 rounded-xl absolute top-56 right-16 z-10'>
          <span className=' text-dark font-poppins-semibold mb-3'>New Arrival</span>
          <h2 className=' font-poppins-bold text-5xl text-mostarda'>Discover Our </h2>
          <h2 className=' font-poppins-bold text-5xl text-mostarda mt-3'>New Collection</h2>
          <p className=' text-lg font-poppins-medium text-dark mt-5 mb-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Link to={'/shop'} >
            <button className=' text-white font-poppins-bold bg-mostarda w-56 h-18 text-center transition-all hover:scale-105 hover:bg-darkmostarda'>BUY NOW</button>
          </Link>
        </div>
    </div>
  )
}

export default HomeBanner