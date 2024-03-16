import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setlikedQuote, setdisLikedQuote } from '../redux/quoteSlice'

const Like = () => {

  const dispatch = useDispatch();
  const likedQuotes = useSelector(state => state.quote.quote)

  const handleLike = (quote) => {
    if (likedQuotes.some((likedQuote) => likedQuote._id === quote._id)) {
        dispatch(setdisLikedQuote(quote)); // Remove from liked quotes
    } else {
        dispatch(setlikedQuote(quote)); // Add to liked quotes
    }
};

  return (
    <div>
      {
        likedQuotes && likedQuotes.map(quote => {
          return (
            <div key={quote._id}>
              <h1>{quote.author}</h1>
              <p>{quote.content}</p>
              <div className='flex space-x-2'>
                {likedQuotes.some((likedQuote) => likedQuote._id === quote._id) ? (
                  <button onClick={() => handleLike(quote)}>Dislike</button>
                ) : (
                  <button onClick={() => handleLike(quote)}>Like</button>
                )}
                <button>Comment</button>
                <button>Share</button>
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