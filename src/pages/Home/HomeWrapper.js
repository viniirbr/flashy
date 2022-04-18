import styled from 'styled-components';

const HomeWraper = styled.main `
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    >h2 {
        font-size: 2.3rem;
        color: white;
    }

    >h2 span {
        color: #484785;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`

export default HomeWraper;