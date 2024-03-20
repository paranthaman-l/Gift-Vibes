import React from 'react'
import { MdErrorOutline } from 'react-icons/md'

const Error = ({text}) => {
    return (
        <div className="w-full flex items-center justify-between p-3 mt-4 text-darkGreen bg-[#fff0f0] rounded-md border border-[#cc1818">
            <div className="flex items-center">
                <p className='bg-[#cc1818] text-white text-xl mx-2 p-1 rounded-full'><MdErrorOutline /></p>
                <p>{text}</p>
            </div>
            <div className="flex">
                <p className='uppercase border-b border-textGray text-textGray font-semibold text-sm cursor-pointer'>Browse Products</p>
            </div>
        </div>
    )
}

export default Error