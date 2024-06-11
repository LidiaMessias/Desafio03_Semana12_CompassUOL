import Dining from '../assets/images/Dining.png'
import Living from '../assets/images/Image-living room.png'
import Bedroom from '../assets/images/Bedroom.png'

const HomeCategories = () => {
  return (
    <div className=' mx-32 my-15 text-center'>
        <h3 className=' font-poppins-bold text-3xl text-dark'>Browse The Range</h3>
        <p className=' font-poppins-regular text-xl text-meddark mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-5  mt-15'>
            <div className='flex flex-col text-center'>
                <img src={Dining} alt="Foto Mesa de Jantar" />
                <span className=' mt-8 font-poppins-semibold text-2xl'>Dining</span>
            </div>
            <div className='flex flex-col text-center'>
                <img src={Living} alt="Foto de uma sala de estar" />
                <span className=' mt-8 font-poppins-semibold text-2xl'>Living</span>
            </div>
            <div className='flex flex-col text-center'>
                <img src={Bedroom} alt="Foto de uma cana com almofadas" />
                <span className=' mt-8 font-poppins-semibold text-2xl'>Bedroom</span>
            </div>
        </div>

    </div>
  )
}

export default HomeCategories