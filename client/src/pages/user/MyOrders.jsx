import React from 'react'
import { MdErrorOutline } from 'react-icons/md'

const MyOrders = () => {
    const orders = [
        {
            "oid": "96d547bc-70be-4425-9d7a-b8a8a815686e",
            "customizedImage": null,
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n16-1.webp",
            giftName: "Personalized Photo Frame Valentine’s Day Gift The Best Is Yet To Come",
            "customizedName": null,
            "price": 2000,
            "quantity": 2,
            "gifts": [
                "8672e624-092a-4ccd-bd28-b0c9111138e9"
            ],
            "payment": null,
            "uid": null,
            "createdAt": "2024-03-24T10:58:59.795+00:00",
            "updatedAt": null
        },
        {
            "oid": "48203053-7bc2-48c8-b985-18085b1ce3a5",
            "customizedImage": null,
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n15-1-460x460.webp",
            giftName: "Personalised Graduation Photo Keychains Or Necklaces Gift Accessories For Graduate Friend",
            "customizedName": null,
            "price": 1999,
            "quantity": 1,
            "gifts": [
                "51aaaff0-92ed-48b1-96cf-67d752d57e1a"
            ],
            "payment": null,
            "uid": null,
            "createdAt": "2024-03-25T03:32:25.831+00:00",
            "updatedAt": null
        },
        {
            "oid": "8eb5866d-35c6-423b-9ed9-a98946d5675b",
            "customizedImage": "string",
            "customizedName": "string",
            giftImage: "https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n17-1-460x460.webp",
            giftName: "Glass Song Plaque Custom Spotify Plaque Acrylic Music Plaque Night Light Personalized Gift",
            "price": 3499,
            "quantity": 2,
            "gifts": [
                "51aaaff0-92ed-48b1-96cf-67d752d57e1a"
            ],
            "payment": null,
            "uid": "a0105134-6d44-45ad-a789-4782785ce7f8",
            "createdAt": "2024-03-26T08:53:27.424+00:00",
            "updatedAt": "2024-03-26T08:52:24.705+00:00"
        }
    ]
    return (
        <div className='px-10 w-3/4 mt-5'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>My Orders</p>
            <div className="w-full flex items-center justify-between p-3 mt-4 text-darkGreen bg-lightWhite rounded-md border border-indigo">
                <div className="flex items-center">
                    <p className='bg-indigo text-white text-xl mx-2 p-1 rounded-full'><MdErrorOutline /></p>
                    <p>No order has been made yet.</p>
                </div>
                <div className="flex">
                    <p className='uppercase border-b border-textGray text-textGray font-semibold text-sm cursor-pointer'>Browse Products</p>
                </div>
            </div>
            <div className="">
                {orders.map((order, i) => {
                    return (
                        <div key={i} className="p-8 my-5 shadow-md flex">
                            <div className="flex items-center w-full">
                                <img className='h-28 w-28' src={order.giftImage} alt="" />
                                <p className='text-lg w-1/2 line-clamp-2 mx-10'>{order.giftName}</p>
                            </div>
                            <div className="">
                                <p className='font-semibold'>qty: {order?.quantity}</p>
                                <p className='font-bold text-lg'>₹{order?.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders