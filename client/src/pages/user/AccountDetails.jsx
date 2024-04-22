import React, { useState } from 'react'
import Button from '../../components/shared/Button'
import { useStates } from '../../States'
import ImageCompressor from 'image-compressor.js';
import toast from 'react-hot-toast';
import UserService from '../../services/UserService';

const AccountDetails = () => {
    const { user, setUser } = useStates();
    const [profile, setProfile] = useState();
    const handleProfileChange = async (e) => {
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
                setProfile(data.secure_url)
                setUser({ ...user, profile: data.secure_url })
                await UserService.updateProfile(localStorage.getItem('uid'), data.secure_url).then((response) => {
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
                                    <span className="">Image Updated successfully !</span>
                                </div>
                            </div>
                        </div>
                    ));
                }).catch((err) => {
                    console.log(err);
                })
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
                                    Error Updating Image
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
        <div className='px-10 w-3/4 mt-5  h-[650px] overflow-y-scroll overflow-x-hidden'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>Account Details</p>
            <div className="flex justify-start relative items-center w-full mx-10">
                <form className='font-grotesk w-full max-xl:w-full'>
                    <div className="flex items-center mt-5">
                        <div className="shrink-0 mx-3">
                            <img className="h-16 w-16 object-cover rounded-full"
                                src={`${profile ? profile : user?.profile ? user?.profile : "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"}`}
                                alt="Current profile photo" />
                        </div>
                        <label className="block">
                            <span className="sr-only ">Choose profile photo</span>
                            <input type="file" onChange={handleProfileChange} className="cursor-pointer block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lightGreen file:text-darkGreen hover:file:bg-opacity-60" />
                        </label>
                    </div>
                    <div className="text-darkGreen">
                        <div className="flex my-6 items-center justify-between">
                            <div className="flex flex-col w-1/2 mr-5 mt-5">
                                <label className='my-1' htmlFor="firstName">First name <span className='text-red'>*</span></label>
                                <input id='firstName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your First name...' />
                            </div>
                            <div className="flex w-1/2 flex-col ml-5 mt-5">
                                <label className='my-1' htmlFor="lastName">Last name <span className='text-red'>*</span></label>
                                <input id='lastName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Last name...' />
                            </div>
                        </div>
                        <div className="flex my-6 flex-col ">
                            <label className='my-1' htmlFor="displayName">Display name <span className='text-red'>*</span></label>
                            <input id='displayName' type="text" value={user?.user?.name} className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Display name...' />
                            <p className='text-sm text-darkGreen'>This will be how your name will be displayed in the account section and in reviews
                            </p>
                        </div>
                        <div className="flex my-6 flex-col">
                            <label className='my-1' htmlFor="email">Email <span className='text-red'>*</span></label>
                            <input id='email' type="email" value={user?.user?.email} className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Email address...' />
                        </div>
                        <div className="border relative border-darkGreen mt-14 border-opacity-30 my-6 p-5">
                            <p className='absolute -top-3 bg-white px-2 '>Password change</p>
                            <div className="flex my-6 flex-col">
                                <label className='my-1' htmlFor="currentPassword">Current password (leave blank to leave unchanged)
                                    <span className='text-red'>*</span></label>
                                <input id='currentPassword' type="password" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Current Password...' />
                            </div>
                            <div className="flex my-6 flex-col">
                                <label className='my-1' htmlFor="newPassword">New password (leave blank to leave unchanged)
                                    <span className='text-red'>*</span></label>
                                <input id='newPassword' type="password" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your New Password...' />
                            </div>
                            <div className="flex my-6 flex-col">
                                <label className='my-1' htmlFor="confirmNewPassword">Confirm new password
                                    <span className='text-red'>*</span></label>
                                <input id='confirmNewPassword' type="password" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Confirm New Password...' />
                            </div>
                        </div>
                        <div className="">
                            <p><Button title={"Save Changes"} style={"w-1/4 py-4"} /></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AccountDetails