import {GET_POSTS} from '../actions/types'
let initialState={
    posts:[] ,
    users:[],
    loading:true 

}
const postReducer=(state=initialState,action)=>{
    switch(action.type) {
        case GET_POSTS :
            return {
                ...state,posts:action.payload,loading:false
            }
        default :
        return state ;
    }
} ;

export default postReducer ;
