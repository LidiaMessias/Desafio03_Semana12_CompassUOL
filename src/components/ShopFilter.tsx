import Filter from '../assets/images/system-uicons_filtering.png'
import Grid from '../assets/images/grid-big.png'
import List from '../assets/images/view-list.png'

const ShopFilter = () => {
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
                    <span>Showing 1-16 of 32 results</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <span className=' font-poppins-regular text-xl'>Show</span>
                <input type="text" readOnly value="16" className=' text-center w-14 h-14 border-0 font-poppins-regular text-gray4 text-xl' />
                <span>Sort by</span>
                <input type="text" value="Default" className=' p-5 w-48 h-14 border-0  font-poppins-regular text-gray4 text-xl'  />
            </div>
        </div>

    </>
  )
}

export default ShopFilter