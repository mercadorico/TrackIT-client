import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, Button, Avatar, Toolbar } from '@mui/material';
import Input from './Input';
import PestControlOutlinedIcon from '@mui/icons-material/PestControlOutlined';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', password: '', confirmPassword: ''});

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const handleSubmit = () => {

  }

  const handleChange = (event) => {
    //square bracket was used for event.target.name since you cannot directly use a binding-value(variable value in js) as a key in object
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const switchMode = () => {
    setIsSignup((prevState) => !prevState); 
    setShowPassword(false);
  }

  return (
    <>
      <Toolbar/>
      <Container component='main' maxWidth='xs'>
          <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2}}>
              <Avatar sx={{bgcolor: 'primary.main', m: 1}}>
                  <PestControlOutlinedIcon />
              </Avatar>
              <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
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
                      <Button onClick={switchMode}>
                        {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                      </Button>
                    </Grid>
                  </Grid> 
                </Grid>
              </form>
          </Paper>
      </Container>
    </>
  )
}

export default Auth