import React from 'react'
import { useSelector } from 'react-redux'

const UserInfo = () => {

  const quote = useSelector(state => state.quote.quote)

  return (
    <div className=' w-[30rem] text-white'>
      <div className=' bg-black h-[56px] text-white flex items-center justify-center border-b border-[#323232]'>
        <h1 className=' font-medium text-2xl'>Quotverse</h1>
      </div>
      <div className='px-10 pt-8'>
        <div className='sm:w-[64px] sm:h-[64px] bg-white rounded-full'></div>
        <h1>John Doe</h1>
        <p>johndoe</p>
        <p>UI Developer | Let's redesign the world</p>
      </div>
      {quote.length > 0 && <p>{quote.length}</p>}
    </div>
  )
}

export default UserInfo