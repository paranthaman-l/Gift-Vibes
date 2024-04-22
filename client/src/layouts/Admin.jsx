import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useStates } from '../States';
import Navbar from '../components/admin/Navbar';
import SideBar from '../components/admin/SideBar';

const Admin = () => {
    const { GetUserDetails } = useStates();
    useEffect(() => {
        GetUserDetails();
    }, [])

    return (
        <>
            <div className='m-0 p-0 flex flex-row min-h-screen w-full font-grotesk'>
                <Toaster position='top-right' />
                <div className='w-full'>
                    <Navbar />
                    <div className='w-full flex items-start pt-20 px-20 my-10 gap-4'>
                        <SideBar />
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;