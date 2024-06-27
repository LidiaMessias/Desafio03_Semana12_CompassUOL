import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Product } from '../types/product';
import axios from 'axios';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../action/cartAction';

import RightArrow from '../assets/images/dashicons_arrow-down-alt2.png'
import Star from '../assets/images/Star.png'
import halfStar from '../assets/images/halfStar.png'
import ProductImg01 from '../assets/images/Cloud sofa three seater + ottoman_1 1.png'
import ProductImg02 from '../assets/images/Cloud sofa three seater + ottoman_2 1.png'
import ProductImg03 from '../assets/images/Asgaard sofa 3.png'
import FaceIcon from '../assets/images/akar-icons_facebook-fill.png'
import Twitter from '../assets/images/Twitter1.png'
import Linkedin from '../assets/images/akar-icons_linkedin-box-fill.png'
//import { useSelector } from 'react-redux';
//import { RootState } from '../reducers/rootReducer';


const ProductInfos = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null); 
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedInfo, setSelectedInfo] = useState<'description' | 'addInfo'>('description');
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();
    //const navigate = useNavigate();
    //const cartItems = useSelector((state: RootState) => state.cart.items);
    //console.log(cartItems)


    const images = [ProductImg03, ProductImg01, ProductImg02, ProductImg03];
    const starImg = Array(4).fill(Star)

    useEffect(() => {
        
        const getProduct = async () => {
            try {
                const response = await axios.get<{products: Product[] }>(`https://run.mocky.io/v3/56248314-87db-4c19-b4ad-2982819a4352/${id}`);
                const products = response.data.products;         
                const singleProduct = products.find(product => product.id === parseInt(id ?? '', 10));

                if (singleProduct) {
                    setProduct(singleProduct);
                    setSelectedImage(images[0]);

                    const similarProductsResp = await axios.get<{ products: Product[] }>('https://run.mocky.io/v3/56248314-87db-4c19-b4ad-2982819a4352');
                    console.log(similarProductsResp);
                    const similarProducts = similarProductsResp.data.products.filter((prod) => {
                        return prod.id !== singleProduct.id && prod.tags.some((tag) => singleProduct.tags.includes(tag))
                    });
                    const qtProducts = similarProducts.slice(0,4);
                    setRelatedProducts(qtProducts);
                    
                } else {
                setError("Product not found!");
                }
                
            } catch (error) {
                setError("Error on loading product!")
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

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handleInfo = (field: 'description' | 'addInfo') => {
        setSelectedInfo(field);
    };

    

    const handleAddToCart = () => {
        const finalPrice = product.isInSale ? parseFloat((product.price * (1 - product.discount / 100)).toFixed(2)) : product.price;
        const cartItem = {
            ...product,
            finalPrice,
        };
        //console.log(cartItem)
        dispatch(addToCart(cartItem, quantity));
        //navigate('/cart')
    };

    

    const offer = product.isInSale ? parseFloat((product.price * (1 - product.discount / 100)).toFixed(2)) : product.price;

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
            <div className='flex flex-col justify-start ml-28 lg:w-104'>
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
                        {starImg.map((img, index) => (
                            <img key={index} src={img} alt='Star icon' />
                        ))}
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
                        <button key={index} className={`w-8 h-8 rounded-full mt-3 ${color.toLowerCase() === '#ffffff' ? 'border-2 border-black' : ''}`} 
                        style={{ backgroundColor: color}}></button>
                    ))}
                </div>
                <div className='flex  justify-start gap-5 mt-8 pb-15 '>
                    <div className=' flex items-center justify-between w-32 h-16 border px-3 border-gray4 rounded-xl '>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                        min="1"
                        className='w-16 text-center hide-arrow'
                        style={{ appearance: 'textfield' }}
                        />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button 
                        className=' w-56 h-16 border rounded-2xl border-black font-poppins-regular text-xl'
                        onClick={handleAddToCart}
                    >Add To Cart</button>
                </div>
                
                <div className='flex text-gray4 font-poppins-regular pt-12 mb-12 gap-2 border-t border-gray6 md:w-104'>
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
        <div className='flex flex-col justify-center w-full border-t-2 border-b-2 border-t-gray6'>
            <div className='flex justify-center gap-32 pt-12'>
                <span className={`cursor-pointer  ${selectedInfo === 'description' ? 'font-poppins-medium text-2xl text-black' : 'font-poppins-regular text-2xl text-center text-gray4 '}`}
                    onClick={() => handleInfo('description')}>
                    Description
                </span> 
                <span className={`cursor-pointer  ${selectedInfo === 'addInfo' ? 'font-poppins-medium text-2xl text-black' : 'font-poppins-regular text-2xl text-center text-gray4'} `}
                    onClick={() => handleInfo('addInfo')}>
                    Additional Information
                </span>
            </div>
            <div className=' mx-52 my-9 font-poppins-regular text-gray4'>
                {selectedInfo === 'description' && <p className=' text-center'>{product.description}</p> }
                {selectedInfo === 'addInfo' && <p>{product.addInfo} </p> }
            </div>
            <div className='flex flex-col md:flex md:flex-row justify-center gap-7 pb-16'>
                <div className=' bg-bege max-w-104 rounded-xl'>
                    <img src={ProductImg02} alt={product.title} />
                </div>
                <div className='bg-bege max-w-104 rounded-xl'>
                    <img src={ProductImg01} alt={product.title} />
                </div>      
            </div>
        </div>
                   
        <div className=' pt-14 pb-20 mx-24 flex flex-col items-center'>
            <h3 className=' font-poppins-medium text-4xl text-center'>Related Products</h3>
            {relatedProducts.length > 0 && ( 
                <div className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 w-full pt-16 mb-2'>
                    {relatedProducts.map((relProduct) => (
                        <Card key={relProduct.id} product={relProduct} />
                    ))}   
                </div>
            )}
            
            <Link to={'/shop'}>         
                <button className=' h-12 w-60 bg-white text-mostarda font-poppins-semibold border-2 border-mostarda hover:bg-mostarda hover:text-white transition-all hover:scale-105'>Show More</button>  
            </Link>
        </div>
             
    </>
  )
}

export default ProductInfos