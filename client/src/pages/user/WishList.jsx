import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import WishProduct from '../../components/user/WishProduct'

const WishList = () => {
    const datas = [
        {
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n15-1-460x460.webp",
            giftName: "Personalised Graduation Photo Keychains Or Necklaces Gift Accessories For Graduate Friend",
            rating: "5",
            price: "299",
            discount: "10",
        },
        {
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n17-1-460x460.webp",
            giftName: "Glass Song Plaque Custom Spotify Plaque Acrylic Music Plaque Night Light Personalized Gift",
            rating: "5",
            price: "200",
            discount: "10",
        },
        {
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n16-1.webp",
            giftName: "Personalized Photo Frame Valentine’s Day Gift The Best Is Yet To Come",
            rating: "5",
            price: "100",
            discount: "10",
        },
        {
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n11-1.webp",
            giftName: "Personalised Floral Cute Elephant Girl Blanket With Name Christmas Birthday Baby Shower Gift For Baby Kid Family",
            rating: "5",
            price: "399",
            discount: "10",
        },
    ]
    return (
        <div className='px-10 w-3/4 mt-5 h-[650px] overflow-y-scroll'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>Wishlist</p>
            <div className="w-full flex items-center justify-between p-3 mt-4 text-darkGreen bg-lightWhite rounded-md border border-indigo">
                <div className="flex items-center">
                    <p className='bg-indigo text-white text-xl mx-2 p-1 rounded-full'><MdErrorOutline /></p>
                    <p>No Wish Product has been made yet.</p>
                </div>
                <div className="flex">
                    <p className='uppercase border-b border-textGray text-textGray font-semibold text-sm cursor-pointer'>Browse Products</p>
                </div>
            </div>
            <div className="flex flex-col">
                {datas.map((product, i) => {
                    return (
                        <WishProduct product={product} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default WishList