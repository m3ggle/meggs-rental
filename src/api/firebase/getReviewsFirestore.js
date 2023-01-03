import { format } from "date-fns";
import { collection, doc, getDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getReviewsFirestore = async ({
  reviewSections = [],
  limitAmount = 10,
  orderBy = "asc",
}) => {
  if (reviewSections.length <= 0) {
    return null
  }
  
  // get reviewSections
  reviewSections = await Promise.all(
    reviewSections.map((id) => getDoc(doc(db, "reviewSections", id)))
  );
  reviewSections = reviewSections.map((reviewSection) => reviewSection.data());

  // summarize rating stats
  let ratingStats = {
    amount: 0,
    ratings: {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
    },
  };
  reviewSections.forEach((reviewSection) => {
    ratingStats.amount += reviewSection.amount;
    for (const [key, value] of Object.entries(reviewSection.ratings)) {
      ratingStats.ratings[key] += +value;
    }
  });

  // get data subCollection from reviewSection
  let reviewsPromise = await Promise.all(
    reviewSections.map((reviewSection) =>
      getDocs(
        collection(
          db,
          "reviewSections",
          reviewSection.reviewSectionId,
          "reviews"
        )
      )
    )
  );

  /*
                getDocs(
        collection(
          db,
          "reviewSections",
          reviewSection.reviewSectionId,
          "reviews"
        )
      )
        .limit(limitAmount)
        .orderBy("timestamp", orderBy)
          */

  // Todo: return reviewSection stats
  // Todo: single review needs data like displayName, photoURL...

  // get reviews
  let reviews = [];
  reviewsPromise.forEach((item) => item.forEach((doc) => {
    let review = doc.data();
    const tempDate = review.timestamp.toDate()
    review.timestamp = format(tempDate, "d. MMM yyyy");
    reviews.push(review);
  }));

  return { reviews, ratingStats };
};
