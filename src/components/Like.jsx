import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setlikedQuote, setdisLikedQuote } from '../redux/quoteSlice'
import Header from './Header'
import user from '../assets/user_small.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fheart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import Share from './Share'

const Like = () => {

  const dispatch = useDispatch();
  const likedQuotes = useSelector(state => state.quote.quote)
  const menu = useSelector(state => state.menu.activeMenu)

  const handleLike = (quote) => {
    if (likedQuotes.some((likedQuote) => likedQuote._id === quote._id)) {
      dispatch(setdisLikedQuote(quote)); // Remove from liked quotes
    } else {
      dispatch(setlikedQuote(quote)); // Add to liked quotes
    }
  };

  return (
    <div className={` text-white md:w-[40rem] w-full border-l border-r border-[#323232] ${menu?' max-md:hidden':'max-md:block h-full bg-black min-h-screen'}`}>
      <Header />
      {
        likedQuotes && likedQuotes.map(quote => {
          return (
            <div key={quote._id} className='border-b border-[#323232] p-4 text-white'>
              <div className='flex space-x-3 py-4'>
                <img src={user} className='rounded-full w-[46px] h-[46px]' alt='User Avatar' />
                <div className=' space-y-3'>
                  <div >
                    <h1>{quote.author}</h1>
                    <p className=' leading-5'>{quote.content}</p>
                  </div>
                  <div>
                    <div className='flex space-x-4 mb-2'>
                      {likedQuotes.some((likedQuote) => likedQuote._id === quote._id) ? (
                        <button onClick={() => handleLike(quote)}>
                          <FontAwesomeIcon icon={fheart} size='lg' color='red' />
                        </button>
                      ) : (
                        <button onClick={() => handleLike(quote)}>
                          <FontAwesomeIcon icon={faHeart} size='lg' />
                        </button>
                      )}
                      <button>
                        <FontAwesomeIcon icon={faComment} size='lg' />
                      </button>
                      <Share data={{ title: quote.author, text: quote.content }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
      }
    </div>
  )
}

export default Like