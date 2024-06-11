import Furniture from '../components/Furniture'
import HomeBanner from '../components/HomeBanner'
import HomeCategories from '../components/HomeCategories'
import HomeProducts from '../components/HomeProducts'
import Inspirations from '../components/Inspirations'

const HomePage = () => {
  return (
    <>
        <HomeBanner/>
        <HomeCategories/>
        <HomeProducts/>
        <Inspirations/>
        <Furniture/>
    </>
  )
}

export default HomePage