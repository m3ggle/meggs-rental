import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getReviewsFirestore = async ({
  reviewSections = [],
  limit = 10,
  orderBy = "asc",
}) => {
  // get reviewSections
  reviewSections = await Promise.all(
    reviewSections.map((id) => getDoc(doc(db, "reviewSections", id)))
  );
  reviewSections = reviewSections.map((reviewSection) => reviewSection.data());

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
          .limit(limit)
          .orderBy("timestamp", orderBy)
      )
    )
  );

  // get reviews
  let reviews = [];
  reviewsPromise.map((item) => item.forEach((doc) => reviews.push(doc.data())));

  return reviews;
};
