import Foto36 from '../assets/images/Rectangle 36.png'
import Foto37 from '../assets/images/Rectangle 37.png'
import Foto38 from '../assets/images/Rectangle 38.png'
import Foto39 from '../assets/images/Rectangle 39.png'
import Foto40 from '../assets/images/Rectangle 40.png'
import Foto41 from '../assets/images/Rectangle 41.png'
import Foto43 from '../assets/images/Rectangle 43.png'
import Foto44 from '../assets/images/Rectangle 44.png'
import Foto45 from '../assets/images/Rectangle 45.png'


const Furniture = () => {
  return (
    <div className='w-full h-103 my-18 text-center relative'>
        <span className=' font-poppins-semibold text-xl text-gray2'>Share your setup with</span>
        <h3 className=' font-poppins-bold text-4.5xl text-gray1'>#FuniroFurniture</h3>
        <img src={Foto36} alt="Estante com prateleiras" className=' absolute left-0 top-14' />
        <img src={Foto38} alt="Mesa com um notebook" className=' absolute left-28 top-32'/>
        <img src={Foto37} alt="Cadeira estilo retrô" className=' absolute left-0 bottom-0' />
        <img src={Foto39} alt="Duas mesinhas de canto" className='absolute bottom-20  left-56' />
        <img src={Foto40} alt="Sala de jantar" className='absolute bottom-44 right-104 ' />
        <img src={Foto41} alt="Quadro de uma sala de estar" className='absolute bottom-6 right-98' />
        <img src={Foto43} alt="Quarto de casal" className=' absolute bottom-72 right-72' />
        <img src={Foto44} alt="Parede de cozinha" className='absolute bottom-16 right-28' />
        <img src={Foto45} alt="Sala de jantar" className=' absolute right-0 top-16' />
    </div>
  )
}

export default Furniture