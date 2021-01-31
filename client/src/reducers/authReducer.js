import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  GET_USERS
} from '../actions/types'
const initialState={
  token:localStorage.getItem('token') ,
  user:null ,
  isAuth:false ,
  error :null 
}
const authReducer=(state=initialState,action)=>{
    switch(action.payload) {
      
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem('token',action.payload.token) ;
      return {
        ...state,
        token:action.payload.token,
        isAuth:true ,
        error:null
      };
      case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOAD_USER_FAIL:
          localStorage.removeItem('token') ;
          return {
            ...state,
            isAuth:false ,
            error:action.payload
          }
      case LOAD_USER_SUCCESS:
        return {
          ...state,
         user:action.payload,
         error:null
        };
        case LOGOUT :
          localStorage.removeItem('token') ;
          return {
            ...state,
            isAuth:false ,
            error:null ,
            user:null
          } ;
        default :
        return state ;
    };
    
}
export default authReducer ;