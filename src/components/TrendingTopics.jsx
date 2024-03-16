import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {setActiveTag} from '../redux/tagSlice'

const TrendingTopics = () => {

    const dispatch = useDispatch();

    const handleClick = (hash) => {
        dispatch(setActiveTag(hash))
    }

    const [ tags, setTags ] = useState([])

    useEffect(() => {
        axios.get('https://api.quotable.io/tags').then(res => {
            // console.log(res.data);
            setTags(res.data)
        })
    }, [])

    return (
        <div>
            <div>TrendingTopics</div>
            {
                tags.map(tag => {
                    return (
                        <div key={tag._id}>
                            <h1>{tag.name}</h1>
                            <p onClick={()=>handleClick(tag.slug)} className=' cursor-pointer'>#{tag.slug}</p>
                            <p>{tag.quoteCount} quotes</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default TrendingTopics