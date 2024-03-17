import React from 'react'
import { useSelector } from 'react-redux'
import user from '../assets/user.png'

const UserInfo = () => {

  const quote = useSelector(state => state.quote.quote)

  return (
    <div className='w-[30rem] text-white sm:block hidden'>
      <div className=' bg-black h-[56px] text-white flex items-center justify-center border-b border-[#323232]'>
        <h1 className=' font-medium text-2xl'>Quotverse</h1>
      </div>
      <div className='px-10 pt-8'>
        <img src={user} alt="" className=':w-[64px] :h-[64px] rounded-full' />
        <h1 className=' text-xl font-medium mt-2'>John Doe</h1>
        <p className=' text-sm my-2'>johndoe</p>
        <p className=' text-sm'>UI Developer | Let's redesign the world</p>
        {quote.length > 0 && <p className=' text-[#616161] mt-3'>{quote.length}{quote.length>1?' likes':' like'}</p>}
      </div>
    </div>
  )
}

export default UserInfo