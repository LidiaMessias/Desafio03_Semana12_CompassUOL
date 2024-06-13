import { useState, useEffect }from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import img01 from '../assets/images/image 1.png'
import img02 from '../assets/images/image 2.png'
import img03 from '../assets/images/image 3.png'
import img04 from '../assets/images/image 4.png'
import img05 from '../assets/images/Image 5.png'
import img06 from '../assets/images/image 6.png'
import img07 from '../assets/images/image 7.png'
import img08 from '../assets/images/image 8.png'

type ProductType = {
    id: number;
    title: string;
    subtitle: string;
    shorDescription: string;
    description: string;
    size: string;
    color: string[];
    price: number;
    discount: number;
    isInSale: boolean;
    category: string;
    tags: string[];
    new: boolean;
};

const ProductsList = () => {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get<{ products: ProductType[] }>('https://run.mocky.io/v3/b77f6f80-b256-425f-b3ed-513da6456cb8').then(response => {
            console.log(response.data);
            if (response.data && Array.isArray(response.data.products)) {
                setProducts(response.data.products);
            } else {
                setError("Unespected response");
            }
            
        }).catch(err => {
            setError("Erro ao carregar os produtos");
        });
    }, []);

    if (error) {
        navigate('/');
        return null;
    }

    const images = [img01, img02, img03, img04, img05, img06, img07, img08]
;
    return (
        <>
        
            <div className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 w-full px-24 pt-16 '>
                {products.map((product, index) => {
                    const offer = product.isInSale ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
                    const image = images[index % images.length];
                    return (
                        <Link to={`/product/${product.id}`}>
                            <div key={product.id} className='flex flex-col md:items-center mb-20'>
                                <div className=' flex flex-col justify-start md:max-w-72'>
                                    <img src={image} alt={product.title} className='w-full md:max-h-76' />
                                    <div className='px-4 pt-4 bg-graylig'>
                                        <h3 className=' font-poppins-semibold text-2xl text-gray1 mt-2 mb-3'>{product.title}</h3>
                                        <span className=' font-poppins-medium text-graymed '>{product.subtitle} </span>
                                        <div className=' mb-8 mt-3'>
                                            {product.isInSale ? (
                                                <p>
                                                    <span className=' font-poppins-semibold text-xl text-gray1'>Rp {offer}</span>
                                                    <span className=' ml-14 font-poppins-regular text-gray0 line-through'>Rp {product.price} </span>
                                                </p>
                                            ) : (
                                                <p className='font-poppins-semibold text-xl text-gray1'>Rp {product.price} </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>  
        </>
    )
}

export default ProductsList