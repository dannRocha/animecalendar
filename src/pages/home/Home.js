import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import Main from '../components/Main/Main.js'
import BarBottom from '../components/BarBottom/BarBottom.js'

import { Time, Strings, Store } from '../../core/mod.js'


function Home() {
    
    
    const [ animeData, setAnimeData ] = useState([])
    const store = new Store()

    
    useEffect(() => {
        async function main()
        {
            setAnimeData( await store.find( Time.weekday ) )
        }

        main()
        
    }, [] )


    return (
        <Container>
            <Header title = 'Today'/>
            {/* <SideMenu /> */}
            <Main 
                subTitle = {
                    <time> 
                        { `${ Strings.capitalize( Time.weekday ) } List` }
                    </time> 
                }
                animes = { animeData }
            />
            <BarBottom />
        </Container>
    )
}

export default Home
