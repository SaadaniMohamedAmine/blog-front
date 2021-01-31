import React,{useState,useEffect} from 'react'
import '../App.css'
import {registerUser} from '../actions/actions'
import {useDispatch,useSelector} from 'react-redux'

const Register = ({history}) => {
    const dispatch=useDispatch() ;
    const [user,setUser]=useState({
        firstName:"" ,
        lastName:"" ,
        phone:"" ,
        email:"",
        age:"",
        password:""
    }) ;
    const registerNow=(e)=>{
        e.preventDefault() ;
        dispatch(registerUser(user));
    };
    const handleChange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        })
    }
    const auth=useSelector((state)=>state.auth) ;
    const isAuth=useSelector((state)=>state.auth.isAuth) ;
    return (
        <div>
             <h4>I am the Register page </h4> 
            {/*we use the event : onSubmit to dispatch the action made on actiosn*/}
            <form className="form" onSubmit={registerNow}>
                <div className='sec'>
                  <label className="register-label">First name :</label>
                  <input type="text" className="register-input" name="firstName" onChange={handleChange} />
                </div>
                <div className='sec'>
                  <label className="register-label">Last name :</label>
                  <input type="text" className="register-input" name="lastName" onChange={handleChange}/>
                </div>
                <div className='sec'>
                  <label className="register-label">Phone:</label>
                  <input type="number" className="register-input" name="phone" onChange={handleChange}/>
                </div>
                <div className='sec'>
                  <label className="register-label">email :</label>
                  <input type="text" className="register-input" name="email" onChange={handleChange}/>
                </div>
                <div className='sec'>
                  <label className="register-label">Password :</label>
                  <input type="password" className="register-input" name="password" onChange={handleChange}/>
                </div>
                {/*to keep the uploading image good,we add an input with type file
                   and we must set up the name attribute with the same name in the backend part
                 */}
                
                <button type="submit" className='register-submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
