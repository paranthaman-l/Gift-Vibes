import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import profile from "../../assets/products/product2.webp"

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='z-10 px-10 py-5 fixed top-0 left-0 shadow-md w-full bg-white flex justify-between items-center font-grotesk'>
            <div className="flex ">
                <NavLink to={"/admin"}><img className='h-10 object-contain mx-5 ' src={logo} alt="" /></NavLink>
            </div>
            <div className="">
                <img className='h-10 w-10 rounded-full border cursor-pointer' onClick={() => navigate("/dashboard")} src={profile} alt="" />
            </div>
        </div>
    )
}

export default Navbar