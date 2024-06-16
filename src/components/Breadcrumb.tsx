import { Link, useLocation } from 'react-router-dom';
import RightArrow from '../assets/images/dashicons_arrow-down-alt2.png'
import BackImage from '../assets/images/Rectangle 1.png'
import Logo from '../assets/images/Meubel House_Logos-05.png'

const Breadcrumb = () => {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    const currentPage = pathnames.length > 0 ? pathnames[pathnames.length - 1] : 'Home';

    return (
        <div className=' h-80 bg-cover text-center flex flex-col justify-center items-center ' style={{ backgroundImage: `url(${BackImage})` }}>
            <img src={Logo} alt="Logotipo da Empresa" className=' w-12 h-8 mb-5'/>
            <h1 className=' font-poppins-medium text-5xl'>{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</h1>
            <nav className='flex mt-3'>
                <ul className='flex justify-center gap-3 items-center'>
                    <li className='flex items-center'>
                        <Link to={'/'} className=' font-poppins-medium mr-3'>
                            Home
                        </Link>
                        <img src={RightArrow} alt="Icone de seta para a direita" />
                    </li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={to} className='flex items-center'>
                                {!isLast ? (
                                    <>
                                        <Link to={to} className='font-poppins-light mr-3'>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                                        <img src={RightArrow} alt="Icone de seta para a direita" />
                                    </>
                                ) : (
                                    <span className='font-poppins-light'>{value.charAt(0).toUpperCase() + value.slice(1)} </span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Breadcrumb