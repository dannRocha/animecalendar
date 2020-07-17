import React from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import { MdLayersClear } from 'react-icons/md';
import styled from 'styled-components'


const BookmarkList = styled.section`
    display: flex;
    background: var(--_1-color);
    justify-content: center;
    align-items: center;
`

const EmptyStyled = styled.section`
    
    display: flex;
    background: var(--_1-color);
    justify-content: center;
    align-items: center;
    color: var(--_3-color);
    flex-direction: column;
    
    svg {
        font-size: 80pt;
    }
    
`



function Empty(){
    return (
        <EmptyStyled>
            <MdLayersClear />
            <h2>Empty</h2>
        </EmptyStyled>
    )
}

function Bookmarks() {

    let anime = []

    return (
        <Container>
            <Header title = 'Bookmarks' />
            {
                ( !!anime.length ) 
                    ? <BookmarkList data = { anime } />
                    : <Empty />
            }
            <BarBottom />
        </Container>
    )
}

export default Bookmarks