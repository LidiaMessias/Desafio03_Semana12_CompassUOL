import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import RightArrow from '../assets/images/dashicons_arrow-down-alt2.png'
import axios from 'axios';
import Star from '../assets/images/Star.png'
import halfStar from '../assets/images/halfStar.png'
import ProductImg01 from '../assets/images/Cloud sofa three seater + ottoman_1 1.png'
import ProductImg02 from '../assets/images/Cloud sofa three seater + ottoman_2 1.png'
import ProductImg03 from '../assets/images/Asgaard sofa 3.png'
import FaceIcon from '../assets/images/akar-icons_facebook-fill.png'
import Twitter from '../assets/images/Twitter1.png'
import Linkedin from '../assets/images/akar-icons_linkedin-box-fill.png'


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
    const [selectedImage, setSelectedImage] = useState<string | null>(null); 

    const images = [ProductImg01, ProductImg02, ProductImg03, ProductImg01];

    useEffect(() => {
        
        const getProduct = async () => {
            try {
                const response = await axios.get<{products: ProductType[] }>(`https://run.mocky.io/v3/b77f6f80-b256-425f-b3ed-513da6456cb8/${id}`);
                const products = response.data.products;

                if (id) {
                    const singleProduct = products.find(product => product.id === parseInt(id));

                    if (singleProduct) {
                        setProduct(singleProduct);
                        setSelectedImage(images[0]);
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
        <div className='w-full flex py-9 px-24'>
            <div className='flex  gap-12 '>
                <div className=' flex flex-col w-20 gap-8 '>
                    {images.map((image, index) => (
                        <img key={index} 
                        src={image} 
                        alt={`product.title ${index + 1}`} 
                        className={`w-20 h-20 rounded-xl object-cover bg-bege cursor-pointer ${selectedImage === image ? 'border-2 border-black' : 'border-0'}`}
                        onClick={() => setSelectedImage(image)}
                        />      
                    ))}
                </div>
                <div className='w-99 h-99 bg-bege rounded-xl'>
                    {selectedImage && (
                        <img src={selectedImage} alt={product.title} className='w-full h-full object-cover' />
                    )}
                </div>
            </div>
            <div className='flex flex-col justify-start ml-28 md:w-104'>
                <h2 className=' font-poppins-regular text-5xl'>{product.title}</h2>
                <div className=' mt-3'>
                    {product.isInSale ? (
                        <p className='flex items-center'>
                            <span className=' font-poppins-medium text-2xl text-gray4'>Rp {offer}</span>
                            <span className=' ml-14 font-poppins-regular  text-xl text-gray4 line-through'>Rp {product.price} </span>
                        </p>
                    ) : (
                        <p className='font-poppins-medium text-2xl text-gray4'>Rp {product.price} </p>
                    )}
                </div>
                <div className='flex gap-14 my-4 '>
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
                <p className=' font-poppins-regular text-sm md:w-100 mb-6'>{product.description}</p>
                <span className=' text-gray4 font-poppins-regular text-sm'>Size</span>
                <button className=' w-8 h-8 bg-bege rounded font-poppins-regular text-sm mt-3'>{product.size}</button>
                <span className=' text-gray4 font-poppins-regular text-sm mt-6'>Color</span>
                <div className='flex gap-4 '>
                    {product.color.map((color, index) => (
                        <button key={index} className='w-8 h-8 rounded-full mt-3 ' style={{ backgroundColor: color}}></button>
                    ))}
                </div>
                <div className='flex  justify-start gap-5 mt-8 pb-15 border-b  border-gray6 md:w-104'>
                    <input type="number" value="1" className=' w-32 h-16 border border-gray4 text-center '/>
                    <button className=' w-56 h-16 border rounded-2xl border-black font-poppins-regular text-xl'>Add To Cart</button>
                </div>
                
                <div className='flex text-gray4 font-poppins-regular mt-10 mb-16 gap-2'>
                    <div className='flex flex-col gap-4 w-20'>
                        <span>SKU</span> 
                        <span>Category</span>
                        <span>Tags</span>
                        <span>Share</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span>:&nbsp;&nbsp;&nbsp; SS001</span>
                        <span>:&nbsp;&nbsp;&nbsp; {product.category} </span>
                        <span>:&nbsp;&nbsp;&nbsp; {product.tags.join(', ')} </span>
                        <div className='flex'>
                            :&nbsp;&nbsp;&nbsp;  
                                <a href="https://www.facebook.com/" target="_blank">
                                    <button className=' w-5 h-5 rounded-full ml-1 mr-7'>
                                        <img src={FaceIcon} alt="Logo do Facebook" />
                                    </button>
                                </a> 
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <button className=' w-5 h-5 rounded-full mr-7'>
                                        <img src={Linkedin} alt="Logo do Linkedin"/>
                                    </button>
                                </a> 
                                <a href="https://twitter.com/" target="_blank">
                                    <button className=' w-5 h-5 rounded-full mr-7'>
                                        <img src={Twitter} alt="Logo do Twitter"/>
                                    </button>
                                </a> 
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductInfos