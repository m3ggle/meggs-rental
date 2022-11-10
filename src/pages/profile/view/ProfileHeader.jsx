import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileHeader = ({ title }) => {
    const navigate = useNavigate()
    const handleGoBack = () => navigate("/profile")
  return (
    <div className="flex w-full items-center justify-center gap-x-2 py-3 text-lmGrey600">
      <i
        onClick={handleGoBack}
        className="fa-solid fa-chevron-left cursor-pointer flex h-6 w-6 items-center justify-center text-[20px]"
      />
      <span className="w-full text-center text-2xl">{title}</span>
      <i className="h-6 w-6" />
    </div>
  );
}

export default ProfileHeader