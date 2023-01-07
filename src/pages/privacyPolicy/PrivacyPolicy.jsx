import React from "react";
import { useQuery } from "react-query";
import Btn from "../../components/common/Btn";

const PrivacyPolicy = () => {
  const handleClick = () => {
    
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-y2">
      <div className="h-fit w-fit">
        <Btn
          title="Click Me"
          type="button"
          uiType="primary"
          onClick={handleClick}
        />
      </div>
    </div>
  )


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
