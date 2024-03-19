import React from 'react'
import h2image2 from '../../../assets/h2-image-2.jpg'
import h2image3 from '../../../assets/h2-image-3.jpg'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
const ToysAccessories = () => {
    const datas = [
        {
            icon: <FaTruckFast/>,
            title: "Free shipping",
            subTitle:"Around 24 hours"
        },
        {
            icon: <AiOutlineExclamationCircle/>,
            title: "Special discounts",
            subTitle:"Easy orders"
        },
        {
            icon: <BsSend/>,
            title: "Buyers protection",
            subTitle:"We have"
        },
        {
            icon: <FiPhoneCall/>,
            title: "Customer service",
            subTitle:"Anytime"
        },
    ]
    return (
        <div className="flex flex-col">
            <div className='w-full flex relative items-center justify-start mr-20 pt-20 pb-20 font-grotesk'>
                <div className="m-24 flex justify-center flex-col items-center pr-10">
                    <img className='' src={h2image2} alt="" />
                    <p className='absolute text-9xl mb-72 ml-40 font-semibold -z-10 text-transparent outline-text'>2024</p>
                    <div className="absolute mt-96  flex flex-col mx-8 text-darkGreen top-0">
                        <p className=' text-5xl font-semibold tracking-wider py-2 mt-7'>T-shirt</p>
                        <p className='w-9/12 text-sm my-8'>We collaborate with smart and creative people to purchase good.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src={h2image3} alt="" />
                    <div className="absolute top-5 -right-72 text-darkGreen">
                        <p className='text-sm my-8 bg-white rounded-2xl p-1 border-darkGreen border w-7/12 text-center'>20% Offer On 1st Purchase</p>
                        <p className='text-5xl font-semibold tracking-wider py-2 mt-7'>Toys <br></br>
                            & Accessories</p>
                    </div>
                </div>
            </div>
            <div className="flex text-darkGreen border-t-2 justify-between pt-10 border-opacity-50 border-darkGreen mx-24 pb-16 p-10">
                {datas.map((data, i) => {
                    return (
                        <div key={i} className="flex  items-center group duration-200 cursor-pointer">
                            <p className='mx-3 text-3xl duration-200 group-hover:text-red'>{data.icon}</p>
                            <div className="flex flex-col">
                                <p className='text-sm duration-200 group-hover:text-red'>{data.subTitle}</p>
                                <p className='text-xl font-semibold'>{data.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToysAccessories