import React from 'react'
import Button from '../../components/shared/Button'

const AccountDetails = () => {
    return (
        <div className='px-10 w-3/4 mt-5  h-[650px] overflow-y-scroll overflow-x-hidden'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>Account Details</p>
            <div className="flex justify-start relative items-center w-full mx-10">
                <form className='font-grotesk w-full max-xl:w-full'>
                    <div className="flex items-center mt-5">
                        <div className="shrink-0 mx-3">
                            <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                        </div>
                        <label className="block">
                            <span className="sr-only ">Choose profile photo</span>
                            <input type="file" className="cursor-pointer block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lightGreen file:text-darkGreen hover:file:bg-opacity-60"/>
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
                            <input id='displayName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Display name...' />
                            <p className='text-sm text-darkGreen'>This will be how your name will be displayed in the account section and in reviews
                            </p>
                        </div>
                        <div className="flex my-6 flex-col">
                            <label className='my-1' htmlFor="email">Email <span className='text-red'>*</span></label>
                            <input id='email' type="email" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Email address...' />
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