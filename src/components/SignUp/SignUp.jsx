import React from 'react'
import { Button, TextField } from '@skynexui/components';
import SignUpWrapper from './SignUpWrapper';


function SignUp() {
  return (
    <SignUpWrapper>
        <label>Your name</label>
        <TextField />
        <label>Your email</label>
        <TextField />
        <label>Your password</label>
        <TextField />
        <label>Your password (again)</label>
        <TextField />
        <Button label='SIGN UP'/>

    </SignUpWrapper>
  )
}

export default SignUp