import React from 'react'

const ProductDetails = ({ product }) => {
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
        </div>
    )
}

export default ProductDetails