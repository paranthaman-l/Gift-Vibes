import TopBanner from '../../components/user/home/TopBanner'
import FeaturedProduct from '../../components/user/home/FeaturedProduct'
import BestSales from '../../components/user/home/BestSales'
import ToysAccessories from '../../components/user/home/Toys&Accessories'
import OurIdea from '../../components/user/home/OurIdea'

const Home = () => {

  return (
    <div className='font-grotesk w-full'>
      <TopBanner />
      <FeaturedProduct />
      <BestSales />
      <ToysAccessories />
      <OurIdea />
    </div>
  )
}

export default Home