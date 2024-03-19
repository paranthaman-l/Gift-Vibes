import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signInWithGoogle from '../../assets/btn_google_signin.png'
import Button from '../../components/shared/Button';
import logo from '../../assets/logo.svg'
import product1 from '../../assets/products/product5.webp'
import product3 from '../../assets/products/product6.webp'
import product4 from '../../assets/products/product0.jpg'
import { FaRegCircleDot } from 'react-icons/fa6'
import { IoCheckmarkCircle } from "react-icons/io5";
const SignUp = () => {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [passwordStrength, setPasswordStrength] = useState({})
    const [signUpError, setSignUpError] = useState({});
    const passwordChange = (e) => {
        const { value } = e.target;
        const hasLength = value.length >= 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasDigit = /[0-9]/.test(value);
        const hasSpecial = /[!@#$%^&*]/.test(value);
        console.log(hasLength, hasUpperCase, hasLowerCase, hasDigit, hasSpecial);
        setPasswordStrength({ hasLength, hasUpperCase, hasLowerCase, hasDigit, hasSpecial });
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUp({ ...signUp, [name]: value });
        setSignUpError({ ...signUpError, [name]: false });
    };
    const SignUp = (e) => {
        e.preventDefault();
        console.log("SignUp called");
    }
    useEffect(() => {
        const usernameInput = document.getElementById("password");
        const passwordCheckContainer = document.getElementById("passwordCheckContainer");
        usernameInput.addEventListener("focus", () => {
            passwordCheckContainer.classList.remove("hidden");
        });
        usernameInput.addEventListener("focusout", () => {
            passwordCheckContainer.classList.add("hidden");
        });
    })

    return (
        <div className="min-h-screen flex justify-between px-40 relative items-center w-full font-grotesk">
            <form onSubmit={SignUp} className='font-grotesk w-4/12 max-xl:w-full'>
                <p className='text-darkGreen font-bold text-3xl'>Sign Up</p>
                <div className="text-darkGreen">
                    <div className="flex flex-col my-4">
                        <label className='my-1' htmlFor="username">Username <span className='text-red'>*</span></label>
                        <input onChange={handleChange} name='username' id='username' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Username...' />
                    </div>
                    <div className="flex flex-col my-4">
                        <label className='my-1' htmlFor="email">Email <span className='text-red'>*</span></label>
                        <input id='email' name='email' onChange={handleChange} type="email" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Email address...' />
                    </div>
                    <div className="flex flex-col my-4 group relative">
                        <label className='my-1' htmlFor="password">Password <span className='text-red'>*</span></label>
                        <input onChange={passwordChange} name='password' id='password' type="password" className={`focus:after: duration outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm`} placeholder='Enter your Password...' />
                        <div id='passwordCheckContainer' className="absolute rounded-md delay-500 shadow bg-white -right-[195px] hidden  top-8 w-2/4">
                            <ul className='flex flex-col'>
                                <li className='flex text-sm items-center py-1'>{passwordStrength?.hasLength ?
                                    <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                    :
                                    <FaRegCircleDot className="text-sm mx-2 w-5" />
                                }At leaset 8 Characters</li>
                                <li className='flex text-sm items-center py-1'>{passwordStrength?.hasUpperCase ?
                                    <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                    :
                                    <FaRegCircleDot className="text-sm mx-2 w-5" />
                                }At leaset 1 UpperCase</li>
                                <li className='flex text-sm items-center py-1'>{passwordStrength?.hasLowerCase ?
                                    <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                    :
                                    <FaRegCircleDot className="text-sm mx-2 w-5" />
                                }At leaset 1 LowerCase</li>
                                <li className='flex text-sm items-center py-1'>{passwordStrength?.hasDigit ?
                                    <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                    :
                                    <FaRegCircleDot className="text-sm mx-2 w-5" />
                                }At leaset 1 Number</li>
                                <li className='flex text-sm items-center py-1'>{passwordStrength?.hasSpecial ?
                                    <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                    :
                                    <FaRegCircleDot className="text-sm mx-2 w-5" />
                                }At leaset 1 Symbol</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col my-4">
                        <label className='my-1' htmlFor="confirmPassword">Confirm Password <span className='text-red'>*</span></label>
                        <input onChange={handleChange} name='confirmPassword' id='confirmPassword' type="password" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Confirm Password...' />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <input type="checkbox" className='mr-2 cursor-pointer' name="" id="" />
                            <p className='text-opacity-70 text-darkGreen'>Terms & conditions</p>
                        </div>
                        {/* <div className="">
                        <p className='underline decoration-dashed decoration-darkGreen border-darkGreen text-darkGreen cursor-pointer'>Lost your password?</p>
                    </div> */}
                    </div>
                    <div className="my-4">
                        <button className='w-full' type='submit'><Button title={"Sign Up"} style={"w-full py-4"} /></button>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className='mx-2'>or Sign Up With</p>
                        <div className="">
                            <svg className='hover:scale-105 duration-200 ease-in-out rounded-full cursor-pointer h-8 w-8 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center my-2">
                        <p>Already a member? <span className='underline decoration-dashed decoration-darkGreen border-darkGreen text-darkGreen cursor-pointer' onClick={() => navigate('/login')}>Sign in here.</span></p>
                    </div>
                </div>
            </form>
            <div className="flex flex-col h-full mb-96 w-8/12 px-40">
                <div className="absolute top-0 right-0 p-16">
                    <img className='h-16 object-contain' src={logo} alt="" />
                </div>
                <div className="flex h-full flex-col">
                    <p className='text-5xl font-black my-10'>Begin Your Journey</p>
                    <p className='text-xl w-full px-10'>Gifts are the language of love, expressing emotions words cannot convey....</p>
                </div>
                <div className="relative ">
                    <img className='h-60 w-60 absolute rounded-full right-60 top-40' src={product1} alt="" />
                    <img className='h-40 w-40 absolute rounded-full left-40 top-9' src={product4} alt="" />
                    <img className='h-52 w-42 absolute rounded-full left-80 top-28' src={product3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SignUp