import { collection, getDocs, limit, query, where } from "firebase/firestore";
import React from "react";
import Btn from "../../components/common/Btn";
import { db } from "../../firebase.config";

const PrivacyPolicy = () => {
  const handleClick = async () => {
    const q = query(
      collection(db, "offers"),
      where(
        "price.week",
        "<=",
        300,
        "&&",
        "name",
        "!=",
        "(Test) Lamborghini Countach"
      ),
      limit(5)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data().name, doc.data().price)
    });
  };

  return (
    <div className="gap-y2 flex h-screen w-full flex-col items-center justify-center">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div>
    </div>
  );

  // Example
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  //     (res) => res.json()
  //   )
  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  // return (
  //   <div>
  //     <h1>{data.name}</h1>
  //     <p>{data.description}</p>
  //     <strong>👀 {data.subscribers_count}</strong>{" "}
  //     <strong>✨ {data.stargazers_count}</strong>{" "}
  //     <strong>🍴 {data.forks_count}</strong>
  //   </div>
  // );
};

export default PrivacyPolicy;
