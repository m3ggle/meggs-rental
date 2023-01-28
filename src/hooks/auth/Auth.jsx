import React from 'react'
import { useAuthInitial } from './useAuthInitial';
import { useAuthObserver } from './useAuthObserver';
import { useAuthSetOnline } from "./useAuthSetOnline";

// initialize the auth hooks (useAuthObserver runs in the background)
const Auth = () => {
  useAuthInitial();
  useAuthObserver();
  useAuthSetOnline()

  return <></>;
}

export default Auth