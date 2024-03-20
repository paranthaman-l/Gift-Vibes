import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import profile from "../../assets/products/product2.webp"
const Navbar = () => {
  const navigate = useNavigate()
  const navData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Personalized Gift",
      path: "/customized",
    },
    {
      title: "Sales off",
      path: "/salesOff",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ]
  return (
    <div className='z-10 px-10 fixed top-0 left-0 shadow-md w-full bg-white flex justify-between items-center font-grotesk'>
      <div className="flex w-5/12">
        {navData.map((link, i) => {
          return (
            <NavLink className={`font-semibold mx-5 text-base my-7 hover:text-red  ${link.path == location.pathname ? "text-red" : "text-gray-600"}`} key={i} to={link.path}>{link.title}</NavLink>
          )
        })}
      </div>
      <div className="flex justify-between items-center w-7/12 px-10 ">
        <div className="flex ">
          <NavLink to={"/"}><img className='h-10 object-contain mx-5 ' src={logo} alt="" /></NavLink>
        </div>
        <div className="w-2/6 text-3xl flex justify-evenly items-center mr-10">
          <div className="">
            <CiSearch className='hover:text-red duration-200 cursor-pointer' />
          </div>
          <div className="">
            <CiHeart className='hover:text-red duration-200 cursor-pointer'  />
          </div>
          <div className="">
            <HiOutlineShoppingBag className='hover:text-red text-2xl duration-200 cursor-pointer'  />
          </div>
          <div className="">
            <img className='h-10 w-10 rounded-full border cursor-pointer' onClick={()=>navigate("/dashboard")} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="" />
            {/* <BsPerson className='hover:text-red duration-200 cursor-pointer'  /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar