import React, { useState, useEffect } from 'react'
import Container  from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import Main from '../components/Main/Main.js'
import { useLocation } from 'react-router-dom'
import { Store, Strings } from '../../core/mod.js'


export default function()
{
    const store = new Store()
    
    const { pathname } = useLocation()
    const [weekday, setWeekday ] = useState('')
    const [ animeData, setAnimeData ] = useState([])

    useEffect(() => {
        
        async function main()
        {
            setWeekday(`${ pathname.replace('/animes/', '')}` )
            setAnimeData( await store.find( weekday ) )
        }
        
        main()
    
    }, [pathname, weekday] )
    

    return (
        <Container>
            <Header title = { Strings.capitalize( weekday ) } />
            <Main 
                subTitle = { <time> { `List` }</time> }
                animes = { animeData }
            />
            <BarBottom />
        </Container>
    )
}