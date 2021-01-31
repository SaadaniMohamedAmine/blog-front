import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loginUser} from '../actions/actions'
import '../App.css'
const Login = ({history}) => {
    const dispatch=useDispatch() ;
    const auth=useSelector(state=>state.auth) ;
    const [user,setUser]=useState({
        email:"",
        password:""
    });
    const [errors,setErrors]=useState(null) ;
    const login=(e)=>{
               e.preventDefault() ;
               dispatch(loginUser(user)) 
    } ;
    const msg=()=>{
        console.log(user) ;
    }
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
      if(auth.isAuth) {
          history.push('/profile')
      }
      if(auth.error) {
          setErrors(auth.error) ;
          setTimeout(()=>{
              setErrors()
          },5000)
      };
     
    },[auth.isAuth,auth.error]) ;
    console.log(auth.isAuth) ;
    console.log(auth.token) ;
    return (
        <div>
            <h6>I am the login page </h6>
            <form className="form">
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                {errors &&  errors.map(el=><h4>{el.msg}</h4>)}
                <button onClick={login}>Login </button>
            </form>
        </div>
    )
}

export default Login
