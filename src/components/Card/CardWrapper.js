import styled from 'styled-components'

const CardWrapper = styled.div`
    width: 300px;
    height: 300px;
    background: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        bottom: 20px;
        right: 20px;
        cursor: pointer;
    }

    h3 {
        color: #74BDCB;
    }

`

export default CardWrapper;