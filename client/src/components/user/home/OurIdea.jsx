import React from 'react'
import h2bgimage2 from '../../../assets/h2-bg-image-2.png'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import product1 from '../../../assets/products/product1.webp'
import product2 from '../../../assets/products/product2.webp'
import product3 from '../../../assets/products/product3.webp'
import product4 from '../../../assets/products/product4.webp'
import product5 from '../../../assets/products/product5.webp'
import Product from '../Product'
const OurIdea = () => {
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
        <div className='bg-darkGreen min-h-screen relative flex w-full items-center'>
            <div className="w-1/2 relative p-24 mt-10 selection:text-white">
                <div className="text-white">
                    <p className='underline tracking-tighter font-semibold '>GET INSPIRED</p>
                    <p className='text-7xl font-semibold my-10'>Our gift ideas</p>
                    <p className=' text-gray-400  selection:text-white leading-7'>Let the beauty of what you love be what you do. Lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages.</p>
                </div>
                <div className="text-white flex items-center mt-48">
                    <p className='h-[1px] w-7/12 bg-white bg-opacity-50 mr-10'></p>
                    <div className="flex justify-center items-center">
                        <button className='p-4 mx-3 border-opacity-70 duration-300 hover:bg-white text-white hover:text-black text-lg font-bold border border-white'><FiChevronLeft /></button>
                        <button className='p-4 border-opacity-70 duration-300 hover:bg-white text-white hover:text-black text-lg font-bold border border-white'><FiChevronRight /></button>
                    </div>
                </div>
            </div>
            <img className='absolute left-32 bottom-0' src={h2bgimage2} />
            <div className="w-1/2 flex">
                <div className="grid snap-x grid-flow-col items-center w-full overflow-x-scroll h-[575px] ml-10">
                    {
                        datas.map((data, i) => {
                            return (
                                <Product key={i} giftName={data.giftName} giftImage={data.giftImage} rating={data.rating} price={data.price} discount={data.discount} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurIdea