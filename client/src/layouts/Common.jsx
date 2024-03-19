import React from 'react'
import { Outlet } from 'react-router-dom'

const Common = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
        </>
    )
}

export default Common