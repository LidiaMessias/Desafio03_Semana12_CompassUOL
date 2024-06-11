import React from 'react'
import { Link } from 'react-router-dom'

const HomeProducts = () => {
  return (
    <div className='mx-24 my-15 text-center'>
        <h3 className=' font-poppins-bold text-4.5xl'>Our Products</h3>
        <div>

        </div>
        <Link to={'/shop'}>
            <button className=' h-12 w-60 bg-white text-mostarda font-poppins-semibold border-2 border-mostarda hover:bg-mostarda hover:text-white transition-all hover:scale-105'>Show More</button>
        </Link>
    </div>
  )
}

export default HomeProducts