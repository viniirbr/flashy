import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #74BDCB;
    padding: 20px 15%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    h1 {
        font-family: 'Monoton', cursive;
        color: white;
        font-weight: 400;
        font-size: 3.5rem;
        margin: 0;
    }
`

export default HeaderWrapper;