import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFeed } from '../redux/feedSlice';
import { setActiveTag } from '../redux/tagSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { AiOutlineHome } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const Header = () => {

    const dispatch = useDispatch();
    const activeFeed = useSelector(state => state.feed.activeFeed)

    const handleClick = (type) => {
        dispatch(setActiveFeed(type))
        dispatch(setActiveTag(''))
    }

    return (
        <div className='flex flex-row bg-black h-[56px] text-white'>
            <div className=' w-[40rem] flex justify-around border-b border-l border-[#323232] items-center'>
                <div >
                    <button onClick={() => handleClick('Home')}>
                        {activeFeed === 'Home' ? <FontAwesomeIcon icon={faHouse}
                            style={{
                                fontSize: '24px'
                            }}
                        /> : <AiOutlineHome style={{
                            fontSize: '30px'
                        }} />}
                    </button>
                </div>
                <div className=''>
                    <button onClick={() => handleClick('Like')}>
                    {activeFeed === 'Home' ? <FontAwesomeIcon icon={faHeart}
                            style={{
                                fontSize: '24px'
                            }}
                        /> : <FcLike style={{
                            fontSize: '30px'
                        }} />}
                    </button>
                </div>
            </div>
            {/* <div className=' w-[30rem] border-b border-l border-[#323232]'></div> */}
        </div>
    )
}

export default Header