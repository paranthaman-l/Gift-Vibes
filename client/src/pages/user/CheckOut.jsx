import { useState } from 'react'
import { useStates } from '../../States';
import { razorpayConfig } from '../../configs/PaymentConfig'
import Button from '../../components/shared/Button'
const CheckOut = () => {
  const { user } = useStates();
  const [order, setOrder] = useState();
  const handlePayment = (price) => {
    if (price > 0) {
      const options = {
        key: razorpayConfig.key,
        key_secret: razorpayConfig.key_secret,
        amount: price * 100,
        currency: razorpayConfig.currency,
        name: razorpayConfig.name,
        handler: (res) => {
          setOrder({
            price,
            gifts: [],
            uid: user?.user?.uid,
            payment: {
              payment_id: res.razorpay_payment_id,
              amountPaid: price,
              status: "paid",
              paymentDate: new Date(),
              modeOfPayment: "Card"
            }
          });
        },
        prefill: {
          name: user?.user?.name,
          email: user?.user?.email,
          contact: user?.user?.contact
        },
        notes: {
          address: "",
        },
        theme: {
          color: '#183837'
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    }
    else {
      alert("invalid amount")
    }

  }
  return (
    <div className='font-grotesk'>
      <div className="w-full flex items-start py-20 mb-10 px-20 gap-4">
        <div className="px-10 w-8/12  h-[700px] my-10 flex flex-col overflow-y-scroll">
          <div className="flex mb-10 w-10/12">
            <p className='text-xl font-semibold'>1.</p>
            <div className="w-full px-2">
              <p className='text-xl font-semibold'>Contact Information</p>
              <p className='text-opacity-70 text-darkGreen my-3'>We'll use this email to send you details and updates about your order.</p>
              <div className="flex flex-col w-full">
                <input id='email' type="email" className=' outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Email address...' />
              </div>
            </div>
          </div>
          <div className="flex mb-10 w-10/12">
            <p className='text-xl font-semibold'>2.</p>
            <div className="w-full px-2">
              <p className='text-xl font-semibold'>Billing Address</p>
              <p className='text-opacity-70 text-darkGreen my-3'>Enter the billing address that matches your payment method.</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col w-full mr-5 mt-5">
                  <input id='firstName' type="text" className='outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='First name...' />
                </div>
                <div className="flex flex-col w-full ml-5 mt-5">
                  <input id='lastName' type="text" className='outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Last name...' />
                </div>
              </div>
              <div className="flex flex-col w-full my-5">
                <input id='address' type="text" className=' outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Address...' />
              </div>
              <div className="flex flex-col w-full my-5">
                <input id='address' type="text" className=' outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Apartment, suite, etc. (optional)' />
              </div>
              <div className="flex flex-col w-full my-5">
                <input id='country' type="text" className=' outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Country/Region' />
              </div>
              <div className="flex items-center justify-between my-5">
                <div className="flex flex-col w-full mr-5 mt-5">
                  <input id='city' type="text" className='outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='City' />
                </div>
                <div className="flex flex-col w-full ml-5 mt-5">
                  <input id='state' type="text" className='outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='State' />
                </div>
              </div>
              <div className="flex items-center justify-between my-5">
                <div className="flex flex-col w-full mr-5 mt-5">
                  <input id='zipcode' type="text" className='outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Zip Code' />
                </div>
                <div className="flex flex-col w-full ml-5 mt-5">
                  <input id='phone' type="text" className='outline-none border border-darkGreen p-2 py-4 border-opacity-30 focus:border-opacity-100 duration-200 rounded-sm' placeholder='Phone' />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-10 w-10/12">
            <p className='text-xl font-semibold'>3.</p>
            <div className="w-full px-2">
              <p className='text-xl font-semibold mb-2'>Payment Options</p>
              <div className="flex flex-col justify-center h-20">
                <p className='mb-3'><span className='text-lg font-semibold'>Cash on Delivery</span> (Pay with cash upon delivery.)</p>
                <p className='mb-3'><span className='text-lg font-semibold'>Online Payment</span> (Pay with UPI/Gpay/PhonePay/Paytm...)</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center">
              <input className='mr-5 h-4 w-4' type="checkbox" name="" id="" />
              <p className='text-lg'>Add a note to your order</p>
            </div>
            <p className='my-2'>By proceeding with your purchase you agree to our Terms and Conditions and Privacy Policy
            </p>
          </div>
          <div className="flex justify-end mt-10 mx-40">
            <button className='w-7/12 flex justify-end' onClick={() => handlePayment(1)}>
              <Button title={"Place Order"} style={"w-full py-4"} />
            </button>
          </div>
        </div>
        <div className="flex flex-col w-4/12 my-10 text-darkGreen">
          <p className='text-xl font-semibold mt-3'>Order Summary</p>
          <div className="flex flex-col mt-5 w-full">
            <div className="flex my-5 justify-between w-full">
              <img className='h-20 w-20' src="https://demo2.themelexus.com/flicko/wp-content/uploads/2024/01/product-n10-1-408x408.webp" alt="" />
              <div className="flex flex-col w-8/12 ">
                <p className='font-semibold line-clamp-2'>Bachelor Cap Graduation Name Necklace Girl Gifts</p>
                <p className='font-semibold'><s className='font-normal'>₹200</s> ₹150</p>
                <p className='text-sm line-clamp-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered There are many variations of passages of Lorem Ipsum available.</p>
              </div>
              <div className="font-semibold text-lg">
                ₹150
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex font-semibold  my-1 border-t-[1.5px] py-3 border-darkGreen border-opacity-65 justify-between items-center">
              <p>Subtotal</p>
              <p>₹150</p>
            </div>
            <div className="flex font-semibold text-xl my-1 border-t-[1.5px] py-3 border-darkGreen border-opacity-65 justify-between items-center">
              <p>Total</p>
              <p>₹150</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut