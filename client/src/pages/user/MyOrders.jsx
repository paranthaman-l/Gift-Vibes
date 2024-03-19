import React from 'react'
import { MdErrorOutline } from 'react-icons/md'

const MyOrders = () => {
    return (
        <div className='px-10 w-3/4 mt-5'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>My Orders</p>
            <div className="w-full flex items-center justify-between p-3 mt-4 text-darkGreen bg-lightWhite rounded-md border border-indigo">
                <div className="flex items-center">
                    <p className='bg-indigo text-white text-xl mx-2 p-1 rounded-full'><MdErrorOutline /></p>
                    <p>No order has been made yet.</p>
                </div>
                <div className="flex">
                    <p className='uppercase border-b border-textGray text-textGray font-semibold text-sm cursor-pointer'>Browse Products</p>
                </div>
            </div>
        </div>
    )
}

export default MyOrders