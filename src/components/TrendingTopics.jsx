import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTag } from '../redux/tagSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const TrendingTopics = () => {

    const dispatch = useDispatch();

    const handleClick = (hash) => {
        dispatch(setActiveTag(hash))
    }

    const [tags, setTags] = useState([])

    useEffect(() => {
        axios.get('https://api.quotable.io/tags').then(res => {
            // console.log(res.data);
            setTags(res.data)
        })
    }, [])

    return (
        <>
            <div className=' w-[30rem] text-white'>
                <div className=' bg-black h-[56px] text-white border-b border-l border-[#323232]'>
                </div>
                <div className=' text-xl text-white font-medium flex justify-between items-center p-6'>
                    <h1>Trending Topics</h1>
                    <FontAwesomeIcon icon={faGear} />
                </div>
                <div className='px-6 text-[#3897F0] cursor-pointer' onClick={() => handleClick('')}>show all quotes</div>
                {
                    tags.map(tag => {
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