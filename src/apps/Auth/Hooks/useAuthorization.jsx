import { signIn } from "../Api"
import React from 'react';

export const useAuthorization = () => {
  const post = React.useCallback(data => signIn(data) , [])

  return {
    actions:{
      post
    }
  }
}