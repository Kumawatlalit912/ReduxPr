import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated,children}) => {
    if(!isAuthenticated){
        return <Navigate to='/login' />
    }
  return children;
}

export default ProtectedRoute