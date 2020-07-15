import React from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import Main from '../components/Main/Main.js'
import BarBottom from '../components/BarBottom/BarBottom.js'


function Home() {
    
    const date = {
        format: new Date().toDateString().slice(0, 3),
        toString() { 
            return this.format 
        }
    }
    
    return (
        <Container>
            <Header title = 'Home'/>
            <Main 
                subTitle = {<time> { `${date} List` }</time> }
            />
            <BarBottom />
        </Container>
    )
}

export default Home