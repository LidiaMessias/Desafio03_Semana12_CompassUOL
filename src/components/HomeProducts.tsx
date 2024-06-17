import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from './Card'
import { Product } from '../types/product'

const HomeProducts = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const getProducts = async () => {
          try {
              const response = await axios.get<{ products: Product[] }>('https://run.mocky.io/v3/72e0adf3-a205-42af-b1e5-4dbd2d6cad03');
              const allProducts = response.data.products;

              const aleat = allProducts.sort(() => 0.5 - Math.random());
              const selProducts = aleat.slice(0, 8);
              setProducts(selProducts);

          } catch (error) {
              setError("Error loading products!")
              console.log(error);
          }
        };

        getProducts();
    }, []);

    if (error) {
      return null;
    }  


    return (
        <div className=' mx-24 my-15 flex flex-col items-center'>
          <h3 className='font-poppins-bold text-4.5xl text-center'>Our Products</h3>
          
          <div className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 w-full pt-8'>
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
          </div> 

          <Link to={'/shop'}>         
            <button className=' h-12 w-60 bg-white text-mostarda font-poppins-semibold border-2 border-mostarda hover:bg-mostarda hover:text-white transition-all hover:scale-105'>Show More</button>  
          </Link>
        </div>
    )
}

export default HomeProducts