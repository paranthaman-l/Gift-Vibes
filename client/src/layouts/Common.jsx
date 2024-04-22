import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const Common = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Toaster position='top-right'  />
            <Outlet />
        </>
    )
}

export default Common