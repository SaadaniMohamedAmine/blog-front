import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT,
    GET_USERS,
    GET_POSTS

} from './types'
import axios from 'axios'
import setToken from '../setToken'

//register new user 
export const registerUser=(user)=>dispatch=>{
    axios.post('/user',user)
        .then(res=>dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:REGISTER_FAIL ,
            payload:err.response.data.errors
        }))

} 

//load user data  
export const loadUser=()=>dispatch=>{
  setToken() ;
  axios.get("/login")
    .then(res=>dispatch({
        type:LOAD_USER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>dispatch({
        type:LOAD_USER_FAIL ,
        payload:err.response.data.errors 
    }))
 }

 //login action 
 export const loginUser=(user)=>dispatch=>{
     axios.post('/login',user) 
       .then(res=>dispatch({
           type:LOGIN_SUCCESS,
           payload:res.data
       }))
       .catch(err=>dispatch({
           type:LOGIN_FAIL,
           payload:err.response.data.errors
       }))
 } 

 //logout action  
 export const logOutUser=()=>dispatch=>{
     dispatch({
         type:LOGOUT
     })
 }

 //test
  export const getUsers=()=>dispatch=>{
      axios.get('/user') 
        .then(res=>dispatch({
            type:GET_USERS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:LOAD_USER_FAIL,
            payload:err.response.data.errors
        }))
  }
  //actions for posts 
  export const loadPosts=()=>dispatch=>{
      axios.get('/post') 
         .then(res=>dispatch({
             type:GET_POSTS,
             payload:res.data 
         }))
         .catch(err=>console.log(err.message))
         
  } ;