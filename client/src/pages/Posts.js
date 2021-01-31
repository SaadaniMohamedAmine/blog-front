import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getUsers} from '../actions/actions'

const Posts = () => {
    const dispatch=useDispatch() ;
    const main=useSelector(state=>state.main) ;
    useEffect(()=>{
       dispatch(getUsers()) ;
    },[]) ;
    console.log(main.posts) ;
    return (
        <div>
            <h5>I am the posts page !</h5>
            <h2>Hello from here !</h2>
            {main.posts.map(elt=>(
                <h3>{elt.title}</h3>
            ))}
        </div>
    )
}

export default Posts
