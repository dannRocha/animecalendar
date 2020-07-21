import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import OverViewAnime, { CustomFavoriteIcon } from './style.js'

import { Time, Strings, Store } from '../../core/mod.js'
import { useBookmark } from '../../context/bookmarkContext.js'


export default function( props ) {

    const message = 'Unknown'
    const { anime } = useLocation()
    const [ statusFavoriteIcon, setStatusFavoriteIcon ] = useState('false');
    const { addOrRemoveBookmark } = useBookmark()
    const store = new Store()


    useEffect( () => {

    	setStatusFavoriteIcon( `${ !!store.bookmark?.hasOwnProperty( anime?.mal_id )}` )		
        
    }, [ statusFavoriteIcon ] )
    
    
    return (
        <Container>
            <Header title = 'Details' />
            <OverViewAnime>
                <figure>
                    <img 
                        src = {anime?.image_url} 
                        alt = {`Cover: ${ anime?.title ?? message }`}
                        loading = 'lazy'
                    />
                    <figcaption >Cover: {anime?.title ?? message}</figcaption>
                </figure>
                <section>
                    <header>
                        <h1> { anime?.title }</h1>
                    </header>
                    <section>
                        <ul>
                            <li className='topics' > Episodes: {anime?.episodes ?? message} </li>
                            <li className='topics' >
                                Genres: 
                                {
                                     anime?.genres.map(( genre, index ) => 
                                        <span 
                                            key = { `_@${anime?.image_url}${genre?.name }` } 
                                            className='tag' >#{ genre?.name } 
                                        </span>
                                    )
                                }
                            </li>
                            <li className='topics' > Source: {anime?.source ?? message} </li>
                            <li className='topics' >
                                Day: {Strings.capitalize( Time.weekday ) } 
                            </li>
                            <li className='topics' >
                                Producers: 
                                {
                                    anime?.producers.map(producer => 
                                        <span 
                                            key = {`_@${ anime?.image_url }${ producer.name }`} 
                                            className='tag'>#{ producer.name }
                                        </span> )
                                } 
                            </li>
                        </ul>
                        <details>
                            <summary>Synopsis</summary>
                            <p> {anime?.synopsis}</p>                                
                        </details>
                    </section>
                    <CustomFavoriteIcon 
                        enable = { statusFavoriteIcon }
                        onClick = { 
                             e => { 
								addOrRemoveBookmark(anime)
                                setStatusFavoriteIcon( `${ !(statusFavoriteIcon === 'true')}` )
							}
                        } 
                    />
                </section>
            </OverViewAnime>
            <BarBottom />
        </Container>
    )
}
