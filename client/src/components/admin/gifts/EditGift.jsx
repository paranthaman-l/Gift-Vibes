import Button from '../../shared/Button'
import logo from '../../../../public/logo.svg'
import { useEffect, useState } from 'react'
import AdminService from '../../../services/AdminService';
import { useNavigate, useParams } from 'react-router-dom';

const EditGift = () => {
    const [gift, setGift] = useState();
    const navigate = useNavigate();
    const {gid} = useParams();
    useEffect(() => {
        AdminService.getGiftById(gid).then((response) => {
            setGift(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGift({ ...gift, [name]: value });
    }
    const editGift = async (e) => {
        e.preventDefault();
        await AdminService.editGift(gift).then((response) => {
            navigate("/gifts")
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className='px-10 w-3/4 h-[650px] overflow-y-scroll'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>Edit Gift</p>
            <div className="flex justify-start relative items-center w-full mx-10">
                <form className='font-grotesk w-full max-xl:w-full' onSubmit={editGift}>
                    <div className="text-darkGreen">
                        <div className="flex my-3 items-center  justify-between">
                            <div className="flex flex-col w-1/2 mr-5 mt-5">
                                <label className='my-1' htmlFor="name">Gift Name<span className='text-red'>*</span></label>
                                <input value={gift?.name} onChange={handleChange} id='name' name='name' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Gift Name...' />
                            </div>
                            <div className="flex w-1/2 flex-col ml-5 mt-5">
                                <label className='my-1' htmlFor="description">Gift Description <span className='text-red'>*</span></label>
                                <input value={gift?.description} onChange={handleChange} id='description' name='description' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Gift Description...' />
                            </div>
                        </div>
                        <div className="flex my-3 items-center  justify-between">
                            <div className="flex flex-col w-1/2 mr-5 mt-5">
                                <label className='my-1' htmlFor="price">Price<span className='text-red'>*</span></label>
                                <input value={gift?.price} onChange={handleChange} id='price' name='price' type="number" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Price in INR...' />
                            </div>
                            <div className="flex w-1/2 flex-col ml-5 mt-5">
                                <label className='my-1' htmlFor="discount">Discount <span className='text-red'>*</span></label>
                                <input value={gift?.discount} onChange={handleChange} id='discount' name='discount' type="number" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Discount...' />
                            </div>
                        </div>
                        <div className="flex items-center my-5">
                            <div className="shrink-0 mx-3">
                                <img className="h-28 w-28 object-cover rounded-full p-5" src={logo} alt="Current profile photo" />
                            </div>
                            <label className="block">
                                <span className="sr-only ">Choose Gift photo</span>
                                <input onChange={handleChange} name='image' type="file" className="cursor-pointer block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lightGreen file:text-darkGreen hover:file:bg-opacity-60" />
                            </label>
                        </div>
                        <div className="flex my-3 items-center justify-between">
                            <div className="w-1/2 mr-5">
                                <label className="block">
                                    <p className="">Choose Themes <span className='text-red'>*</span></p>
                                    <select name="" className='outline-none w-full border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' id="">
                                        <option id='' type="text" value={"Vintage Theme"} className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' >Vintage Theme</option>
                                        <option id='' type="text" value={"Wall Frame Theme"} className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' >Wall Frame Theme</option>
                                        <option id='' type="text" value={"Sunset PhotoGraphy"} className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' >Sunset PhotoGraphy</option>
                                    </select>
                                </label>
                            </div>
                            <div className="flex flex-col w-1/2 ml-5 ">
                                <label className='' htmlFor="quantity">Available<span className='text-red'>*</span></label>
                                <input value={gift?.quantity} onChange={handleChange} id='quantity' name='quantity' type="number" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Available Quantity...' />
                            </div>
                        </div>

                        <div className="">
                            <button type='submit' className='w-full flex '><Button title={"Update Gift"} style={"w-1/4 py-4"} /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditGift