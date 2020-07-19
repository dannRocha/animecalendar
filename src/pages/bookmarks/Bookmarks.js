import React from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import Main from '../components/Main/Main.js'
import { MdLayersClear as EmptyListIcon } from 'react-icons/md';
import { EmptyStyle } from './style.js'


import { useBookmark } from '../../context/bookmarkContext.js'


function Empty(){
    return (
        <EmptyStyle>
            <EmptyListIcon />
            <h2>Empty</h2>
        </EmptyStyle>
    )
}


function Bookmarks() {

	const { dataBookmark } = useBookmark()

    return (
            <Container>
                <Header title = 'Bookmarks' />
                {
                    ( !!dataBookmark?.length )
                		 ? < Main subTitle = { 'List' } animes = { dataBookmark }/>
                         : <Empty />
            	}
                <BarBottom />
            </Container>
    )
}

export default Bookmarks
