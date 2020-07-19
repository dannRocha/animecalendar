import React, { useState } from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import { MdLayersClear as EmptyListIcon } from 'react-icons/md';
import BookmarkList, { EmptyStyle } from './style.js'

import store from '../../core/mod.js'

function Empty(){
    return (
        <EmptyStyle>
            <EmptyListIcon />
            <h2>Empty</h2>
        </EmptyStyle>
    )
}

function Bookmarks() {

    const [ animeData, setAnimeData ] = useState( store.bookmark )


    return (
        <Container>
            <Header title = 'Bookmarks' />
            {
                ( !!animeData?.length ) 
                    ? <BookmarkList data = { animeData } />
                    : <Empty />
            }
            <BarBottom />
        </Container>
    )
}

export default Bookmarks