import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {logOutUser} from '../actions/actions'

const Navbar = () => {
    const dispatch=useDispatch() ;
    const auth=useSelector(state=>state.auth) ;
    return (
        <div className='navbar'>
        {/* Make the navbar in conditional rendering !!
        if the user is connected,just the home and link to Profile and log out*/}
        <Link to='/' className='link'>Home</Link>
        <Link to="/posts">Posts</Link>
        {auth.isAuth? (
            <>
            <Link to='/profile'>Profile</Link>
            <Link onClick={()=>dispatch(logOutUser())}>Log out</Link>
            </>
        )
         :(<>
         <Link to='/login' className='link'>Login</Link>
        <Link to='/register' className='link'>Register</Link>
         </>)}
    </div>
    )
}

export default Navbar
