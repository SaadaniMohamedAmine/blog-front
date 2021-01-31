import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUsers} from '../actions/actions'
const Home = () => {
    const auth=useSelector(state=>state.auth) ;
    const dispatch=useDispatch() ;
    useEffect(()=>{
       
       
    },[])
    return (
        <div>
            <h5>I am the home page</h5>
            <h6>Hello</h6>
        </div>
    )
}

export default Home
