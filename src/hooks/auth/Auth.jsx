import React from "react";
import { useAuthInitial } from "./useAuthInitial";
import { useAuthObserver } from "./useAuthObserver";
import { useAuthSetOffline } from "./useAuthSetOffline";
import { useAuthSetOnline } from "./useAuthSetOnline";

// initialize the auth hooks (useAuthObserver runs in the background)
const Auth = () => {
  useAuthInitial();
  useAuthObserver();
  useAuthSetOnline();
  useAuthSetOffline();

  return <></>;
};

export default Auth;
