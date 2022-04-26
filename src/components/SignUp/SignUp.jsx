import React from 'react'
import SignUpWrapper from './SignUpWrapper';
import { TextField, Button } from '@mui/material';



function SignUp() {
  return (
    <SignUpWrapper>
      <TextField
        label='Your name'
        variant='outlined'
        sx={{ mb: 2 }}
        fullWidth={true} />
      <TextField label='Email' sx={{ mb: 2 }} />
      <TextField label='Password' type={'password'} sx={{ mb: 2 }} />
      <TextField label='Confirm password' sx={{ mb: 2 }} />
      <Button
        variant='contained'
        sx={{ mb: 2, background:'#484785' }}>Sign up</Button> {/*label='SIGN UP' buttonColors={{ mainColor: '#F57C00' }} fullWidth='true' />*/}

    </SignUpWrapper>
  )
}

export default SignUp