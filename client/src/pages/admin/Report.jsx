import React from 'react'
import { MdErrorOutline } from 'react-icons/md'

const Report = () => {
  return (
    <div className='px-10 w-3/4 mt-5'>
      <p className='text-4xl font-semibold tracking-wider text-textGray'>Reports</p>
      <div className="w-full flex items-center justify-between p-3 mt-4 text-darkGreen bg-lightWhite rounded-md border border-indigo">
        <div className="flex items-center">
          <p className='bg-indigo text-white text-xl mx-2 p-1 rounded-full'><MdErrorOutline /></p>
          <p>No reports has been made yet.</p>
        </div>
      </div>
    </div>
  )
}

export default Report