import React from 'react'
import { getAge } from "../../utilities/getAge";

const UserProfileHeader = ({firstName, lastName, birthday, email}) => {
    return (
    <div className="flex w-full flex-col items-center gap-y-2">
      <div
        className="h-[84px] w-[84px] rounded-full bg-cover bg-center shadow"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80)",
        }}
      ></div>
      <div className="flex w-full flex-col items-center gap-y-[2px] text-sm text-lmGrey600 dark:text-dmGrey100">
        <div className="flex w-full items-center justify-center gap-x-[2px]">
          <span className="w-full truncate text-right text-lg text-lmGrey800 dark:text-dmGrey25">
            {firstName} {lastName}
          </span>
          <div className="text-lg">•</div>
          <span className="w-full truncate text-left text-sm">
            {getAge(birthday)} years old
          </span>
        </div>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default UserProfileHeader