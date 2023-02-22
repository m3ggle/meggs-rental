import React, { Suspense } from "react";
// import HomepageExplore from "./components/explore/HomepageExplore";
// import HomepageFooter from "./components/footer/HomepageFooter";
// import HomepageAbout from "./components/HomepageAbout";
// import HomepageChat from "./components/HomepageChat";
import HomepageHero from "./components/HomepageHero";
// import HomepageMostViewed from "./components/HomepageMostViewed";
import HomepageNavbar from "./components/navbar/HomepageNavbar";

//const About = React. Lazy(() import("./About"));

const HomepageExplore = React.lazy(() =>
  import("./components/explore/HomepageExplore")
);
const HomepageChat = React.lazy(() => import("./components/HomepageChat"));
// const HomepageMostViewed = React.lazy(() =>
//   import("./components/HomepageMostViewed")
// );
const HomepageAbout = React.lazy(() => import("./components/HomepageAbout"));
const HomepageFooter = React.lazy(() =>
  import("./components/footer/HomepageFooter")
);

const Homepage = () => {
  return (
    <div className="relative flex w-full max-w-[1440px] flex-col overflow-hidden">
      <HomepageNavbar />
      <HomepageHero />
      <Suspense fallback={<div>...Loading</div>}>
        <HomepageExplore />
      </Suspense>
      <Suspense fallback={<div>...Loading</div>}>
        <HomepageChat />
      </Suspense>
      <Suspense fallback={<div>...Loading</div>}>
        <HomepageAbout />
      </Suspense>
      <Suspense fallback={<div>...Loading</div>}>
        <HomepageFooter />
      </Suspense>
      {/* <HomepageSearch /> */}
      {/* <HomepageSearchByCity /> */}
      {/* <HomepageMostViewed /> */}
    </div>
  );
};

export default Homepage;
