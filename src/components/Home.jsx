import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setlikedQuote, setdisLikedQuote } from '../redux/quoteSlice'
import Share from '../components/Share'

const Home = () => {

    const dispatch = useDispatch();
    const likedQuotes = useSelector(state => state.quote.quote)

    const [quotes, setQuotes] = useState([])
    const activeTag = useSelector(state => state.tag.activeTag)

    useEffect(() => {
        axios.get(`https://api.quotable.io/quotes`).then(res => {
            console.log(res.data.results);
            setQuotes(res.data.results)
        })
    }, [])

    useEffect(() => {
        axios.get(`https://api.quotable.io/quotes?tags=${activeTag}`).then(res => {
            console.log(activeTag);
            console.log(res.data.results);
            setQuotes(res.data.results)
        })
    }, [activeTag])

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
                quotes === null && <p>Loading...</p>
            }
            {
                quotes && quotes.map(quote => {
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
                                <Share data={{title:quote.author,text:quote.content}}/>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Home