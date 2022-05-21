import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteAuthFalseList, RouteAuthTrueList } from '../../utils/Routelist';

const RouteComponent = ({token}) => {
  return (
    <Routes>
        {token 
          ? RouteAuthTrueList.map(r => <Route path={r.path} element={<r.element />} key={r.id}/>) 
          : RouteAuthFalseList.map(r => <Route path={r.path} element={<r.element />} key={r.id}/>) 
        }
        <Route 
          path='*' 
          element={<Navigate 
          to={token ? '/' : 'authorization'}/>}
        />
    </Routes>
  )
}

export default RouteComponent;