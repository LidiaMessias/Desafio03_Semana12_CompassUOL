import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import RightArrow from '../assets/images/dashicons_arrow-down-alt2.png'
import axios from 'axios';
import Star from '../assets/images/Star.png'
import halfStar from '../assets/images/halfStar.png'
import ProductImg01 from '../assets/images/Outdoor sofa set 2.png'
import ProductImg02 from '../assets/images/Outdoor sofa set_2 1.png'
import ProductImg03 from '../assets/images/Stuart sofa 1.png'
import ProductImg04 from '../assets/images/Maya sofa three seater.png'
import ProductImg05 from '../assets/images/Cloud sofa three seater + ottoman_1 1.png'
import ProductImg06 from '../assets/images/Cloud sofa three seater + ottoman_2 1.png'


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

const ProductInfos = () => {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        
        const getProduct = async () => {
            try {
                const response = await axios.get<{products: ProductType[] }>(`https://run.mocky.io/v3/b77f6f80-b256-425f-b3ed-513da6456cb8/${id}`);
                const products = response.data.products;

                if (id) {
                    const singleProduct = products.find(product => product.id === parseInt(id));

                    if (singleProduct) {
                        setProduct(singleProduct);
                    } else {
                    setError("Product not found!");
                    }
                } 

            } catch (error) {
                setError("Erro ao carregar o produto!")
            }    
        };
        
        getProduct();

    }, [id]);

    if (error) {
        console.log("Erro ao carregar o produto", error)
        return null;
    }

    if (!product) {
        return null;
    }

    const offer = product.isInSale ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
  return (
    <>
        <div className='h-28 w-full flex items-center justify-start bg-bege px-28 '>
            <div className='flex gap-6 pr-7 border-r-2  border-gray4'>
                <Link to={'/'} className=' font-poppins-regular text-gray4'>
                    Home
                </Link>
                <img src={RightArrow} alt="Icone de seta para a direita" />
                <Link to={'/shop'}>
                    <span className='font-poppins-regular text-gray4'>Shop</span>
                </Link>
                <img src={RightArrow} alt="Icone de seta para a direita" />
            </div>
            <span className=' ml-9 font-poppins-regular'>{product.title} </span>
        </div>
        <div className='flex py-9 px-24'>
            <div>

            </div>
            <div className='flex flex-col justify-start'>
                <h2 className=' font-poppins-regular text-5xl'>{product.title}</h2>
                <div className=' mb-8 mt-3'>
                    {product.isInSale ? (
                        <p className='flex items-center'>
                            <span className=' font-poppins-medium text-2xl text-gray4'>Rp {offer}</span>
                            <span className=' ml-14 font-poppins-regular  text-xl text-gray4 line-through'>Rp {product.price} </span>
                        </p>
                    ) : (
                        <p className='font-poppins-medium text-2xl text-gray4'>Rp {product.price} </p>
                    )}
                </div>
                <div className='flex gap-14 '>
                    <div className='flex gap-2'>
                        <img src={Star} alt="Star icon" />
                        <img src={Star} alt="Star icon" />
                        <img src={Star} alt="Star icon" />
                        <img src={Star} alt="Star icon" />
                        <img src={halfStar} alt="Half star icon" />
                    </div>
                    <div>
                        <span className=' pl-5 font-poppins-regular text-sm text-gray4 border-l border-gray4 '>5 Customer Review</span>
                    </div>
                </div>
                <p className=' font-poppins-regular text-sm'>{product.description}</p>
                <span className=' text-gray4 font-poppins-regular text-sm'>Size</span>
                <button className=' w-8 h-8 text-bege font-poppins-regular text-sm'>{product.size}</button>
                <span className=' text-gray4 font-poppins-regular text-sm'>Color</span>
                <div className='flex gap-4 '>
                    {product.color.map((color, index) => (
                        <button key={index} className='w-8 h-8 rounded-full' style={{ backgroundColor: color}}></button>
                    ))}
                </div>
                <div className='flex  justify-start gap-5 pb-15 border-b  border-gray6 md:w-104'>
                    <input type="number" className=' w-32 h-16 border border-gray4 text-center '/>
                    <button className=' w-56 h-16 border rounded-2xl border-black font-poppins-regular text-xl'>Add To Cart</button>
                </div>
                

            </div>
        </div>
    </>
  )
}

export default ProductInfos