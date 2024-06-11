import Facebook from '../assets/images/facebook.png'
import Twitter from '../assets/images/twitter.png'
import Instagran from '../assets/images/instagram 1.png'
import Linkedin from '../assets/images/linkedin 1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' w-full border-t-2 border-gray6'>
    <div className=' mx-24 py-12 flex flex-row justify-center gap-36 border-b-2 border-gray6 mb-10'>
      <div className=' flex flex-col content-start gap-14 w-72'>
        <span className=' font-poppins-bold text-2xl'>Funiro.</span>
        <p className=' font-poppins-regular text-gray4'>400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>
        <div className='flex flex-row gap-4'>
            <a href="https://www.facebook.com/" target="_blank">
              <button className=' w-9 h-9 rounded-full shadow-lg shadow-gray0 drop-shadow-xl'>
                <img src={Facebook} alt="Logo do Facebook" className=' m-auto' />
              </button>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <button className=' w-9 h-9 rounded-full shadow-lg shadow-gray0 drop-shadow-xl'>
                <img src={Instagran} alt="Logo do Instagram" className=' m-auto'/>
              </button>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <button className=' w-9 h-9 rounded-full shadow-lg shadow-gray0 drop-shadow-xl'>
                <img src={Twitter} alt="Logo do Twitter" className=' m-auto' />
              </button>
            </a>   
            
            <a href="https://www.linkedin.com/" target="_blank">
              <button className=' w-9 h-9 rounded-full shadow-lg shadow-gray0 drop-shadow-xl'>
                <img src={Linkedin} alt="Logo do Linkedin" className=' m-auto'/>
              </button>
            </a>   
        </div>
      </div>
      <div className='flex flex-col gap-14'>
          <span className=' font-poppins-medium text-gray4'>Links</span>
          <Link to={'/'}>
            <span className=' font-poppins-medium text-black'>Home</span>
          </Link>
          <Link to={'/shop'}>
            <span className=' font-poppins-medium text-black'>Shop</span>
          </Link>
          <Link to={'/about'}>
            <span className=' font-poppins-medium text-black'>About</span>
          </Link>
          <Link to={'/contact'}>
            <span className=' font-poppins-medium text-black'>Contact</span>
          </Link>   
      </div>

        <div className='flex flex-col gap-14'>
          <span className=' font-poppins-medium text-gray4'>Help</span>
          <span className=' font-poppins-medium text-black'>Payment Options</span>
          <span className=' font-poppins-medium text-black'>Returns</span>
          <span className=' font-poppins-medium text-black'>Privacy Policies</span>
        </div>

        <div className='flex flex-col gap-14'>
          <span className=' font-poppins-medium text-gray4'>Newsletter</span>
          <div className='flex flex-row'>
            <form action="">
              <input type="email" placeholder='Enter Your Email Address' className=' w-49 border-b-2 border-black font-poppins-medium text-sm'/>
              <button type='submit' className='border-b-2 border-black text-black font-poppins-medium text-sm ml-4'>SUBSCRIBE</button>
            </form>
          </div>
        </div>
    </div>

      <span className=' font-poppins-regular text-black mx-24 py-10'>2023 furino. All rights reserved</span>
      
    </footer>
  )
}

export default Footer