import React from 'react'

const CardButton = ({btnText}) => {
  return (
    <div>
    <button className='bg-navyBlue text-white py-2 px-4 sm:text-[0.8rem] text-[0.7rem] border-2 border-navyBlue  hover:bg-transparent hover:text-navyBlue transition-all ease-in duration-300'>{btnText}</button>
  </div>
  )
}

export default CardButton
