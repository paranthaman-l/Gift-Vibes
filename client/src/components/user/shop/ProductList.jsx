import React, { useEffect, useState } from 'react'
import AuthService from '../../../services/AuthService';
import Product from '../Product';
import { IoMdGrid } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
const ProductList = () => {
    const [datas, setDatas] = useState();
    const getGift = async () => {
        await AuthService.getFeaturedGift().then((response) => {
            setDatas(response.data);

        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getGift();
    }, [])
    return (
        <div className='flex flex-col font-grotesk'>
            <div className="flex justify-between mt-16">
                <div className="">
                    <p className='font-semibold text-darkGreen  mx-4'>30+ Available Products</p>
                </div>
                <div className="flex">
                    <select className='mr-10' name="" id="">
                        <option value={"Default Sorting"}>Default Sorting</option>
                        <option value={"Sort by Popularity"}>Sort by Popularity</option>
                        <option value={"Sort by Average Rating"}>Sort by Average Rating</option>
                        <option value={"Sort by Latest"}>Sort by Latest</option>
                        <option value={"Sort by Price: Low to High"}>Sort by Price: Low to High</option>
                        <option value={"Sort by Price: High to Low"}>Sort by Price: High to Low</option>
                    </select>
                    <button className='px-4 py-1 border-2 border-darkGreen mx-1 flex items-center'>
                        <CiBoxList className='text-lg mx-1 -ml-1' />
                        List
                    </button>
                    <button className='flex  items-center px-4 py-1 border-2 border-darkGreen mx-1 bg-darkGreen text-white'>
                        <IoMdGrid className='text-lg mx-1 -ml-1' />
                        Grid
                    </button>
                </div>
            </div>
            <div className="grid grid-flow-row grid-cols-3 gap-10 my-10 items-center">
                {
                    datas?.map((data, i) => {
                        return (
                            <Product gid={data?.gid} key={i} giftName={data?.name} giftImage={data?.image} rating={data?.rating} price={data?.price} discount={data?.discount} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList