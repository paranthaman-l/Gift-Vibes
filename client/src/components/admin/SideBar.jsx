import { AiOutlineDashboard } from 'react-icons/ai'
import { BiBasket } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { PiSignOutBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import { LuUsers } from "react-icons/lu";
import { HiOutlinePaintBrush } from 'react-icons/hi2'
import { TfiGift } from 'react-icons/tfi'
const SideBar = () => {
  const datas = [
    {
      title: "Dashboard",
      icon: <AiOutlineDashboard />,
      path: "/admin"
    },
    {
      title: "Users",
      icon: <LuUsers />,
      path: "/users"
    },
    {
      title: "Themes",
      icon: <HiOutlinePaintBrush />,
      path: "/themes"
    },
    {
      title: "Gifts",
      icon: <TfiGift />,
      path: "/gifts"
    },
    {
      title: "Orders",
      icon: <BiBasket />,
      path: "/orders"
    },
    {
      title: "Account Settings",
      icon: <BsPerson />,
      path: "/accountSetting"
    },
    {
      title: "Logout",
      icon: <PiSignOutBold />,
      path: "/login"
    },
  ]
  return (
    <div className="flex flex-col w-1/4 text-darkGreen">
      {datas.map((data, i) => {
        return (
          <NavLink to={data.path} key={i} className="flex group cursor-pointer px-1 justify-between items-center py-4 border-b-[1.6px] border-opacity-10 border-darkGreen ">
            <p className="flex text-center w-full justify-start">{data.title}</p>
            <p className="text-xl text-gray-500 group-hover:text-darkGreen">{data.icon}</p>
          </NavLink>
        )
      })}
    </div>
  )
}

export default SideBar