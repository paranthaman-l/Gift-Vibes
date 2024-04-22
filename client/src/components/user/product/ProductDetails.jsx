import React, { useState } from 'react'
import Button from '../../shared/Button'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, Checkbox, Collapse, Rating, Typography } from '@material-tailwind/react';
import ImageCompressor from 'image-compressor.js';
import toast from 'react-hot-toast';

const ProductDetails = ({ product }) => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState();
    const handlePhotoChange = async (e) => {
        e.preventDefault();
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const compressedImage = await compressImage(selectedImage);
            const imageData = new FormData();
            imageData.append("file", compressedImage);
            imageData.append("upload_preset", "giftvibes");
            try {
                const response = await fetch(
                    `https://api.cloudinary.com/v1_1/dczv2ejcu/image/upload`,
                    {
                        method: "POST",
                        body: imageData,
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setProfile(data.secure_url)


            } catch (error) {
                // console.error("Error uploading image to Cloudinary:", error);
                toast.custom((t) => (
                    <div
                        className={`bg-[#ff5e5b] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${t.visible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                            } duration-300 ease-in-out`}>
                        <div className="flex items-center gap-2 text-white">
                            <span>
                                <i className="fa-solid text-xl fa-circle-xmark"></i>
                            </span>
                            <div>
                                <span className="">
                                    Error Updating Image
                                </span>
                            </div>
                        </div>
                    </div>
                ));
            }
        }
    };
    const compressImage = async (image) => {
        return new Promise((resolve, reject) => {
            new ImageCompressor(image, {
                quality: 0.1,
                success(result) {
                    resolve(result);
                },
                error(error) {
                    reject(error);
                },
            });
        });
    };
    const datas = [
        {
            image: "",
            title: "Fun in a Box",
            desc: "Exchange favorite board games for a super fun game night."
        },
        {
            image: "",
            title: "Something Blue",
            desc: "Gift anything blue, from cotton candy to denim."
        },
        {
            image: "",
            title: "Inside Jokes",
            desc: "Pay tribute to inside jokes with symbolic gifts."
        },
        {
            image: "",
            title: "Sweet Dreams",
            desc: "Gifts for a good night's sleep: pajamas, eye masks, etc."
        },
        {
            image: "",
            title: "Home Sweet Home",
            desc: "Exchange relics from your hometown and guess the gifter."
        },
        {
            image: "",
            title: "Pizza!",
            desc: "Any pizza-related items are fair game."
        },
        {
            image: "",
            title: "Gift Cards",
            desc: "Versatile presents that always fit."
        },
        {
            image: "",
            title: "Superheroes",
            desc: "Create a starter pack based on a superhero moniker."
        },
        {
            image: "",
            title: "Ugly Sweaters",
            desc: "Find the tackiest sweater for a fun exchange."
        },
        {
            image: "",
            title: "The Best Book I've Ever Read",
            desc: "Swap favorite books for some offline reading."
        },
        {
            image: "",
            title: "Booze Patrol",
            desc: "Over-21 indulgences paired with kitschy cups."
        },
        {
            image: "",
            title: "Cheap Thrills",
            desc: "Stretch a budget to assemble a bundle."
        },
        {
            image: "",
            title: "One-Season Wonders",
            desc: "Box sets of TV series that were canceled too soon."
        },
        {
            image: "",
            title: "I Love the '80s",
            desc: "Gifts embracing the colorful '80s era."
        },
        {
            image: "",
            title: "Feets of Strength",
            desc: "Gifts related to foot care: socks, polish, etc."
        },
        {
            image: "",
            title: "A Few of My Favorite Things",
            desc: "Gifts based on personal favorites with explanations."
        },
        {
            image: "",
            title: "Snack Attack",
            desc: "Fill a box with unique snacks for the recipient."
        },
        {
            image: "",
            title: "My Mom Loves This Stuff",
            desc: "Gifts endorsed by your mom."
        },
        {
            image: "",
            title: "Spot the Great Gift",
            desc: "Gifts with a polka dot theme."
        },
        {
            image: "",
            title: "Bring Back the Mixtape",
            desc: "Create a personalized soundtrack for the recipient."
        },
        {
            image: "",
            title: "Sheet (Mask) Happens",
            desc: "Skincare-themed gifts: sheet masks, lotions, etc."
        },
        {
            image: "",
            title: "Denim",
            desc: "Gifts made of or related to denim."
        },
        {
            image: "",
            title: "Deskorations",
            desc: "Tchotchkes for the recipient's desk."
        },
        {
            image: "",
            title: "A Salute to 1997",
            desc: "Gifts related to movies from 1997."
        },
        {
            image: "",
            title: "Premium Brew",
            desc: "Coffee-themed gifts: mugs, beans, etc."
        },
        {
            image: "",
            title: "Three Wicks or Bust",
            desc: "Candles for the gift exchange."
        },
        {
            image: "",
            title: "Get Out of Town",
            desc: "Travel-themed gifts."
        },
        {
            image: "",
            title: "Something Fishy",
            desc: "Gifts related to fish or ocean themes."
        },
        {
            image: "",
            title: "Make Your Mother Blush",
            desc: "NSFW gifts not suitable for mom."
        },
        {
            image: "",
            title: "Sweet for Swedes",
            desc: "Gifts related to Sweden."
        },
        {
            image: "",
            title: "Piece it Together",
            desc: "Swap puzzles of preferred piece counts."
        },
        {
            image: "",
            title: "Something Old",
            desc: "Exchange items lying around the house."
        },
        {
            image: "",
            title: "Candy Crush",
            desc: "Exchange favorite sweets."
        },
        {
            image: "",
            title: "Made with Love",
            desc: "Challenge everyone to DIY their gifts."
        }
    ]
    const greeting = [
        "Valentine's Day",
        "Happy Every Day",
        "Birthday",
        "For Mom",
        "Thank You",
        "Christmas Day",
        "Others"
    ]
    const colors = [
        "Purple", "Pink", "Blue", "Green", "Yellow"
    ]
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((cur) => !cur)
    };
    const [wrap, setWrap] = useState(false);
    const toggleWrap = () => {
        setWrap((cur) => !cur)
    };
    return (
        <div className="flex flex-col ml-16 ">
            <div className="flex my-3">
                <p className='mr-5 flex items-end'> <Rating className='mx-2' value={Math.floor(Math.random() * 5) + 1} readonly />4.3</p>
                <p className='mx-5'>{Math.floor(Math.random() * 1000) + 120} Review</p>
                <p className='mx-5'>In Stock</p>
            </div>
            <p className='text-[50px]  font-semibold leading-[50px] my-2 w-11/12'>
                {product?.name}
            </p>
            <p className=' text-darkGreen text-opacity-50 w-full mt-10'>{product?.description}
            </p>
            <p className='text-4xl font-semibold my-5'>
                ₹{product?.price}
            </p>
            <div className="">
                <p className='flex ' onClick={toggleOpen}>
                    <Button style={""} title={"Add Your Personalization"} ></Button>
                </p>
                <Collapse open={open}>
                    <div className="flex items-center my-5">
                        <div className="shrink-0 mx-3">
                            <img className="h-16 w-16 object-cover rounded-full"
                                src={`${profile ? profile : "http://localhost:5173/public/logo.svg"}`}
                                alt="Current photo" />
                        </div>
                        <label className="block">
                            <span className="sr-only ">Choose photo</span>
                            <input type="file" onChange={handlePhotoChange} className="cursor-pointer block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lightGreen file:text-darkGreen hover:file:bg-opacity-60" />
                        </label>
                    </div>
                    <div className="mb-5">
                        <p className='text-lg font-semibold'>Name</p>
                        <input type="text" className='outline-none w-[80%] mx-5 my-2 border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Name For Whom?...' />
                    </div>
                    <div className="">
                        <p className='text-lg font-semibold'>Select Theme</p>
                        <select size={1} name="" id="" className='p-2 outline outline-2 text-xl mx-5 mt-2'>
                            {datas.map((data, i) => {
                                return (
                                    <option value="" key={i} >{data.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="mt-5">
                        <p className='text-lg font-semibold'>Greetings...</p>
                        <select size={1} name="" id="" className='p-2 outline outline-2 text-xl mx-5 mt-2'>
                            {greeting.map((data, i) => {
                                return (
                                    <option value="" key={i} >{data}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="my-5">
                        <p className='text-lg font-semibold'>Quotes You Want...</p>
                        <input type="text" className='outline-none w-[80%] mx-5 my-2 border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Quote...' />
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <Checkbox
                                label="Gift Wrapping"
                                name='wrap'
                                onChange={toggleWrap}
                                checked={wrap}
                                className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                            />
                            <Collapse open={wrap}>
                                <div className="mx-14 my-5">
                                    <p className='text-lg font-semibold'>Choose Wrapper Color...</p>
                                    <select size={1} name="" id="" className='p-2 outline outline-2 text-xl mx-5 mt-2'>
                                        {colors.map((data, i) => {
                                            return (
                                                <option value="" key={i} >{data}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </Collapse>
            </div>

            <div className="flex my-10">
                <Button title={"Add To Cart"} style={"px-10 py-4 text-xl bg-opacity-90"}></Button>
                <button onClick={() => { navigate("/checkOut"); }}>
                    <Button title={"Buy Now"} style={"px-10 py-4 text-xl mx-10"}></Button>
                </button>
            </div>
            <div className="">
                <p>Categories: Gift, UnCategorized</p>
            </div>
        </div>
    )
}

export default ProductDetails