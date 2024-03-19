import React from 'react'
import Header from '../../shared/Header'
import Product from '../Product.jsx'
import product1 from '../../../assets/products/product1.webp'
import product2 from '../../../assets/products/product2.webp'
import product3 from '../../../assets/products/product3.webp'
import product4 from '../../../assets/products/product4.webp'
import product5 from '../../../assets/products/product5.webp'
const FeaturedProduct = () => {
  const datas = [
    {
      giftName: "Personalised Floral Cute Elephant Girl Blanket With Name Christmas Birthday Baby Shower Gift For Baby Kid Family",
      giftImage: product1,
      rating: "4.5",
      price: "450",
      discount: "10",
    },
    {
      giftName: "Personalised Graduation Photo Keychains Or Necklaces Gift Accessories For Graduate Friend",
      giftImage: product2,
      rating: "4.3",
      price: "480",
      discount: "7",
    },
    
    {
      giftName: "Personalized Photo Frame Valentine’s Day Gift The Best Is Yet To Come",
      giftImage: product3,
      rating: "4.7",
      price: "390",
      discount: "22",
    },
    {
      giftName: "Mug Birthday Christmas Gift For Friend Family Pet Lover",
      giftImage: product4,
      rating: "4.8",
      price: "440",
      discount: "12",
    },
    {
      giftName: "Couple Celebration White Ceramic Mug Anniversary And Wedding Gifts",
      giftImage: product5,
      rating: "4.9",
      price: "200",
      discount: "60",
    },
  ]
  return (
    <div className=''>
      <Header title={"FeaturedProduct"} subTitle={"Get all amazing product here"} linkTitle={"More Product"} link={"/"} />
      <div className="grid snap-x grid-flow-col items-center w-[97%] overflow-x-scroll h-[575px] ml-10">
        {
          datas.map((data, i) => {
            return (
              <Product key={i} giftName={data.giftName} giftImage={data.giftImage} rating={data.rating} price={data.price} discount={data.discount} />
            )
          })
        }
      </div>
    </div>
  )
}

export default FeaturedProduct