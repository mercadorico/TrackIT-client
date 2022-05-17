import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Paper, Typography, Grid, Button, Avatar, CircularProgress, Box } from '@mui/material';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';

import { signup, signin } from '../../actions/auth';
import Input from './Input';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector(state => state.authErrorMessage);
  const loading = useSelector(state => state.loadingReducer);

  // redirect to home if already logged in.
  useEffect(() => {
    if(localStorage.getItem('profile')) {
      navigate('/');
    }
  },[dispatch, navigate]);

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  }

  const handleChange = (event) => {
    //square bracket was used for event.target.name since you cannot directly use a binding-value(variable value in js) as a key in object
    setFormData({...formData, [event.target.name]: event.target.value});
    // reset error reducer
    dispatch({type: 'RESET_ERROR'});
  }

  const switchMode = () => {
    setIsSignup((prevState) => !prevState); 
    setFormData(initialState);
    setShowPassword(false);
  }

  const LoadingSpinner = () => {
    return (
      <>
        <CircularProgress size={72} sx={{m: 2}} />
        <Typography>{isSignup ? 'Signing Up...' : 'Logging In...'}</Typography>
      </>
    )
  }

  return (
    <> 
      <Box sx={{position: 'absolute', minWidth: '100%', minHeight: '100%', zIndex: -1, background: 'linear-gradient(to right, #004ff9, #fff94c)'}}></Box>
      <Container component='main' maxWidth='xs'>
          <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, mt: 5}}>
              <Avatar sx={{bgcolor: 'primary.main', m: 1}}>
                  <PestControlOutlinedIcon />
              </Avatar>
              <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
              {loading ? <LoadingSpinner /> : 
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} sx={{mt: 3}}>
                    {isSignup && (
                      <>
                        <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                        <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                      </>
                    )}
                    <Input name='email' label='Email' handleChange={handleChange} type='email' />
                    <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password' />}
                    <Button type='submit' fullWidth variant='contained' color='primary' sx={{ml: 2, mt: 3, mb: 2 }}>
                      {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent='center'>
                      <Grid item>
                        {authError && <Typography gutterBottom align='center' color='warning.dark' >{authError}</Typography> }
                        <Button onClick={switchMode}>
                          {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                      </Grid>
                    </Grid> 
                  </Grid>
                </form>
              }
          </Paper>
      </Container>
    </>
  )
}

export default Auth