/* eslint-disable react/no-unescaped-entities */
import h2image1 from '../../../assets/h2-image-1.jpg'
import h2bgimage3 from '../../../assets/h2-bg-image-3.png'
import h2bgimage1 from '../../../assets/h2-bg-image-1.png'
import brand1 from '../../../assets/brand-1.svg'
import brand2 from '../../../assets/brand-2.svg'
import brand3 from '../../../assets/brand-3.svg'
import brand4 from '../../../assets/brand-4.svg'
import brand5 from '../../../assets/brand-5.svg'
const BestSales = () => {
    const brands = [
        {
            image: brand1,
            title: "Brand 1"
        },
        {
            image: brand2,
            title: "Brand 2"
        },
        {
            image: brand3,
            title: "Brand 3"
        },
        {
            image: brand4,
            title: "Brand 4"
        },
        {
            image: brand5,
            title: "Brand 5"
        },
    ]
    return (
        <div className="flex flex-col">
            <div className='w-full flex items-center justify-center pt-40 pb-20 font-grotesk'>
                <div className="bg-lightYellow -z-20 w-[645px] h-[600px] relative flex justify-center flex-col items-center">
                    <img className='absolute -z-10 left-20 top-0' src={h2bgimage1} alt="" />
                    <p className='mx-24 text-4xl tracking-normal font-light leading-relaxed'>"As a small business
                        owner, GiftVibes has been a
                        lifesaver. It can assist
                        with customer inquiries,
                        generate content for
                        my website..."</p>
                    <div className="">

                    </div>
                </div>
                <div className="relative">
                    <img src={h2image1} alt="" />
                    <img className='absolute -right-6 top-3' src={h2bgimage3} alt="" />
                </div>
            </div>
            <div className="flex border-b-2 border-opacity-50 border-darkGreen mx-24 pb-16 p-10">
                {brands.map((data, i) => {
                    return (
                        <div key={i} className="flex flex-col items-center">
                            <img className='h-43 object-cover my-10 mx-20' src={data.image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BestSales