import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setActiveTag } from '../redux/tagSlice'
import { setActiveFeed } from '../redux/feedSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { BiMenuAltRight } from "react-icons/bi";
import { toggleActiveMenu } from '../redux/menuSlice'

const TrendingTopics = () => {

    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.activeMenu)
    const activeFeed = useSelector(state => state.feed.activeFeed)

    const handleClick = (hash) => {
        dispatch(setActiveTag(hash))
        dispatch(toggleActiveMenu());
        dispatch(setActiveFeed('Home'))
    }

    const handleMenu = () => {
        dispatch(toggleActiveMenu());
    }

    const [tags, setTags] = useState([])

    useEffect(() => {
        axios.get('https://api.quotable.io/tags').then(res => {
            console.log(res.data);
            setTags(res.data)
        })
    }, [])

    return (
        <>
            <div className={`md:w-[30rem] text-white ${menu?'max-md:block w-full':'max-md:hidden'}`}>
                <div className=' bg-black h-[56px] flex text-white border-b border-l border-[#323232] justify-end items-center pr-6'>
                <div>
                    <BiMenuAltRight style={{
                        fontSize: '30px',cursor:'pointer'
                    }} className='block md:hidden' onClick={handleMenu}/>
                </div>
                </div>
                <div className=' text-xl text-white font-medium flex justify-between items-center p-6'>
                    <h1>Trending Topics</h1>
                    <FontAwesomeIcon icon={faGear} />
                </div>
                <div className='px-6 text-[#3897F0] cursor-pointer' onClick={() => handleClick('')}>show all quotes</div>
                {
                    tags.filter(tag=>tag.quoteCount!==0).map(tag => {
                        return (
                            <div key={tag._id} className=' p-6'>
                                <h1 className=' text-[#616161]'>{tag.name}</h1>
                                <p onClick={() => handleClick(tag.slug)} className=' cursor-pointer'>#{tag.slug}</p>
                                <p className='text-[#616161]'>{tag.quoteCount} quotes</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </>
    )
}

export default TrendingTopics