import React from 'react'

const MobileCatalogOfferCardImgPart = ({photoUrl}) => {
  return (
    <div
      className="h-[118px] w-[110px] min-w-[110px] rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)`,
        // backgroundImage: `url(${photoUrl})`,
      }}
    >
      <i className="fa-solid fa-location-dot absolute left-3 top-3 hidden text-2xl text-white/40 drop-shadow"></i>
      <i className="fa-solid fa-heart absolute right-3 top-3 hidden text-2xl text-white/40 drop-shadow"></i>
    </div>
  );
}

export default MobileCatalogOfferCardImgPart