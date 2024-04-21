import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { useStates } from '../../States';
import { PiSignOutBold } from 'react-icons/pi';
const Navbar = () => {
  const navigate = useNavigate()
  const navData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Personalized Website",
      path: "/customized",
    },
    {
      title: "Customized T-shirt",
      path: "/customizedTshirt",
    },
    // {
    //   title: "contact",
    //   path: "/contact",
    // },
  ]
  const { user, setUser } = useStates();
  return (
    <div className='z-30 px-10 fixed top-0 left-0 shadow-md w-full bg-white flex justify-between items-center font-grotesk'>
      <div className="flex w-5/12">
        {navData.map((link, i) => {
          return (
            <NavLink className={`font-semibold mx-5 text-base my-7 hover:text-red  ${link.path == location.pathname ? "text-red" : "text-gray-600"}`} key={i} to={link.path}>{link.title}</NavLink>
          )
        })}
      </div>
      <div className="flex justify-between items-center w-7/12 px-10 ">
        <div className="flex ">
          <NavLink to={"/"}><img className='h-10 object-contain mx-5 ' src={logo} alt="" /></NavLink>
        </div>
        <div className="w-3/6 text-3xl flex justify-evenly items-center mr-10">
          <div className="">
            <CiSearch className='hover:text-red duration-200 cursor-pointer' />
          </div>
          <div className="">
            <CiHeart onClick={()=>navigate("/wishlist")} className='hover:text-red duration-200 cursor-pointer' />
          </div>
          <div className="">
            <HiOutlineShoppingBag className='hover:text-red text-2xl duration-200 cursor-pointer' />
          </div>
          {localStorage.getItem('uid') ?
            <Menu animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}>
              <MenuHandler>
                <div className="flex items-center justify-between cursor-pointer">
                  <img className='h-10 w-10 rounded-full border '
                    src={`${user?.profile ? user?.profile : "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"}`}
                    alt="" />
                  <p className='line-clamp-1 text-2xl max-w-6/12 mx-2'> {user?.user?.name}</p>
                </div>
              </MenuHandler>
              <MenuList className="flex absolute w-[250px] p-2 right-0 top-14 flex-col justify-center bg-white shadow-xl rounded-xl">
                <MenuItem className="flex items-center hover:bg-white border-t-[1px] border-gray border-opacity-50 mt-2">
                  <div className="flex flex-col py-1 justify-start w-full text-darkGray">
                    <MenuItem onClick={() => navigate("/dashboard")} className="flex justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full hover:bg-lightSkyBlue2">
                      <img className="w-8 h-8 rounded-full mx-2"
                        src={`${user?.profile ? user?.profile : "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"}`}
                        alt="" /> Profile
                    </MenuItem>
                    <MenuItem className="flex  justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full">
                      <img className="mx-2 w-6 h-6 text-white" src="https://app.connecteam.com/images/base-line/header/notification-bell-new.svg" alt="" />
                      Notification
                    </MenuItem>
                    <MenuItem onClick={() => {
                      navigate('/login'); localStorage.clear();
                      setUser({});
                    }} className="flex justify-start items-center py-2 rounded-xl text-lg cursor-pointer my-[2px] w-full hover:bg-lightSkyBlue2">
                      <PiSignOutBold className='w-6 h-6 mx-2' />
                      Logout
                    </MenuItem>
                  </div>
                </MenuItem>
              </MenuList>
            </Menu> : <div>
              <CiUser onClick={() => navigate("/login")} className='cursor-pointer' />
            </div>}

        </div>
      </div>
    </div>
  )
}

export default Navbar