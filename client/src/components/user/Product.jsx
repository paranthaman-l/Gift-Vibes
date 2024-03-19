import React from 'react'
import product from '../../assets/products/product3.webp'
import { GoScreenFull } from "react-icons/go";
import { Tooltip } from '@material-tailwind/react';
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { TbBasket } from "react-icons/tb";
const Product = ({
  giftName,
  giftImage,
  rating,
  price,
  discount
}) => {
  return (
    <div className='h-[477px] snap-center w-[300px] duration-200 relative bg-white shadow mx-5 group flex flex-col text-darkGreen'>
      <div className="p-8">
        <div className="flex justify-between items-center">
          <p className='text-gray-400  uppercase'>Gift</p>
          <p className='text-green bg-lightGreen rounded-3xl text-sm py-1 px-2'>-{discount}%</p>
          <div className="opacity-0 flex duration-500 justify-between items-center absolute bg-white p-2 right-5 group-hover:opacity-100">
            <Tooltip
              content="Add to Wishlist"
              className="duration-100 bg-black font-grotesk text-xs"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <p className='cursor-pointer text-gray-400 duration-200 mx-1 text-2xl hover:text-darkGreen'><CiHeart /></p>
            </Tooltip>
            <Tooltip
              content="Quick View"
              className="duration-100 bg-black font-grotesk text-xs"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <p className='cursor-pointer text-gray-400 duration-200 mx-1 text-xl hover:text-darkGreen'><GoScreenFull /></p>
            </Tooltip>
            <Tooltip
              content="Compare"
              className="duration-100 bg-black font-grotesk text-xs"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <p className='cursor-pointer text-gray-400 duration-200 mx-1 text-xl hover:text-darkGreen'><IoIosGitCompare /></p>
            </Tooltip>
          </div>
        </div>
        <div className="mt-4">
          <img src={giftImage} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="mt-4">
            <p>{rating}</p>
            <p className='line-clamp-2 hover:text-red duration-200 cursor-pointer'>{giftName}</p>
          </div>
          <div className="flex items-center ">
            <p className='text-2xl font-semibold mt-3 mr-2'>₹{price}</p>
            {/* <s className='text-2xl  mt-3 text-[#a3afaf]'>₹500</s> */}
          </div>
        </div>
      </div>
      <button className='uppercase group-hover:-bottom-10 absolute opacity-0 group-hover:opacity-100 duration-300 bottom-0  bg-darkGreen items-center text-white w-full p-4 flex justify-between left-0'>
        <p className='font-semibold'>Add to Cart</p>
        <p className='text-2xl'><TbBasket /></p>
      </button>
    </div>
  )
}

export default Product;