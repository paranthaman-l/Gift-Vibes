import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import Button from '../../components/shared/Button';
import product1 from '../../assets/products/product2.webp'
import product3 from '../../assets/products/product3.webp'
import product4 from '../../assets/products/product4.webp'
import { doSignInWithGoogle } from '../../apis/auth';

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });
    const [loginError, setLoginError] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
        setLoginError({ ...loginError, [name]: false });
    };
    const Login = (e) => {
        e.preventDefault();
        if (login.username == "admin@gmail.com" && login.password == "admin") {
            navigate("/admin");
        }
        else if (login.username == "user@gmail.com" && login.password == "user") {
            navigate("/");
        }
        else {
            alert("Invalid Password");
        }
    }
    const handleLogin = async (e) => {
        // await signInWithPopup(auth, provider).then((response) => {
        //     console.log(response);
        // });
        e.preventDefault();
        doSignInWithGoogle().then((response)=>{
            navigate("/");
            alert("Welcome "+response.displayName);
        }).catch((error) => {
            console.log(error);
        })
        
    };
    return (
        <div className="min-h-screen flex justify-between px-40 relative items-center w-full font-grotesk">
            <div className="flex flex-col h-full mb-56">
                <div className="absolute top-0 left-0 p-16">
                    <img className='h-16 object-contain' src={logo} alt="" />
                </div>
                <div className="flex h-full flex-col">
                    <p className='text-5xl font-black  my-10'>Unlock Your Experience</p>
                    <p className='text-xl w-3/4 px-10'>Every gift is a symbol of appreciation, a token of love shared with admiration...</p>
                </div>
                <div className="relative mt-10 ">
                    <img className='h-60 w-60 absolute rounded-full left-0' src={product1} alt="" />
                    <img className='h-40 w-40 absolute rounded-full left-80' src={product4} alt="" />
                    <img className='h-52 w-42 absolute rounded-full left-52 top-28' src={product3} alt="" />
                </div>
            </div>
            <form onSubmit={Login} className='font-grotesk w-4/12 max-xl:w-full '>
                <p className='text-darkGreen font-bold text-3xl'>Login</p>
                <div className="text-darkGreen">
                    <div className="flex flex-col my-6">
                        <label className='my-1' htmlFor="username">Username or email address <span className='text-red'>*</span></label>
                        <input id='username' name='username' onChange={handleChange} type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Username or email address...' />
                    </div>
                    <div className="flex flex-col my-6">
                        <label className='my-1' htmlFor="password">Password <span className='text-red'>*</span></label>
                        <input id='password' name='password' onChange={handleChange} type="password" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter your Password...' />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <input type="checkbox" className='mr-2 cursor-pointer' name="" id="" />
                            <p className='text-opacity-70 text-darkGreen'>Remember me</p>
                        </div>
                        <div className="">
                            <p className='underline decoration-dashed decoration-darkGreen border-darkGreen text-darkGreen cursor-pointer'>Lost your password?</p>
                        </div>
                    </div>
                    <div className="my-4 w-full flex">
                        <button type="submit" className='w-full'><Button title={"Log in"} style={"w-full py-4"} /></button>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className='mx-2'>or Sign in With</p>
                        <div onClick={handleLogin} className="">
                            <svg className='hover:scale-105 duration-200 ease-in-out rounded-full cursor-pointer h-8 w-8 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center my-2">
                        <p>New to our platform? <span className='underline decoration-dashed decoration-darkGreen border-darkGreen text-darkGreen cursor-pointer' onClick={() => navigate('/signUp')}>Sign up now!</span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login