import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setlikedQuote, setdisLikedQuote } from '../redux/quoteSlice'
import Share from '../components/Share'
import user from '../assets/user_small.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fheart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import Header from './Header'

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
        <div className='w-[40rem]'>
            {
                quotes === null && <p>Loading...</p>
            }
            <Header />
            {
                
                quotes && quotes.map(quote => {
                    return (
                        <div key={quote._id} className='border-b border-l border-r border-[#323232] p-4 text-white'>
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
                                                    <FontAwesomeIcon icon={fheart} size='lg' color='red'/>
                                                </button>
                                            ) : (
                                                <button onClick={() => handleLike(quote)}>
                                                    <FontAwesomeIcon icon={faHeart} size='lg'/>
                                                </button>
                                            )}
                                            <button>
                                                <FontAwesomeIcon icon={faComment} size='lg'/>
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

export default Home;