import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/Button'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import AdminService from '../../services/AdminService';
import logo from '../../assets/logo.svg'
const Gifts = () => {
  const [gifts, setGifts] = useState();
  const navigate = useNavigate();
  const getGift = async () => {
    await AdminService.getGift().then((response) => {
      setGifts(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    getGift();
  }, [])
  const handleDelete = (gid) => {
    AdminService.deleteGift(gid).then((response) => {
      const filter = gifts.filter(gift=>gift.gid!=gid);
      setGifts(filter)
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className='px-10 w-3/4 h-[650px] overflow-y-scroll font-grotesk text-darkGreen'>
      <div className="flex justify-between items-center">
        <p className='text-4xl font-semibold tracking-wider text-textGray'>Gifts</p>
        <NavLink to={"/addGift"} className='text-xl cursor-pointer font-semibold tracking-wider text-textGray hover:underline'>Add Gift</NavLink>
      </div>
      <div className="flex flex-col my-10">
        {gifts?.map((gift) => {
          return (
            <div key={gift?.gid} className="shadow-md min-h-48 flex p-4 my-5 group">
              <img className='h-40 w-40 ' src={logo} alt="" />
              <div className="px-10 flex flex-col">
                <div className="">
                  <p className='text line-clamp-1 my-2 text-lg'>{gift.name}</p>
                  <p className='text line-clamp-2 text-darkGreen text-opacity-50 indent-12'>{gift.description}</p>
                </div>
                <div className="  duration-300 h-full flex items-center ">
                  <div className="flex">
                    <p className='font-semibold mr-5'>Price : ₹{gift?.price}</p>
                    <p className='mx-5'>Availability : {gift?.quantity}</p>
                    <p>Discount : {gift?.discount}%</p>
                  </div>
                  <div className="flex  opacity-0 group-hover:opacity-100 duration-300">
                    <p onClick={() => navigate("/editGift/" + gift?.gid)}>
                      <Button title={"Edit"} style={"w-20 bg-indigo mx-5"}></Button>
                    </p>
                    <button onClick={()=>handleDelete(gift?.gid)}>
                      <Button title={"Delete"} style={"w-20 bg-red"}></Button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
       
      </div>
    </div>
  )
}

export default Gifts