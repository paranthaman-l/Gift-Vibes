const Loader = () => {
    return (
        <>
            <div className='w-screen h-screen overflow-hidden p-0 m-0 flex items-center justify-center font-grotesk'>
                <div className='custom-loader'></div>
                <div className="bg-white h-full flex justify-center items-center bg-opacity-75">
                    <p className='text-xl'>Loading...</p>
                </div>
            </div>
        </>
    )
}

export default Loader