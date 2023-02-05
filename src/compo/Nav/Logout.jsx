import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux'
import './common.css';

const Logout = () => {
    const dispatch=useDispatch();
    const toast=useToast();
    const multiFunc=()=>{
        dispatch({type:'logout'});
        toast({
            title:'Login',
            description:'Successfully logged out ',
            status:'success',
            duration: 3000,
            isClosable:true,
        })
    }
  return (
    <>
    <div className='center'>Logout</div>
    <button className='center' onClick={multiFunc}>Logout</button>
    </>
  )
}

export default Logout