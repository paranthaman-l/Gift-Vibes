import { NavLink } from 'react-router-dom';
import Button from '../../components/shared/Button'
import { LiaEditSolid } from "react-icons/lia";
const Addresses = () => {
    return (
        <div className='px-10 w-3/4 mt-5  h-[650px] overflow-y-scroll'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>Addresses</p>
            <p className='text-sm text-darkGreen text-opacity-70'>The following addresses will be used on the checkout page by default.</p>
            <div className="flex w-full justify-between my-16">
                <div className="w-1/2 mr-5">
                    <div className="flex justify-between w-full items-center">
                        <p className='text-4xl font-semibold tracking-wider text-textGray'>Billing Addresses</p>
                        <NavLink to={"/addresses/billing"}>
                            <LiaEditSolid className='text-3xl cursor-pointer text-textGray ' />
                        </NavLink>
                    </div>
                    <p className='my-6 text-opacity-80 text-darkGreen'>You have not set up this type of address yet.</p>
                </div>
                <div className="w-1/2 ml-5">
                    <div className="flex justify-between w-full items-center">
                        <p className='text-4xl font-semibold tracking-wider text-textGray'>Shipping Addresses</p>
                        <NavLink to={"/addresses/shipping"}>
                            <LiaEditSolid className='text-3xl cursor-pointer text-textGray ' />
                        </NavLink>
                    </div>
                    <p className='my-6 text-opacity-80 text-darkGreen'>You have not set up this type of address yet.</p>
                </div>
            </div>
        </div>
    )
}

export default Addresses