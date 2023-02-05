import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import './common.css';

const Login = ({isAuthenticated}) => {
    const dispatch=useDispatch();
    const toast=useToast();
    if(isAuthenticated){
        return <Navigate to='/logout' />
    }
    const multiFunc=()=>{
        dispatch({type:'login'});
        toast({
            title:'Login',
            description:'Successfully logged in ',
            status:'success',
            duration: 3000,
            isClosable:true,
        })
        
    }
  return (
    <>
    <div className='center'>Login</div>
    <button className='center' onClick={multiFunc}>Login</button>
    </>
  )
}

export default Login