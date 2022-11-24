import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFoundBg from "../../assets/img/notFound.webp"
import Btn from '../../components/common/Btn'

const NotFound = () => {
  const navigate = useNavigate()
  const handleGoHome = () => navigate("/homepage")
  
  return (
    <div className="relative h-screen w-full bg-white p-3 dark:bg-dmGrey900">
      <div
        className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[30px] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${NotFoundBg})` }}
      >
        <div className="absolute z-0 flex h-full w-full bg-black/30" />
        <span className="dark:text z-10 text-[120px] font-bold leading-[120px] tracking-tight 600:text-[200px] 600:leading-[200px]">
          404
        </span>
        <div className="z-10 flex flex-col items-center justify-center text-center gap-y-2">
          <span className="text-2xl 600:text-4xl">Page was not found</span>
          <span className="text-xl 600:text-2xl">
            Sorry, we couldn’t find the page you’re looking for.
          </span>
          <div className="w-[152px]">
            <Btn
              type="button"
              uiType="primary"
              title="Come Back Home"
              onClick={handleGoHome}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound