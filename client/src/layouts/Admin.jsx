import { Outlet } from 'react-router-dom';
import Navbar from '../components/admin/Navbar';
import SideBar from '../components/admin/SideBar';
import { useStates } from '../States';
import { useEffect } from 'react';

const Admin = () => {
    const { GetUserDetails } = useStates();
    useEffect(() => {
        GetUserDetails();
    }, [])

    return (
        <>
            <div className='m-0 p-0 flex flex-row min-h-screen w-full font-grotesk'>
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