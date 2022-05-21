import instance from '../../../configs'

export const signUp = data => instance.post('/user/' , data)

export const signIn = data => instance.post('/auth/token/login/', data)