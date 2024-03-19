import React from 'react'
import Button from '../../components/shared/Button'
import { NavLink } from 'react-router-dom'

const Gifts = () => {

  return (
    <div className='px-10 w-3/4 h-[650px] overflow-y-scroll'>
      <div className="flex justify-between items-center">
        <p className='text-4xl font-semibold tracking-wider text-textGray'>Gifts</p>
        <NavLink to={"/addGift"} className='text-xl cursor-pointer font-semibold tracking-wider text-textGray hover:underline'>Add Gift</NavLink>
      </div>
      <div className="">

      </div>
    </div>
  )
}

export default Gifts