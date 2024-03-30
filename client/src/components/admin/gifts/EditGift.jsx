import Button from '../../shared/Button'
import logo from '../../../../public/logo.svg'
import { useEffect, useState } from 'react'
import AdminService from '../../../services/AdminService';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import ImageCompressor from "image-compressor.js";
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
    const [image, setImage] = useState();
    const handleImageChange = async (e) => {
      e.preventDefault();
      const selectedImage = e.target.files[0];
      if (selectedImage) {
        const compressedImage = await compressImage(selectedImage);
        const imageData = new FormData();
        imageData.append("file", compressedImage);
        imageData.append("upload_preset", "giftvibes");
        try {
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/dczv2ejcu/image/upload`,
            {
              method: "POST",
              body: imageData,
            }
          );
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          setImage(data.secure_url)
          setGift({ ...gift, image: data.secure_url })
          toast.custom((t) => (
            <div
              className={`bg-green text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                } duration-300 ease-in-out`}>
              <div className="flex items-center gap-2 text-white">
                <span>
                  <i className="fa-solid fa-circle-check"></i>
                </span>
                <div>
                  <span className="">Image Upload successfully !</span>
                </div>
              </div>
            </div>
          ));
        } catch (error) {
          // console.error("Error uploading image to Cloudinary:", error);
          toast.custom((t) => (
            <div
              className={`bg-[#ff5e5b] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                } duration-300 ease-in-out`}>
              <div className="flex items-center gap-2 text-white">
                <span>
                  <i className="fa-solid text-xl fa-circle-xmark"></i>
                </span>
                <div>
                  <span className="">
                    Error Upload Image
                  </span>
                </div>
              </div>
            </div>
          ));
        }
      }
    };
    const compressImage = async (image) => {
      return new Promise((resolve, reject) => {
        new ImageCompressor(image, {
          quality: 0.1,
          success(result) {
            resolve(result);
          },
          error(error) {
            reject(error);
          },
        });
      });
    };
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
                                <img className="h-28 w-28 object-cover rounded-full p-5" src={image ? image : logo} alt="Current profile photo" />
                            </div>
                            <label className="block">
                                <span className="sr-only ">Choose Gift photo</span>
                                <input onChange={handleImageChange} name='image' type="file" className="cursor-pointer block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lightGreen file:text-darkGreen hover:file:bg-opacity-60" />
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