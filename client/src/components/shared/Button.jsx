import React from 'react'

const Button = ({title,style}) => {
  return (
    <button className={`p-2 bg-darkGreen text-white  uppercase font-semibold ${style}`}>{title}</button>
  )
}

export default Button