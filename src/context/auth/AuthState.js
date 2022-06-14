import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
     REGISTER_SUCCESS,
     REGISTER_FAIL,
     USER_LOADED,
     AUTH_ERROR,
     LOGIN_SUCCESS,
     LOGIN_FAIL,
     LOGOUT,
     CLEAR_ERRORS

} from '../types';



const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state,dispatch] = useReducer(authReducer, initialState);

    // useEffect(() => {
    //   setAuthToken(state.token);
    // });

    if(localStorage.token){
      setAuthToken(localStorage.token);
    }


    //LOAD USER
    const loadUser = async () => {
        //@todo - load token into global headers

        if(localStorage.token){
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get('http://localhost:5000/api/auth');

            dispatch({type: USER_LOADED, payload: res.data});
        } catch (error) {

            dispatch({type: AUTH_ERROR});
        }
    }

    if (state.loading) {
      loadUser();
    }

    //REGISTER USER
    const register = async(formData) => {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        try {
          const res = await axios.post('http://localhost:5000/api/users', formData, config);
    
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
          });
    
          loadUser();
        } catch (err) {
          dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
          });
        }
      };

    //LOGIN USER
    const login = async(formData) => {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        try {
          const res = await axios.post('http://localhost:5000/api/auth', formData, config);
    
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          });

          console.log(res)
    
          loadUser();
        } catch (err) {
          dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
          });
        }
      };

    //LOGOUT
    const logout = async () => {
         dispatch({type: LOGOUT});
    }

    //CLEAR ERRORS
    const clearErrors = () => {
        dispatch({type: CLEAR_ERRORS});
    }

    return(
        <AuthContext.Provider
          value={{
             token: state.token,
             isAuthenticated: state.isAuthenticated,
             loading: state.loading.loading,
             user: state.user,
             error: state.error,
             register,
             loadUser,
             login,
             logout,
             clearErrors
          }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;