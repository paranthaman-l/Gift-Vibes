import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import WishProduct from '../../components/user/WishProduct'

const WishList = () => {
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
            <div className="">
                <WishProduct />
                <WishProduct />
                <WishProduct />
                <WishProduct />
                <WishProduct />
            </div>
        </div>
    )
}

export default WishList