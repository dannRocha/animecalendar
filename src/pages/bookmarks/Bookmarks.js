import React from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import { MdLayersClear as EmptyListIcon } from 'react-icons/md';
import BookmarkList, { EmptyStyle } from './style.js'


function Empty(){
    return (
        <EmptyStyle>
            <EmptyListIcon />
            <h2>Empty</h2>
        </EmptyStyle>
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