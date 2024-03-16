import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveFeed } from '../redux/feedSlice';
import { setActiveTag } from '../redux/tagSlice';

const Header = () => {

    const dispatch = useDispatch();

    const handleClick = (type) => {
        dispatch(setActiveFeed(type))
        dispatch(setActiveTag(''))
    }

    return (
        <div className='flex flex-row'>
            <div>
                <h1>Quotverse</h1>
            </div>
            <div>
                <button onClick={() => handleClick('Home')}>Home</button>
            </div>
            <div>
                <button onClick={() => handleClick('Like')}>Like</button>
            </div>
            <div className=' w-36'></div>
        </div>
    )
}

export default Header