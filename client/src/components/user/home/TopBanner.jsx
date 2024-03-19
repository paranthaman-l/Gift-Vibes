import React from 'react'
import bg_banner1 from '../../../assets/banner-img1.jpg'
import bg_banner2 from '../../../assets/banner-img2.jpg'
import giftCard from '../../../assets/giftcard.png'
import gift from '../../../assets/gift.png'
import cloths from '../../../assets/cloths.jpeg'
import toys from '../../../assets/toys.png'
import Button from '../../shared/Button'
const TopBanner = () => {
    const datas = [
        {
            image: giftCard,
            title: "Gift Card"
        },
        {
            image: toys,
            title: "Toys"
        },
        {
            image: cloths,
            title: "Cloths"
        },
        {
            image: gift,
            title: "Gift"
        },
    ]
    return (
        <div className='bg-lightYellow py-20'>
            <div className="flex justify-between relative m-24">
                <div className="">
                    <img className='rounded-sm h-[200px] w-[200px] ' src={bg_banner1} alt="" />
                </div>
                <div className='absolute text-darkGreen w-full flex-col flex justify-start items-center'>
                    <p className='w-3/4 text-7xl mr-52 mt-20 flex items-center flex-col font-semibold '>
                        <p>Joyful personalized</p>
                        <p>gifts for everyone</p>
                    </p>
                    <div className="flex my-10 flex-col items-center justify-center mr-72 w-3/4 mx-auto">
                        <p className='text-2xl animate-pulse'>Start From <span className='font-semibold'>₹100</span></p>
                        <p className='flex my-10'>
                            <Button title={"Our Products"} style={"px-6 py-3 rounded-sm text-base"} />
                        </p>
                    </div>
                </div>
                <div className="">
                    <img src={bg_banner2} alt="" className='border-[10px] h-[440px] w-[440px] rounded-sm border-white  shadow-xl' />
                </div>
            </div>
            <div className="flex justify-evenly">
                {datas.map((data, i) => {
                    return (
                        <div key={i} className="flex flex-col  items-center">
                            <img  className='h-28 w-28 my-4' src={data.image} alt="" />
                            <p className='text-darkGreen font-semibold  text-xl'>{data.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TopBanner