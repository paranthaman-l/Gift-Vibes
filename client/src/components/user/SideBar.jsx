import { BiBasket } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFileEarmarkZip, BsPerson } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useStates } from "../../States";
import { HiOutlineShoppingBag } from "react-icons/hi2";
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
    // {
    //   title: "Downloads",
    //   icon: <BsFileEarmarkZip />,
    //   path: "/downloads"
    // },
    {
      title: "Cart",
      icon: <HiOutlineShoppingBag />,
      path: "/cart"
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
  ]
  const { user,setUser } = useStates();
  return (
    <div className="flex flex-col w-1/4 text-darkGreen font-grotesk">
      <div className="flex items-center">

        <img className="rounded-3xl w-28 h-28 m-5" src={`${user?.profile ? user?.profile : "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"}`} alt="" />
        <div className="">
          <p className="text-xl line-clamp-1 w-40 font-semibold"> {user?.user?.name}</p>
          <p className="line-clamp-1 w-40"> {user?.user?.email}</p>
        </div>
      </div>
      {datas.map((data, i) => {
        return (
          <NavLink to={data.path} key={i} className="flex group cursor-pointer px-1 justify-between items-center py-4 border-b-[1.6px] border-opacity-10 border-darkGreen ">
            <p className="flex text-center w-full justify-start">{data.title}</p>
            <p className="text-xl text-gray-500 group-hover:text-darkGreen">{data.icon}</p>
          </NavLink>
        )
      })}
      <NavLink onClick={()=>{
        localStorage.clear();
        setUser({});
      }} to={"/login"} className="flex group cursor-pointer px-1 justify-between items-center py-4 border-b-[1.6px] border-opacity-10 border-darkGreen ">
        <p className="flex text-center w-full justify-start">{"Logout"}</p>
        <p className="text-xl text-gray-500 group-hover:text-darkGreen"><PiSignOutBold /></p>
      </NavLink>
    </div>
  )
}

export default SideBar;