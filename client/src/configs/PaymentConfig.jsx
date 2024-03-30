//Configs will be replaced by Admin (Backend Data)
const ContactConfig = {
    email: "giftvibes1612@gmail.com",
    phone: 9626474259,
    address: "C-BLOCK SKCT"
}

const razorpayConfig = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    key_secret: import.meta.env.VITE_RAZORPAY_SECRET_KEY,
    currency: "INR",
    name: 'GIFT VIBES',
}



export { ContactConfig, razorpayConfig }