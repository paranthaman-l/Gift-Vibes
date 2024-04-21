import React from 'react'
import FilterBar from '../../components/user/shop/FilterBar'
import ProductList from '../../components/user/shop/ProductList'

const Shop = () => {
    return (
        <div className="font-grotesk w-full flex flex-col">
            
            <div className='py-20 mx-10 flex justify-between'>
                <div className="w-1/4">
                    <FilterBar />
                </div>
                <div className="w-3/4">
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

export default Shop