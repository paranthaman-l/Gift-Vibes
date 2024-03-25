import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/user/Navbar';
import SideBar from '../components/user/SideBar';
import Footer from '../components/user/Footer';
import { useStates } from '../States';

const User = () => {
    const { GetUserDetails } = useStates();
    useEffect(() => {
        GetUserDetails();
    }, [])
    return (
        <>
            <div className='m-0 p-0 flex flex-row min-h-screen w-full'>
                {/* <SideBar /> */}
                <div className='w-full'>
                    <Navbar />
                    <div className='w-full flex flex-col p-0 gap-4'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default User;