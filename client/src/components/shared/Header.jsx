import React from 'react'

const Header = ({title,subTitle,linkTitle,link}) => {
  return (
    <div className='flex w-full justify-center items-center py-14'>
        <p className='text-3xl text-darkGreen font-semibold'>{title}</p>
        <span className='h-[1.6px] w-5/12 bg-darkGreen mx-10'></span>
        <p className=' text-opacity-50  mx-10'>{subTitle}</p>
        <p className='font-semibold hover:underline cursor-pointer'>{linkTitle}</p>
    </div>
  )
}

export default Header