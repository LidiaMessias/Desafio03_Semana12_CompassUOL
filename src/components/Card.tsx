import { Link } from 'react-router-dom'
import { Product } from '../types/product'
import LikeImg from '../assets/images/heart.png'
import ShareImg from '../assets/images/gridicons_share.png'
import CompImg from '../assets/images/griicons_compare.png'
import { useDispatch } from 'react-redux'
import { addToCart } from '../action/cartAction'

type CardProps = {
  product: Product;
}

const Card = ( { product }: CardProps) => {

    const offer = product.isInSale ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
    
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart(product));
    }

    return (
        <>
          <Link to={`/product/${product.id}`} className='relative group' >
            <div key={product.id} className='flex flex-col md:items-center mb-10'>
                <div className='flex flex-col justify-start md:max-w-72 relative'>
                    <img src={product.image} alt={product.title} className='w-full md:max-h-76' />
                    <div className='px-4 pt-4 bg-graylig'>
                        <h3 className='font-poppins-semibold text-2xl text-gray1 mt-2 mb-3'>{product.title}</h3>
                        <span className='font-poppins-medium text-graymed'>{product.subtitle}</span>
                        <div className='mb-8 mt-3'>
                            {product.isInSale ? (
                                <p>
                                    <span className='font-poppins-semibold text-xl text-gray1'>Rp {offer}</span>
                                    <span className='ml-14 font-poppins-regular text-gray0 line-through'>Rp {product.price}</span>
                                </p>
                            ) : (
                                <p className='font-poppins-semibold text-xl text-gray1'>Rp {product.price}</p>
                            )}
                        </div>
                    </div>
                    {(product.discount > 0) && (
                      <div className='absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-redlig text-white'>
                        -{product.discount}%
                      </div>
                    )}
                    {(product.new) && (
                      <div className={`absolute top-6 ${product.discount > 0 ? 'right-20' : 'right-6'}  w-12 h-12 rounded-full flex items-center justify-center bg-gray3 text-white`} >
                        New
                      </div>
                    )}
                    <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity'>
                        <div className='text-center'>

                              <button 
                                className='bg-white text-mostarda w-49 h-12 font-poppins-semibold text-center'
                                onClick={handleAddToCart}
                              >
                                Add to Cart
                              </button>
                                                         
                            <div className='flex gap-5 text-white mt-5'>
                                <div className='flex items-center '>
                                  <img src={ShareImg} alt="Share icon" className=' w-4 h-4' />
                                  <span className='font-poppins-semibold ml-1'>Share</span>
                                </div>
                                <div className='flex items-center'>
                                  <img src={CompImg} alt="Compare icon" className=' w-4 h-4' />
                                  <span className='font-poppins-semibold ml-1'>Compare</span>
                                </div>
                                <div className='flex items-center '>
                                  <img src={LikeImg} alt="Like icon" className=' w-4 h-4' />
                                  <span className='font-poppins-semibold ml-1'>Like</span>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </Link>
        </>
    )
}

export default Card  