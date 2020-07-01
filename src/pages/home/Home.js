import React from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import Main from '../components/Main/Main.js'
import BarBottom from '../components/BarBottom/BarBottom.js'

function Home() {
    return (
        <Container>
            <Header title = 'Home'/>
            <Main />
            <BarBottom />
        </Container>
    )
}

export default Home