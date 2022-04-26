import React from 'react'
import HeaderWrapper from './HeaderWrapper'
import { Button } from '@mui/material';


function Header() {
    return (
        <HeaderWrapper>
            <h1>FLASHY</h1>
            <Button variant='contained'>Sign in</Button>

                {/*label='SIGN IN'
                rounded='full'
                size='xl'
                colorVariant='accent'
                buttonColors={{mainColor:'#484785'}}
    styleSheet={{color: '#189DC9', fontFamily: "'Monoton', cursive;", width:'150px'}}/>*/}
        </HeaderWrapper>
    )
}

export default Header