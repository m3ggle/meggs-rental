import React from 'react'

const ReviewBar = ({value, color}) => {
  return (
    <div className="flex w-full max-w-[360px] items-start overflow-hidden rounded-full p-[1px]">
      <div
              className={`h-[5px] 
                ${
                  value <= 5 ? "w-[5px]" :
                  value <= 10 ? "w-[10%]" :
                  value <= 15 ? "w-[15%]" :
                  value <= 20 ? "w-[20%]" :
                  value <= 25 ? "w-[25%]" :
                  value <= 30 ? "w-[30%]" :
                  value <= 35 ? "w-[35%]" :
                  value <= 40 ? "w-[40%]" :
                  value <= 45 ? "w-[45%]" :
                  value <= 50 ? "w-[50%]" :
                  value <= 55 ? "w-[55%]" :
                  value <= 60 ? "w-[60%]" :
                  value <= 65 ? "w-[65%]" :
                  value <= 70 ? "w-[70%]" :
                  value <= 75 ? "w-[75%]" :
                  value <= 80 ? "w-[80%]" :
                  value <= 85 ? "w-[85%]" :
                  value <= 90 ? "w-[90%]" :
                  value <= 95 ? "w-[95%]" :
                  "w-[100%]" 
                }
              rounded-full ${color}`}
      ></div>
    </div>
  );
}

export default ReviewBar