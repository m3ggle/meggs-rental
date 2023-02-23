import React, { Suspense } from "react";
import HomepageHero from "./components/HomepageHero";
import HomepageNavbar from "./components/navbar/HomepageNavbar";

const HomepageSafari = React.lazy(() => import("./components/HomepageSafari"));
const HomepageExplore = React.lazy(() =>
  import("./components/explore/HomepageExplore")
);
const HomepageChat = React.lazy(() => import("./components/HomepageChat"));
const HomepageAbout = React.lazy(() =>
  import("./components/about/HomepageAbout")
);
const HomepageFooter = React.lazy(() =>
  import("./components/footer/HomepageFooter")
);

const Homepage = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <div className="relative flex w-full max-w-[1440px] flex-col overflow-hidden">
      <HomepageNavbar />
      <HomepageHero />
      {isSafari ? (
        <HomepageSafari />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Homepage;
