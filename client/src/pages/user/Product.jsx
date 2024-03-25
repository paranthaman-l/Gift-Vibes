import React, { useEffect, useState } from 'react'
import ProductDetails from '../../components/user/product/ProductDetails'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../../services/UserService'

const Product = () => {
    const {pid} = useParams();
    const navigate = useNavigate();
    const [product,setProduct] = useState();
    useEffect(() => {
        UserService.getProduct(pid).then((response) => {
            setProduct(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[]);
    return (
        <div className="flex flex-col mt-20 p-20 font-grotesk">
            <div className="flex">
                <img className='h-[580px] w-[580px]' src={`${product?.image ? product?.image : "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n15-1.webp"}`} alt="" />
                <ProductDetails product={product} />
            </div>
        </div>
    )
}

export default Product