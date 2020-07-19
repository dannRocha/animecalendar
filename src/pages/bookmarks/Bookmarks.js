import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import Main from '../components/Main/Main.js'
import Card from '../components/Card/Card.js'
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

    const [ animeData, setAnimeData ] = useState([])

	useEffect(() => {
		var data = Object.entries( store.bookmark )
				        ?.flat()
				        .filter(item => !Number.isInteger( Number.parseInt(item) ) ) 
				        
		setAnimeData(data)
	
	}, store.bookmark)



    return (
        <Container>
            <Header title = 'Bookmarks' />
            {
                ( !!animeData?.length ) 
                    ? <Main
                    	subTitle = {'List'} 
                    	animes  = { animeData }
                      />
                    : <Empty />
            }
            <BarBottom />
        </Container>
    )
}

export default Bookmarks
