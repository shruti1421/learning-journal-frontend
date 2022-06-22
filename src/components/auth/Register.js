import React, { useState, useContext, useEffect } from 'react';
import { Navigate,Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/AlertContext';
import Wrapper from '../../assets/wrappers/Register';
const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const {name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    }
    else if(password!==password2){
      setAlert('Passwords do not match','danger');
    } else {
      register({
        name,
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
        Account <span className='text-primary'>Register</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className="form-label">Name</label>
          <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            className='form-input'
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className="form-label">Email Address</label>
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
        <div className='form-row'>
          <label htmlFor='password' className="form-label">Password</label>
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
        <div className='form-row'>
          <label htmlFor='password2' className="form-label">Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            className='form-input'
            required
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-block'
        />

         <p>
          Already a member? 
            <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>
      </div>
    </div>
    </Wrapper>
  );
};

export default Register;