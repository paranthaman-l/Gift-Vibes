import React from 'react'
import Button from '../../shared/Button'
import { useNavigate } from 'react-router-dom'

const ProductDetails = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col ml-16">
            <div className="flex my-3">
                <p className='mr-5'>4.3</p>
                <p className='mx-5'>1 Review</p>
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

            <div className="flex my-10">
                <Button title={"Add To Cart"} style={"px-10 py-4 text-xl bg-opacity-90"}></Button>
                <button onClick={()=>{navigate("/checkOut");}}>
                    <Button title={"Buy Now"} style={"px-10 py-4 text-xl mx-10"}></Button>
                </button>
            </div>
        </div>
    )
}

export default ProductDetails