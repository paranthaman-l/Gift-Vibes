import React from 'react'
import Button from '../shared/Button'
import { IoCloseOutline } from "react-icons/io5";
const WishProduct = () => {
    return (
        <div className='flex group items-center h-24 w-full justify-between border-[1.5px] border-darkGreen border-opacity-30 my-1 p-2'>
            <div className="flex items-center h-full">
                <p className='px-1 hover:text-red cursor-pointer text-xl mx-2 flex justify-center items-center opacity-0 group-hover:opacity-100 duration-500'><IoCloseOutline /></p>
                <img className='h-20 w-20 mx-2' src="https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n10-1-408x408.webp" alt="" />
                <div className="mx-5">
                    <p className='text-darkGreen  font-semibold text-lg line-clamp-1 hover:text-red '>Bachelor Cap Graduation Name Necklace Girl Gifts</p>
                    <div className="flex items-center ">
                        <p className='font-semibold mr-2'>₹390</p>
                        <s className=' text-[#a3afaf]'>₹500</s>
                    </div>
                    <p>June 2,2023</p>
                </div>
            </div>
            <Button title={"Add to cart"} />
        </div>
    )
}

export default WishProduct