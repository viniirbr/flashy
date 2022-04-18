import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    background: #189DC9;
    padding: 20px 15%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    h1 {
        font-family: 'Monoton', cursive;
        color: #F8F2F3;
        font-weight: 400;
        font-size: 3.5rem;
        margin: 0;
    }
`

export default HeaderWrapper;