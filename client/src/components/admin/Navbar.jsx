import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useStates } from '../../States';

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useStates();
    return (
        <div className='z-10 px-10 py-5 fixed top-0 left-0 shadow-md w-full bg-white flex justify-between items-center font-grotesk'>
            <div className="flex ">
                <NavLink to={"/admin"}><img className='h-10 object-contain mx-5 ' src={logo} alt="" /></NavLink>
            </div>
            <div className="flex w-2/12  items-center">
                <img className='h-12 w-12 rounded-full border cursor-pointer mx-4' onClick={() => navigate("/admin")} 
                src={`${user?.profile ? user.profile : "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"}`}
                 alt="" />
                <div className="flex flex-col">
                    <p className='line-clamp-1 w-full'> {user?.user?.name}</p>
                    <p>{user?.user?.role}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar