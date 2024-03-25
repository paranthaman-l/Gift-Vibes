import { FaRegUser,FaTruckFast } from "react-icons/fa6";
import { GiCardboardBoxClosed } from "react-icons/gi";

const DashBoard = () => {
    return (
        <div className='px-10 w-3/4 h-[650px] flex flex-col overflow-y-scroll'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>DashBoard</p>
            <div className="grid w-full grid-flow-row gap-5 grid-cols-3 my-10">
                <div className="shadow-lg group h-48 p-4 cursor-pointer flex flex-col items-center">
                    <div className="">
                        <p className="p-2 flex items-center rounded-full bg-green bg-opacity-50">
                            <FaRegUser className="text-5xl p-2 group-hover:text-gray-800 text-darkGreen" />
                            <p className="mx-10 text-2xl font-semibold text-darkGreen">User</p>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <p className="text-darkGreen text-3xl">1</p>
                    </div>
                </div>

                <div className="shadow-lg group h-48 p-4 cursor-pointer flex flex-col items-center">
                    <div className="">
                        <p className="p-2 flex items-center rounded-full bg-green bg-opacity-50">
                            <GiCardboardBoxClosed className="text-5xl group-hover:text-gray-800 text-darkGreen" />
                            <p className="mx-10 text-2xl font-semibold text-darkGreen">Product</p>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <p className="text-darkGreen text-3xl">15</p>
                    </div>
                </div>

                <div className="shadow-lg group h-48 p-4 cursor-pointer flex flex-col items-center">
                    <div className="">
                        <p className="p-2 flex items-center rounded-full bg-green bg-opacity-50">
                            <FaTruckFast className="text-5xl group-hover:text-gray-800 p-1 text-darkGreen" />
                            <p className="mx-10 text-2xl font-semibold text-darkGreen">Orders</p>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <p className="text-darkGreen text-3xl">40</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashBoard