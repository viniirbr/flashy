import React from 'react'
import HeaderWrapper from './HeaderWrapper'
import { Button } from '@skynexui/components';


function Header() {
    return (
        <HeaderWrapper>
            <h1>FLASHY</h1>
            <Button
                label='SIGN IN'
                rounded='full'
                size='xl'
                colorVariant='accent'
                buttonColors={{mainColor:'#EFE7BC'}}
                styleSheet={{color: '#74BDCB', fontFamily: "'Monoton', cursive;", width:'150px'}}/>
        </HeaderWrapper>
    )
}

export default Header