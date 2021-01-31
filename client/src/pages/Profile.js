import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadUser} from '../actions/actions'

const Profile = () => {
    const dispatch=useDispatch() ;
    const auth=useSelector(state=>state.auth) ;
    useEffect(()=>{
        dispatch(loadUser())
    },[])
    return (
        <div>
            <h4>I am the feed page !</h4>
            {auth.user&&(
                <h4>Hello {auth.user.firstName}</h4>
            )}
        </div>
    )
}

export default Profile
