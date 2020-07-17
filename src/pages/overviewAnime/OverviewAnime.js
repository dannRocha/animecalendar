import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import OverViewAnime, { CustomFavoriteIcon } from './style.js'


export default function( props ) {
   
    const { anime } = props?.location 
    const [ statusFavoriteIcon, setStatusFavoriteIcon ] = useState('false');
    

    useEffect( () => {
        console.log( 'Novo estado do Icone: ', statusFavoriteIcon )
    
    }, [ statusFavoriteIcon ] )
    
    
    return (
        <Container>
            <Header title = 'Details' />
            <OverViewAnime>
                <figure>
                    <img 
                        src = {anime?.image_url} 
                        alt = {`Cover: ${ anime?.title }`}
                        loading = 'lazy'
                    />
                    <figcaption >Cover: {anime?.title}</figcaption>
                </figure>
                <section>
                    <header>
                        <h1> { anime?.title }</h1>
                    </header>
                    <section>
                        <ul>
                            <li className='topics' > Episodes: {anime?.episodes} </li>
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
                            <li className='topics' > Source: {anime?.source} </li>
                            <li className='topics' >
                                Day: { new Date(anime?.airing_start).toDateString().slice(0, 3) } 
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
                        onClick = { e => 
                            setStatusFavoriteIcon( `${ !(statusFavoriteIcon === 'true')}` )
                        } 
                    />
                </section>
            </OverViewAnime>
            <BarBottom />
        </Container>
    )
}
