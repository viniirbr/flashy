import React from 'react'
import { Button } from '@skynexui/components';
import SignUpWrapper from './SignUpWrapper';
import TextField from '@mui/material/TextField';



function SignUp() {
  return (
    <SignUpWrapper>
      <TextField />
      
      <Button label='SIGN UP' buttonColors={{ mainColor: '#F57C00' }} fullWidth='true' />

    </SignUpWrapper>
  )
}

export default SignUp