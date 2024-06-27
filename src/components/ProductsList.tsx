import { useState, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Product } from '../types/product';
import Card from './Card';
import Filter from '../assets/images/system-uicons_filtering.png'
import Grid from '../assets/images/grid-big.png'
import List from '../assets/images/view-list.png'


const ProductsList = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(16);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {

        const getProducts = async () => {
            try {
                const response = await axios.get<{ products: Product[] }>('https://run.mocky.io/v3/56248314-87db-4c19-b4ad-2982819a4352');
                const products = response.data.products;

                setProducts(products);
                setTotalProducts(products.length)

            } catch (error){
                setError("Erro ao carregar os produtos");
            }
        };

        getProducts();

    }, []);

    if (error) {
        navigate('/');
        return null;
    }

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const handlePage = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    };

    
    return (
        <>
        <div className=' h-28 w-full flex items-center justify-between bg-bege px-28 '>
            <div className='flex gap-8'>
                <div className='flex gap-6 '>
                    <img src={Filter} alt="icone de filtro" className=' w-6 h-6' />
                    <span className=' font-poppins-regular text-xl'>Filter</span>
                    <img src={Grid} alt="Ícone de grid" className=' w-6 h-6' />
                    <img src={List} alt="Ícone de lista" className=' w-6 h-6'/>
                </div>
                <div className='pl-9 border-l-2  border-gray4'>
                    <span className='font-poppins-regular'>Showing {indexOfFirstProduct + 1}-{indexOfLastProduct > totalProducts ? totalProducts : indexOfLastProduct} of {totalProducts} </span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <span className=' font-poppins-regular text-xl'>Show</span>
                <input 
                    type="number" 
                    value={itemsPerPage} 
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className=' text-center w-14 h-14 border-0 font-poppins-regular text-gray4 text-xl' 
                    min='1'
                />     
                <span>Sort by</span>
                <input type="text" value="Default" className=' p-5 w-48 h-14 border-0  font-poppins-regular text-gray4 text-xl'  />
            </div>
        </div>

        <div className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 w-full px-24 pt-16 mb-12 '>

            {currentProducts.map(product => (
                <Card key={product.id} product={product} />
            ))}

        </div>  

        <div className=' flex justify-center items-center gap-10 mb-20'>
            {[...Array(totalPages)].map((_, index) => (
                <button key={index}
                    onClick={() => handlePage(index + 1)}
                    className={`font-poppins-regular text-xl w-15 h-15 rounded-xl ${currentPage === index + 1 ? 'bg-mostarda text-white' : 'bg-bege text-black' }`} 
                >
                    {index + 1} 
                </button>
            ))}
            
        </div>
        </>
    )
}

export default ProductsList