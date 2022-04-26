import styled from 'styled-components';

const HomeWraper = styled.main `
    display: flex;
    flex-direction: column;
    padding: 10px;

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

    @media screen and (min-width: 600px) {
        section {
            flex-direction: row;
        }
    }

    @media screen and (min-width: 900px) {
        padding: 20px 15%;
    }
`

export default HomeWraper;