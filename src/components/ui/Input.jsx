import React from 'react'

const Input = ({placeholder , name , value, onchange}) => {
  return (
    <>
       <input type="text" placeholder={placeholder} name={name} value={value} className=' text-sm border border-slate-800 py-3 px-4 w-full outline-none focus:shadow-sm focus:shadow-navyBlue transition-all ease-in duration-200' onChange={onchange} />
    </>
  )
}

export default Input
