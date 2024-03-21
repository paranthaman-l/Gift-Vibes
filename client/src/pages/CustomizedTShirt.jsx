import React from 'react'
import Home from './Home'
import Canvas from '../canvas'
import Customizer from './Customizer'
const CustomizedTShirt = () => {
    return (
        <main className="app transition-all ease-in pt-20">
            <Home />
            <Canvas />
            <Customizer />
        </main>
    )
}

export default CustomizedTShirt