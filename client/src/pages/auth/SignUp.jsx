import { useEffect, useState } from 'react';
import { FaRegCircleDot } from 'react-icons/fa6';
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useStates } from '../../States';
import { doSignInWithGoogle } from '../../apis/auth';
import logo from '../../assets/logo.svg';
import product4 from '../../assets/products/product0.jpg';
import product1 from '../../assets/products/product5.webp';
import product3 from '../../assets/products/product6.webp';
import Button from '../../components/shared/Button';
import AdminService from '../../services/AdminService';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';
import toast from 'react-hot-toast';

const SignUp = () => {
    const navigate = useNavigate();
    const { signUp, setSignUp, setUser, GetUserDetails } = useStates();
    const [passwordStrength, setPasswordStrength] = useState({})
    const [signUpError, setSignUpError] = useState({});
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [actualOtp, setActualOtp] = useState("");
    const passwordChange = (e) => {
        const { value } = e.target;
        const hasLength = value.length >= 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasDigit = /[0-9]/.test(value);
        const hasSpecial = /[!@#$%^&*]/.test(value);
        setPasswordStrength({ hasLength, hasUpperCase, hasLowerCase, hasDigit, hasSpecial });
        setSignUp({ ...signUp, password: value });
    }

    const Validate = () => {
        setSignUpError({});
        let error = {}
        if (signUp.username.trim() === '') {
            error.username = true;
        }
        if (signUp.email.trim() === '')
            error.email = true;
        else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(signUp.email))
            error.email = true;
        if (signUp.password.trim() === '') {
            error.password = true;
        }

        if (signUp.confirmPassword.trim() === '' || signUp.password !== signUp.confirmPassword)
            error.confirmPassword = true;

        setSignUpError(error);
        return error;
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUp({ ...signUp, [name]: value });
        setSignUpError({ ...signUpError, [name]: false });
    };

    const SignUp = async (e) => {
        e.preventDefault();
        const error = Validate();
        if (!error.username && !error.email && !error.password && !error.confirmPassword && !error.signUpType) {
            await AuthService.SendOTP(signUp).then(async (response) => {
                if (response.data.error == null) {
                    setActualOtp(response.data.data)
                } else {
                    toast.custom((t) => (
                        <div
                            className={`bg-[#ff5e5b] font-grotesk text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                                } duration-300 ease-in-out`}>
                            <div className="flex items-center gap-2 text-white">
                                <span>
                                    <i className="fa-solid text-xl fa-circle-xmark"></i>
                                </span>
                                <div>
                                    <span className="">
                                        {response.data.error}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ));
                }
            }).catch((err) => {
                console.log(err);
            })
        } else {
            toast.custom((t) => (
                <div
                    className={`bg-[#ff5e5b] font-grotesk text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                        } duration-300 ease-in-out`}>
                    <div className="flex items-center gap-2 text-white">
                        <span>
                            <i className="fa-solid text-xl fa-circle-xmark"></i>
                        </span>
                        <div>
                            <span className="tracking-widest">
                                Enter All field!
                            </span>
                        </div>
                    </div>
                </div>
            ));
        }
    }

    const handleOtpChange = (element, index, isBackspace) => {
        if (isBackspace) {
            setOtp([...otp.map((data, i) => (i === index ? "" : data))])
            if (index > 0 && element.previousSibling) {
                element.previousSibling.focus();
            }
        } else if (!isNaN(element.value)) {
            setOtp([...otp.map((data, i) => (i === index ? element.value : data))])
            if (element.nextSibling) {
                element.nextSibling.focus();
            }
        }
    }
    const VerifyOTP = async (e) => {
        e.preventDefault();
        console.log(actualOtp);
        const enteredOTP = otp.join('');
        console.log(enteredOTP, actualOtp);
        if (enteredOTP.length < 6) {
            alert("Enter OTP");
            return;
        }
        if (enteredOTP == actualOtp) {
            await AuthService.SignUp(signUp).then(async (response) => {
                await AuthService.Login({ email: signUp.email, password: signUp.password }).then(async (res) => {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("role", res.data.role);
                    localStorage.setItem("uid", res.data.uid);
                    GetUserDetails();
                    if (res.data.role == 'ADMIN') {
                        await AdminService.GetUser().then((response) => {
                            setUser(response.data);
                            toast.custom((t) => (
                                <div
                                    className={`bg-green font-grotesk text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                        } duration-300 ease-in-out`}>
                                    <div className="flex items-center gap-2 text-white">
                                        <span>
                                            <i className="fa-solid fa-circle-check"></i>
                                        </span>
                                        <div>
                                            <span className="">Logged In successfully !</span>
                                        </div>
                                    </div>
                                </div>
                            ));
                            setTimeout(() => {
                                navigate("/admin");
                                toast.remove();
                            }, 1000)
                        }).catch((error) => {
                            console.log(error);
                        })
                    }
                    else if (res.data.role == 'USER') {
                        await UserService.GetUser().then((response) => {
                            setUser(response.data);
                            setUser(response.data);
                            toast.custom((t) => (
                                <div
                                    className={`bg-green font-grotesk text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                        } duration-300 ease-in-out`}>
                                    <div className="flex items-center gap-2 text-white">
                                        <span>
                                            <i className="fa-solid fa-circle-check"></i>
                                        </span>
                                        <div>
                                            <span className="">Logged In successfully !</span>
                                        </div>
                                    </div>
                                </div>
                            ));
                            setTimeout(() => {
                                navigate("/");
                                toast.remove();
                            }, 1000)
                        }).catch((error) => {
                            console.log(error);
                        })
                    } else {
                        toast.custom((t) => (
                            <div
                                className={`bg-[#ff5e5b] font-grotesk text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    } duration-300 ease-in-out`}>
                                <div className="flex items-center gap-2 text-white">
                                    <span>
                                        <i className="fa-solid text-xl fa-circle-xmark"></i>
                                    </span>
                                    <div>
                                        <span className="">
                                            Some thing Went Wrong!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ));
                    }
                })
            }).catch((err) => {
                console.log(err);
            })
        } else {
            alert("Invalid OTP");
        }
    }

    const handleGoogleSignUP = async (e) => {
        e.preventDefault();
        await doSignInWithGoogle().then(async (response) => {
            const { displayName, photoURL, email, emailVerified } = response.user;
            await AuthService.SignUpWithGoogle(displayName, photoURL, email, emailVerified).then(async (res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("uid", res.data.uid);
                GetUserDetails();
                if (res.data.role == 'ADMIN') {
                    await AdminService.GetUser().then((response) => {
                        setUser(response.data);
                        toast.custom((t) => (
                            <div
                                className={`bg-green font-grotesk text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    } duration-300 ease-in-out`}>
                                <div className="flex items-center gap-2 text-white">
                                    <span>
                                        <i className="fa-solid fa-circle-check"></i>
                                    </span>
                                    <div>
                                        <span className="">Logged In successfully !</span>
                                    </div>
                                </div>
                            </div>
                        ));
                        setTimeout(() => {
                            navigate("/admin");
                            toast.remove();
                        }, 1000)
                    }).catch((error) => {
                        console.log(error);
                    })
                }
                else if (res.data.role == 'USER') {
                    await UserService.GetUser().then((response) => {
                        setUser(response.data);
                        setUser(response.data);
                        toast.custom((t) => (
                            <div
                                className={`bg-green font-grotesk text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    } duration-300 ease-in-out`}>
                                <div className="flex items-center gap-2 text-white">
                                    <span>
                                        <i className="fa-solid fa-circle-check"></i>
                                    </span>
                                    <div>
                                        <span className="">Logged In successfully !</span>
                                    </div>
                                </div>
                            </div>
                        ));
                        setTimeout(() => {
                            navigate("/");
                            toast.remove();
                        }, 1000)
                    }).catch((error) => {
                        console.log(error);
                    })
                } else {
                    alert("Invalid Credentials")
                }
            }).catch((err) => {
                console.log(err);
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        try {
            const usernameInput = document.getElementById("password");
            const passwordCheckContainer = document.getElementById("passwordCheckContainer");
            usernameInput.addEventListener("focus", () => {
                passwordCheckContainer.classList.remove("hidden");
            });
            usernameInput.addEventListener("focusout", () => {
                passwordCheckContainer.classList.add("hidden");
            });
        } catch (error) {
            console.log("Error" + error);
        }
    }, [])

    return (
        <div className="min-h-screen flex justify-between px-40 relative items-center w-full font-grotesk">
            <form onSubmit={actualOtp ? VerifyOTP : SignUp} className='font-grotesk w-4/12 max-xl:w-full'>
                <div className="">
                    {!actualOtp ?
                        <div className="">
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
                                            }At least 8 Characters</li>
                                            <li className='flex text-sm items-center py-1'>{passwordStrength?.hasUpperCase ?
                                                <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                                :
                                                <FaRegCircleDot className="text-sm mx-2 w-5" />
                                            }At least 1 UpperCase</li>
                                            <li className='flex text-sm items-center py-1'>{passwordStrength?.hasLowerCase ?
                                                <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                                :
                                                <FaRegCircleDot className="text-sm mx-2 w-5" />
                                            }At least 1 LowerCase</li>
                                            <li className='flex text-sm items-center py-1'>{passwordStrength?.hasDigit ?
                                                <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                                :
                                                <FaRegCircleDot className="text-sm mx-2 w-5" />
                                            }At least 1 Number</li>
                                            <li className='flex text-sm items-center py-1'>{passwordStrength?.hasSpecial ?
                                                <IoCheckmarkCircle className='mx-2 w-5 text-lg' />
                                                :
                                                <FaRegCircleDot className="text-sm mx-2 w-5" />
                                            }At least 1 Symbol</li>
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
                                </div>
                                <div className="my-4">
                                    <button className='w-full' type='submit'><Button title={"Sign Up"} style={"w-full py-4"} /></button>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className='mx-2'>or Sign Up With</p>
                                    <div onClick={handleGoogleSignUP} className="">
                                        <svg className='hover:scale-105 duration-200 ease-in-out rounded-full cursor-pointer h-8 w-8 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex justify-center my-2">
                                    <p>Already have an Account? <span className='underline decoration-dashed decoration-darkGreen border-darkGreen text-darkGreen cursor-pointer' onClick={() => navigate("/login")}>Sign In</span></p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="flex w-full justify-between  flex-col">
                            <p className='text-darkGreen font-bold text-3xl'>Verify OTP</p>
                            <div className="flex w-full justify-between my-10">
                                {otp.map((data, i) => {
                                    // const isDisabled = i !== 0 && otp[i - 1] === "";
                                    return (
                                        <input
                                            className={`outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm border-gray text-center flex justify-center items-center focus:border-blue focus:placeholder:text-[#9ca3af]  ${signUpError.otp && "border-inputErrorRed text-inputErrorRed placeholder:text-inputErrorRed"} text-darkGray m-[2.5px] h-[50px] text-lg max-w-[45px] rounded-lg outline-none border-[2.0px] `}
                                            key={i}
                                            type="text"
                                            name="otp"
                                            onChange={(e) => handleOtpChange(e.target, i, e.target.value === "")}
                                            id={`otp${i}`}
                                            onFocus={(e) => e.target.select()}
                                            maxLength={1}
                                            value={data}
                                        // disabled={isDisabled}
                                        />
                                    )
                                })
                                }
                            </div>
                            <div className="my-4">
                                <button onClick={() => VerifyOTP()} className='w-full' type='submit'><Button title={"Verify OTP"} style={"w-full py-4"} /></button>
                            </div>
                            <div className="flex justify-center my-2">
                                <p>Resend Otp? <span className='underline decoration-dashed decoration-darkGreen border-darkGreen text-darkGreen cursor-pointer' onClick={() => SignUp()}>Resend.</span></p>
                            </div>
                        </div>
                    }
                </div>

            </form>
            <div className="flex flex-col h-full mb-96 w-8/12 px-40">
                <div className="absolute top-0 right-0 p-16">
                    <Link to={"/"}>
                        <img className='h-16 object-contain cursor-pointer' src={logo} alt="" />
                    </Link>
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