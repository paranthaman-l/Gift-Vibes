import Button from '../../shared/Button'
import logo from '../../../../public/logo.svg'
const AddGift = () => {
  return (
    <div className='px-10 w-3/4 h-[650px] overflow-y-scroll'>
      <p className='text-4xl font-semibold tracking-wider text-textGray'>Add Gift</p>
      <div className="flex justify-start relative items-center w-full mx-10">
        <form className='font-grotesk w-full max-xl:w-full'>
          <div className="text-darkGreen">
            <div className="flex my-3 items-center  justify-between">
              <div className="flex flex-col w-1/2 mr-5 mt-5">
                <label className='my-1' htmlFor="firstName">Gift Name<span className='text-red'>*</span></label>
                <input id='firstName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Gift Name...' />
              </div>
              <div className="flex w-1/2 flex-col ml-5 mt-5">
                <label className='my-1' htmlFor="lastName">Gift Description <span className='text-red'>*</span></label>
                <input id='lastName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Gift Description...' />
              </div>
            </div>
            <div className="flex my-3 items-center  justify-between">
              <div className="flex flex-col w-1/2 mr-5 mt-5">
                <label className='my-1' htmlFor="firstName">Price<span className='text-red'>*</span></label>
                <input id='firstName' type="text" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Price...' />
              </div>
              <div className="flex w-1/2 flex-col ml-5 mt-5">
                <label className='my-1' htmlFor="lastName">Discount <span className='text-red'>*</span></label>
                <input id='lastName' type="number" className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Enter Discount...' />
              </div>
            </div>
            <div className="flex items-center my-5">
              <div className="shrink-0 mx-3">
                <img className="h-28 w-28 object-cover rounded-full p-5" src={logo} alt="Current profile photo" />
              </div>
              <label className="block">
                <span className="sr-only ">Choose Gift photo</span>
                <input type="file" className="cursor-pointer block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-lightGreen file:text-darkGreen hover:file:bg-opacity-60" />
              </label>
            </div>
            <div className="w-full mb-10">
              <label className="block">
                <p className="my-2">Choose Themes <span className='text-red'>*</span></p>
                <select name="" className='outline-none w-full border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' id="">
                  <option id='' type="text" value={"Vintage Theme"} className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' >Vintage Theme</option>
                  <option id='' type="text" value={"Wall Frame Theme"} className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' >Wall Frame Theme</option>
                  <option id='' type="text" value={"Sunset PhotoGraphy"} className='outline-none border border-darkGreen p-3 py-4 text-sm border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' >Sunset PhotoGraphy</option>
                </select>
              </label>
            </div>
            <div className="">
              <p><Button title={"Add Gift"} style={"w-1/4 py-4"} /></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddGift