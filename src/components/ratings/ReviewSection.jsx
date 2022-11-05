import React from 'react'
import ReviewHeader from './ReviewHeader'
import ReviewList from './ReviewList'

const ReviewSection = () => {
  return (
      <div className='flex flex-col p-3 gap-y-2 rounded-lg w-full'>
          <ReviewHeader />
          <ReviewList />
          <button>Click Me</button>
    </div>
  )
}

export default ReviewSection