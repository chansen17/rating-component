import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function App() {

  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rating) => {
    setRating(rating);
    console.log(rating);
  }

  const handleSubmit = () => {
    setSubmitted(!submitted);
  }

  const handleRestart = () => {
    setSubmitted(!submitted);
    setRating(null);
  }

  return (
    <div className='grid w-full min-h-screen p-5 place-items-center'>
      {!submitted ? (
        <div className="w-full max-w-sm px-6 space-y-6 h-fit py-7 rounded-2xl bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="flex w-full">
          <div className='grid w-12 h-12 rounded-full bg-gray-700/50 place-items-center'>
              <FaStar className='text-orange-400' />
          </div>
        </div>
        <div className='space-y-2'>
          <motion.h2 initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0}} transition={{ type: 'tween', duration: 1}} className='text-2xl text-gray-200 md:text-3xl'>How did we do?</motion.h2>
          <motion.p  initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0}} transition={{ type: 'tween', duration: 1.5}} className='font-light text-gray-400 text-md md:text-lg'>Please let us know with your support request. All feedback is appreciated to help us improve our offering. </motion.p>
        </div>
        {/* rating */}
        <div className="flex items-center justify-between">
          {[1,2,3,4,5]?.map((item, index) => (
            <motion.button initial={{ opacity: 0, x: -5, scale: .75 }} animate={{ opacity: 1, x: 0, scale: 1}} transition={{ type: 'tween', delay: index * 0.1}} key={index} onClick={() => handleRating(index + 1)} className={`${index + 1 == rating ? 'bg-orange-400' : 'bg-gray-800'} h-12 w-12 md:h-14 md:w-14 rounded-full group grid place-items-center duration-200  hover:bg-gray-600`}>
              <span className={`${index + 1 == rating ? 'text-white' : null} text-gray-400 font-light text-md md:text-lg group-hover:text-white`}>{item}</span>
            </motion.button>
          ))}
        </div>
        <div>
          <button onClick={handleSubmit} type="button" disabled={rating === null} className='w-full px-4 py-3 font-medium text-center text-gray-200 uppercase bg-orange-400 rounded-full disabled:opacity-50'>Submit</button>
        </div>
      </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full max-w-sm px-6 space-y-6 h-fit py-7 rounded-2xl bg-gradient-to-t from-gray-900 to-gray-800">
          <motion.div initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1}} transition={{ type: 'tween' }}>
            {rating < 3 && <img className='h-24 w-28' src="/doctor.png" alt="" />}
            {rating === 3 && <img className='h-24 w-28' src="/girl-researching.png" alt="" />}
            {rating >= 4 && <img className='h-24 w-28' src="/thumbs-up.png" alt="" />}
          </motion.div>
          <div className='px-3 py-1 rounded-full bg-gradient-to-t from-gray-800 to-gray-700 w-fit'>
            <p className='text-orange-400'>You selected <span className="font-medium text-gray-200">{rating}</span> out of 5.</p>
          </div>
          <div className='space-y-2 text-center'>
            <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0}} transition={{ type: 'tween', duration: 1}} className='text-xl text-gray-200 md:text-2xl'>
              {rating < 3 &&  <span>We'll work on it!</span>}
              {rating === 3 &&  <span>We can do better!</span>}
              {rating === 4 &&  <span>Awesome!</span>}
              {rating === 5 &&  <span>Perfect!</span>}
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0}} transition={{ type: 'tween', duration: 1.5 }} className='font-light text-gray-400 text-md'>We appreciate you taking the time to give is a rating. If you ever need more support, don't hesitate to get in touch.</motion.p>
          </div>
          <button onClick={handleRestart} className='px-4 py-2 text-center rounded-full text-orange-400/50'>Restart</button>
        </div>
      )}
    </div>
  )
}
