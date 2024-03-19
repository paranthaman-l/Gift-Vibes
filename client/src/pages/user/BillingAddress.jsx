
import Button from '../../components/shared/Button'

const BillingAddress = () => {
    return (
        <div className='px-10 w-3/4 h-[650px] overflow-y-scroll overflow-x-hidden'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>Billing Addresses</p>
            <p className='text-sm text-darkGreen text-opacity-70'>The following addresses will be used on the .</p>
            <div className="flex justify-start relative items-center w-full mx-10">
                <form className='font-grotesk w-full max-xl:w-full'>
                    <div className="text-darkGreen">
                        <div className="flex my-6 items-center  justify-between">
                            <div className="flex flex-col w-1/2 mr-5 mt-5">
                                <label className='my-1' htmlFor="firstName">First name <span className='text-red'>*</span></label>
                                <input id='firstName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your First name...' />
                            </div>
                            <div className="flex w-1/2 flex-col ml-5 mt-5">
                                <label className='my-1' htmlFor="lastName">Last name <span className='text-red'>*</span></label>
                                <input id='lastName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Last name...' />
                            </div>
                        </div>
                        <div className="flex my-6 flex-col ">
                            <label className='my-1' htmlFor="companyName">Company name (Optional)</label>
                            <input id='companyName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Company name address...' />
                        </div>
                        <div className="flex my-6 flex-col ">
                            <label className='my-1' htmlFor="">Street Address <span className='text-red'>*</span></label>
                            <input id='' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your House no and Street name...' />
                            <input id='' type="text" className='outline-none mt-7 border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Apartment, suit, unit, etc... (Optional)' />
                        </div>
                        <div className="flex my-6 flex-col mt-5">
                            <label className='my-1' htmlFor="city">Town / City <span className='text-red'>*</span></label>
                            <input id='city' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Town/City...' />
                        </div><div className="flex my-6 flex-col mt-5">
                            <label className='my-1' htmlFor="zipCode">Zip Code <span className='text-red'>*</span></label>
                            <input id='zipCode' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your ZipCode...' />
                        </div><div className="flex my-6 flex-col mt-5">
                            <label className='my-1' htmlFor="phone">Phone <span className='text-red'>*</span></label>
                            <input id='phone' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Phone no...' />
                        </div>
                        <div className="flex my-6 flex-col">
                            <label className='my-1' htmlFor="email">Email <span className='text-red'>*</span></label>
                            <input id='email' type="email" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Email address...' />
                        </div>
                        <div className="">
                            <p><Button title={"Save Address"} style={"w-1/4 py-4"} /></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BillingAddress