import React from 'react'
import ReviewSection from '../../../../components/ratings/ReviewSection';
import styles from '../../../../style';

const OfferDetailsReviews = () => {
  return (
    <div className="flex w-full flex-col">
      <span className="text-lg text-lmGrey600 dark:text-dmGrey100">
        Ratings
      </span>
      <div
        className={`${styles.darkModeBorder} flex w-full flex-col gap-y-1 rounded-3xl bg-white p-6 shadow-md dark:bg-dmGrey900`}
      >
        <ReviewSection />
      </div>
    </div>
  );
}

export default OfferDetailsReviews