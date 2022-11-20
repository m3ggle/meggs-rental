import React from 'react'

const OfferCardImagePart = ({ onNavigationCallback, photoUrl }) => {
  return (
    <div
      onClick={onNavigationCallback}
      className="h-full min-w-[110px] rounded-lg bg-cover bg-center 500:absolute 500:top-0 500:left-0 500:h-[200px] 500:w-full 500:rounded-xl 1400:h-80"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)`,
        // backgroundImage: `url(${photoUrl[0]})`,
      }}
    ></div>
  );
};

export default OfferCardImagePart