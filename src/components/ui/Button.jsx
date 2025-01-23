import React from 'react'

const Button = ({btnText}) => {
  return (
    <div>
      <button className='bg-navyBlue text-white py-3 px-5 sm:text-lg text-sm border-2 border-navyBlue  hover:bg-transparent hover:text-navyBlue transition-all ease-in duration-300'>{btnText}</button>
    </div>
  )
}

export default Button
