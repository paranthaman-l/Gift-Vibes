import { useState } from 'react'
import { razorpayConfig, testuserconfig } from '../../configs/PaymentConfig'
const CheckOut = () => {
  const [membership, setMembership] = useState(false)
  const [plandata, setPlandata] = useState({
    planName: '',
    planPrice: 0,
    planDays: 0,
    key: ''
  })
  const handleUpgrade = (planname, planprice, planddays) => {
    if (planprice > 0) {
      const options = {
        key: razorpayConfig.key,
        key_secret: razorpayConfig.key_secret,
        amount: planprice * 100,
        currency: razorpayConfig.currency,
        name: razorpayConfig.name,
        handler: (res) => {
          alert(res.razorpay_payment_id)
          setPlandata({
            planName: planname,
            planPrice: planprice,
            planDays: planddays,
            key: res.razorpay_payment_id
          })
          setMembership(true)
        },
        prefill: {
          name: testuserconfig.name,
          email: testuserconfig.email,
          contact: testuserconfig.contact
        },
        notes: {
          address: " office",
        },
        theme: {
          color: '#f5f5f7'
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
      console.log(options,pay);
    }
    else {
      alert("invalid amount")
    }

  }
  return (
    <div className='mt-20'><p className='cursor-pointer' onClick={()=>handleUpgrade("Premium",1000,29)}>CheckOut</p></div>
  )
}

export default CheckOut