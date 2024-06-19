import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Logo from '../assets/images/Meubel House_Logos-05.png'
import UserImg from '../assets/images/login.png'
import ShopCart from '../assets/images/shop-cart.png'
import CartModal from "./CartModal"

const Header = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    /*const handleCartClick = () => {
        setIsModalVisible(!isModalVisible)
    };

    /*const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setIsModalVisible(false);
        }
    }*/

    const handleCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsModalVisible(!isModalVisible);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    }

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (isModalVisible && (e.target as HTMLElement).closest('.cart-modal') === null) {
              setIsModalVisible(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isModalVisible]);

  return (
    <header className=" h-24 ">
        <nav className=" mx-auto h-full flex justify-between items-center relative">    
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
                <Link to={'/login'}>
                    <img src={UserImg} alt="User icon" />
                </Link>
                
                <img src={ShopCart}  alt="Cart icon" onClick={handleCartClick} className=" cursor-pointer" />
                {isModalVisible && (
                    <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-10 "></div>
                    <div 
                        className="absolute top-0 right-0 z-20"
                        //onClick={handleOutsideClick}    
                    >
                        <CartModal 
                        isVisible={isModalVisible} 
                        onClose={closeModal}   
                    />
                    </div>
                    </>
                )}
                            
            </div>

        </nav>
        
    </header>
  )
}

export default Header