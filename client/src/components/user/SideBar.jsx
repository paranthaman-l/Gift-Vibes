import { BiBasket } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFileEarmarkZip, BsPerson } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const datas = [
    {
      title: "Dashboard",
      icon: <AiOutlineDashboard />,
      path: "/dashboard"
    },
    {
      title: "Orders",
      icon: <BiBasket />,
      path: "/myOrders"
    },
    {
      title: "Downloads",
      icon: <BsFileEarmarkZip />,
      path: "/downloads"
    },
    {
      title: "Addresses",
      icon: <VscHome />,
      path: "/addresses"
    },
    {
      title: "Account Details",
      icon: <BsPerson />,
      path: "/accountDetails"
    },
    {
      title: "Compare",
      icon: <IoIosGitCompare />,
      path: "/compare"
    },
    {
      title: "Wishlist",
      icon: <CiHeart />,
      path: "/wishlist"
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

export default SideBar;