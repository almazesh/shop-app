import React from 'react'
import { signUp } from '../Api/index';

export const useRegistration = () => {
  const post = React.useCallback(data => signUp(data), [])

  return {
    actions: {
      post
    }
  }  
} 