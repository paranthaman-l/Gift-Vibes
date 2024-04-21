import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { CiStar } from "react-icons/ci";
const Compare = () => {
    const datas = [
        {
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n15-1-460x460.webp",
            giftName: "Personalised Graduation Photo Keychains Or Necklaces Gift Accessories For Graduate Friend",
            rating: "5",
            price: "299",
            discount: "10",
            reviews:"1k+"
        },
        {
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n17-1-460x460.webp",
            giftName: "Glass Song Plaque Custom Spotify Plaque Acrylic Music Plaque Night Light Personalized Gift",
            rating: "5",
            price: "200",
            discount: "10",
            reviews:"10k+"
        },
    ]
    return (
        <div className='px-10 w-3/4 mt-5 h-[650px] overflow-y-scroll'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>Compare</p>
            <div className="w-full flex items-center justify-between p-3 mt-4 text-darkGreen bg-lightWhite rounded-md border border-indigo">
                <div className="flex items-center">
                    <p className='bg-indigo text-white text-xl mx-2 p-1 rounded-full'><MdErrorOutline /></p>
                    <p>No product added to Compare yet.</p>
                </div>
                <div className="flex">
                    <p className='uppercase border-b border-textGray text-textGray font-semibold text-sm cursor-pointer'>Browse Products</p>
                </div>
            </div>
            <div className="flex mt-5">
                {datas?.map((data, i) => {
                    return (
                        <div className="w-80 p-2 shadow-lg mx-2 flex-col items-center flex justify-center" key={i}>
                            <img className='w-52 h-52 my-5' src={data.giftImage} alt="" />
                            <p className='w-full text-justify px-5 line-clamp-3'>{data.giftName}</p>
                            <p className='my-5 text-2xl font-semibold'>₹{data?.price}</p>
                            <p className='mb-5 text-lg flex items-center '>{data.rating}<CiStar className='text-yellow-500 text-xl font-bold'/> </p>
                            <p className='mb-5 text-lg flex items-center'>{data.reviews} reviews</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Compare