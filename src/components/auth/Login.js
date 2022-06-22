import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/AlertContext';
import { Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/Register';
const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  if (isAuthenticated) return <Navigate to='/' />;

  return (
    <Wrapper>
    <div className='form'>
      <div className='form-center'>
      <h3>
        Account <span className='text-primary'>Login</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div className='form-label'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            className='form-input'
            required
          />
        </div>
        <div className='form-label'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            className='form-input'
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-block'
        />
         <p>
          Haven't Register yet? 
            <Link to='/register' className='member-btn'>Register</Link>
        </p>
      </form>
    </div>
    </div>
    </Wrapper>
  );
};

export default Login;