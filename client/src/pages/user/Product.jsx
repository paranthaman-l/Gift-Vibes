import React from 'react'
import ProductDetails from '../../components/user/product/ProductDetails'

const Product = () => {
    return (
        <div className="flex flex-col mt-20 p-20 font-grotesk">
            <div className="flex">
                <img className='h-[580px] w-[580px]' src="https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n15-1.webp" alt="" />
                <ProductDetails />
            </div>
        </div>
    )
}

export default Product