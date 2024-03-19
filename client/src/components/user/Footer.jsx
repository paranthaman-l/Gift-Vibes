import React from 'react'
import yellowMoon from '../../assets/footer-png-3.png';
import gmail from '../../assets/communication.png';
import perperPlane from '../../assets/paper-plane.png';
const Footer = () => {
    const footerData = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Shop",
            path: "/shop",
        },
        {
            title: "Personalized Gift",
            path: "/personalizedGift",
        },
        {
            title: "Sales off",
            path: "/salesOff",
        },
        {
            title: "contact",
            path: "/contact",
        },
    ]
    const footerData1 = [
        {
            title: "Our Team",
            path: "/ourTeam",
        },
        {
            title: "Category",
            path: "/category",
        },
        {
            title: "Refund policy",
            path: "/refundPolicy",
        },
        {
            title: "Shop",
            path: "/shop",
        },
    ]
    return (
        <footer className='bg-lightYellow font-grotesk'>
            <div className=' relative text-darkGreen px-20 justify-between grid gap-4 py-20 grid-cols-9 max-lg:flex max-lg:flex-col'>
                <div className="col-span-2">
                    <p className='text-4xl font-semibold mb-10'>GiftVibes.</p>
                    <p className='w-10/12 leading-7 text-opacity-70 text-darkGreen'>A gift box, also known as a gift package or gift container, is a decorative box or container used to present a gift to only on someone.</p>
                </div>
                <img className='absolute left-80 bottom-24 z-0' src={yellowMoon} alt="" />
                <div className="flex flex-col relative z-10 col-span-2">
                    <p className='text-2xl font-semibold mb-10'>Pages</p>
                    <div className="flex items-start ">
                        <ul className='mr-10'>
                            {footerData.map((link, i) => {
                                return (
                                    <li className={` text-lg my-4 hover:text-red cursor-pointer  ${link.path == location.pathname ? "text-red" : "text-gray-600"}`} key={i} to={link.path}>{link.title}</li>
                                )
                            })}
                        </ul>
                        <ul>
                            {footerData1.map((link, i) => {
                                return (
                                    <li className={` text-lg my-4 hover:text-red cursor-pointer  ${link.path == location.pathname ? "text-red" : "text-gray-600"}`} key={i} to={link.path}>{link.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col-span-2">
                    <p className='text-2xl font-semibold mb-10'>Contact</p>
                    <div className="">
                        <p className='pt-4 text-lg'>giftvibes1612@gmail.com</p>
                        <p className='pt-4 text-lg'>+91 9626474259</p>
                        <p className='pt-4 text-lg'>C - Block 211 & 215, SKCT Hostel</p>
                    </div>
                </div>
                <div className="bg-darkGreen h-3/4 w-full text-white flex justify-center flex-col p-10 col-span-3 ">
                    <p className='text-xl font-semibold my-3 select-none'>Newsletter Sign Up</p>
                    <p className=' text-gray-400 my-3 selection:text-white text-sm'>Sign-up and save! Receive exclusive offers through email.</p>
                    <div className="bg-white flex items-center">
                        <img className='h-5 w-5 ml-3' src={gmail} alt="" />
                        <input type="email" className='outline-none w-full px-3 text-darkGreen py-3' placeholder='Business Email... ' name="" id="" />
                        <img className='h-5 w-5 mr-3' src={perperPlane} alt="" />
                    </div>
                </div>
            </div>
            <p className=' h-[1.5px] bg-darkGreen bg-opacity-80 flex justify-center items-center mx-16' />
            <div className="flex justify-center items-center h-20">
                <p>Copyright & Design By <span className='font-bold text-lg'>@Paranthaman</span> – 2024</p>
            </div>
        </footer>
    )
}

export default Footer;