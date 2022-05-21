import React from 'react'
import RouteComponent from './Routes/RouteComponent'

export const Layout = () => {
  const token = localStorage.getItem('token')

  return <RouteComponent token={token}/>
}

