import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function App() {

  const [rating, setRating] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rating) => {
    setRating(rating);
    console.log(rating);
  }

  const handleSubmit = () => {
    setSubmitted(!submitted);
  }

  return (
    <div className='min-h-screen w-full grid place-items-center'>
      {!submitted ? (
        <div className="max-w-sm w-full h-fit py-7 rounded-2xl px-6 space-y-6 bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="w-full flex">
          <div className='h-12 w-12 rounded-full bg-gray-700/50 grid place-items-center'>
              <FaStar className='text-orange-400' />
          </div>
        </div>
        <div className='space-y-2'>
          <motion.h2 initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0}} transition={{ type: 'tween', duration: 1}} className='text-2xl md:text-3xl text-gray-200'>How did we do?</motion.h2>
          <motion.p  initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0}} transition={{ type: 'tween', duration: 1.5}} className='text-md md:text-lg font-light text-gray-400'>Please let us know with your support request. All feedback is appreciated to help us improve our offering. </motion.p>
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
          <button onClick={handleSubmit} type="button" className='w-full py-3 px-4 rounded-full bg-orange-400 text-center text-gray-200 font-medium uppercase'>Submit</button>
        </div>
      </div>
      ) : (
        <div className="max-w-sm w-full h-fit py-7 rounded-2xl px-6 space-y-6 bg-gradient-to-t from-gray-900 to-gray-800 flex flex-col justify-center items-center">
          <motion.div initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1}} transition={{ type: 'tween' }}>
            {rating < 3 && <img className='h-24 w-28' src="/doctor.png" alt="" />}
            {rating === 3 && <img className='h-24 w-28' src="/girl-researching.png" alt="" />}
            {rating >= 4 && <img className='h-24 w-28' src="/thumbs-up.png" alt="" />}
          </motion.div>
          <div className='bg-gradient-to-t from-gray-800 to-gray-700 w-fit rounded-full py-1 px-3'>
            <p className='text-orange-400'>You selected <span className="font-medium text-gray-200">{rating}</span> out of 5.</p>
          </div>
          <div className='text-center space-y-2'>
            <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0}} transition={{ type: 'tween', duration: 1}} className='text-gray-200 text-xl md:text-2xl'>
              {rating < 3 &&  <span>We'll work on it!</span>}
              {rating === 3 &&  <span>We can do better!</span>}
              {rating === 4 &&  <span>Awesome!</span>}
              {rating === 5 &&  <span>Perfect!</span>}
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0}} transition={{ type: 'tween', duration: 1.5 }} className='text-gray-400 font-light text-md'>We appreciate you taking the time to give is a rating. If you ever need more support, don't hesitate to get in touch.</motion.p>
          </div>
          <button onClick={handleSubmit} className='py-2 px-4 rounded-full text-orange-400/50 text-center'>Restart</button>
        </div>
      )}
    </div>
  )
}
