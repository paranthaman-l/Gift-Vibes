import { Rating, Slider } from '@material-tailwind/react';
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const FilterBar = () => {
  const datas = [
    {
      title: "Accessories",
      count: 10,
    }, {
      "title": "Card",
      "count": 9
    },
    {
      "title": "Gift",
      "count": 10
    },
    {
      "title": "PC",
      "count": 7
    },
    {
      "title": "Table Fan",
      "count": 13
    },
    {
      "title": "Toys",
      "count": 11
    },
    {
      "title": "Uncategorized",
      "count": 12
    }
  ]
  return (
    <div className='flex flex-col mt-10'>
      <div className="mt-5">
        <p className='flex items-center justify-between text-lg font-semibold my-5'>Search Here <FaPlus className='mx-20 cursor-pointer' /> </p>
        <label htmlFor="" className='flex items-center'>
          <input type="text" placeholder='Search Product...' className='bg-gray-300 p-2 outline-none text-darkGreen bg-opacity-50 rounded-l-md text-lg' />
          <p className='h-11 w-11 bg-darkGreen flex justify-center items-center'>
            <IoSearch className='text-white text-xl' />
          </p>
        </label>
      </div>
      <div className="mt-5">
        <p className='flex items-center justify-between text-lg font-semibold my-5'>Price Range <FaPlus className='mx-20 cursor-pointer' /> </p>
        <div className="absolute mt-5 mx-10">
          <Slider className='absolute' value={80} />
          <Slider className='absolute' value={1} min={0} max={100} />
          <div className="mt-5 flex items-center justify-between w-52 font-semibold">
            <p className=''>₹100</p>
            <p className=''>₹10000</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p className='flex items-center justify-between text-lg font-semibold my-5'>Categories <FaPlus className='mx-20 cursor-pointer' /> </p>
        <div className="">
          {
            datas.map((data, i) => {
              return (
                <div key={i} className="flex text-sm ml-5 justify-between items-center">
                  <p >{data.title}</p>
                  <p className='mr-24'>({data.count})</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="mt-5">
        <p className='flex items-center justify-between text-lg font-semibold my-5'>Filter By Rating <FaPlus className='mx-20 cursor-pointer' /> </p>
        <div className="flex flex-col">
          <p className='flex items-start'><Rating value={5} readonly className='mx-10'/> (20)</p>
          <p className='flex items-start'><Rating value={4} readonly  className='mx-10'/> (10)</p>
          <p className='flex items-start'><Rating value={3} readonly  className='mx-10'/> (18)</p>
          <p className='flex items-start'><Rating value={2} readonly  className='mx-10'/> (12)</p>
          <p className='flex items-start'><Rating value={1} readonly  className='mx-10'/> (4)</p>
        </div>
      </div>
    </div>
  )
}

export default FilterBar