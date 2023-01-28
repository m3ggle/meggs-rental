import React from 'react'
import { useAuthInitial } from './useAuthInitial';
import { useAuthObserver } from './useAuthObserver';

// initialize the auth hooks (useAuthObserver runs in the background)
const Auth = () => {
  useAuthInitial();
  useAuthObserver();

  return <></>;
}

export default Auth