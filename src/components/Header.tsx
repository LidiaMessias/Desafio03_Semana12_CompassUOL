import { Link } from "react-router-dom"

import Logo from '../assets/images/Meubel House_Logos-05.png'
import UserImg from '../assets/images/login.png'
import ShopCart from '../assets/images/shop-cart.png'

const Header = () => {
  return (
    <header className=" h-24">
        <div className=" mx-auto h-full flex justify-between items-center">

            <Link to={'/'} >
                <div className="flex gap-2 pl-14 items-center">
                    <img src={Logo} alt="Logotipo da Empresa" className=' w-12 h-8' />
                    <span className=" text-4xl font-montserrat-bold">Furniro</span>
                </div>
            </Link>

            <div className="hidden md:flex items-center">
                <ul className=" flex gap-20 font-poppins-medium">
                    <Link to={'/'} >
                        <li>Home</li>
                    </Link>

                    <Link to={'/shop'} >
                        <li>Shop</li>
                    </Link>

                    <Link to={'/about'} >
                        <li>About</li>
                    </Link>

                    <Link to={'/contact'} >
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>

            <div className="flex gap-9 mr-28 font-normal">
                <img src={UserImg} alt="" />
                <Link to={'/shopcart'}>
                    <img src={ShopCart}  alt="" />
                </Link>
            </div>

        </div>
        
    </header>
  )
}

export default Header