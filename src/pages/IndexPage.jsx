import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Home from '../components/Home'
import Like from '../components/Like'
import UserInfo from '../components/UserInfo'
import TrendingTopics from '../components/TrendingTopics'

const IndexPage = () => {

  const activeFeed = useSelector(state => state.feed.activeFeed)

  useEffect(() => { 
    console.log('activeFeed:', activeFeed)
   }, [activeFeed])

  return (
    <div className='flex'>
      <div>
        <UserInfo />
      </div>
      {activeFeed === 'Home' && <Home />}
      { activeFeed  === 'Like' && <Like />}
      <TrendingTopics />
    </div>
  )
}

export default IndexPage