import React from 'react'

const HomepageNavbar = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-between rounded-b-lg bg-white/80 z-40 h-fit w-full py-6 px-14 backdrop-blur-lg dark:bg-dmGrey900/20">
      {/* logo */}
      <div className="items-center flex w-60 gap-x-2">
        <div className="h-11 w-11 bg-black rounded-full" />
        <span className="text-lg text-lmGrey800">Meggs Rental</span>
      </div>

      {/* links */}
      <div className="flex gap-x-6 text-lg text-lmGrey800">
        <span>Explore</span>
        <span>Chat</span>
        <span>Search</span>
        <span>Most Viewed</span>
        <span>About</span>
      </div>

      {/* user */}
      <div className="items-center flex w-60 gap-x-2 justify-end">
        <span className="text-lg text-lmGrey800">Meggle Bande</span>
        <div className="h-11 w-11 bg-black rounded-full" />
      </div>
    </div>
  );
}

export default HomepageNavbar