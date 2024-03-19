import React from 'react'
import Footer from '../components/user/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/user/SideBar'
import Navbar from '../components/user/Navbar'

const Profile = () => {
    return (
        <>
            <div className='m-0 p-0 flex flex-row min-h-screen w-full font-grotesk'>
                <div className='w-full'>
                    <Navbar />
                    <div className='w-full flex items-start pt-20 px-20 my-10 gap-4'>
                        <SideBar />
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Profile