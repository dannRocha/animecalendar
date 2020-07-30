import styled from 'styled-components'


const Container = styled.section`

    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 18% auto 9%;
    height: 100vh;

    @media only screen and (max-height: 530px) {    
        grid-template-rows: 16% auto 13%;
    }
`

export default Container