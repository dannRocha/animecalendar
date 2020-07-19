import React,{ useState, useEffect } from 'react'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.js'
import Card from './style.js'

import store from '../../../core/mod.js'


export default function( { anime, onClick } ) {

    const [ statusFavoriteIcon, setStatusFavoriteIcon ] = useState('false');

	const message = 'Unknown'
    
    useEffect( () => {
    
 		setStatusFavoriteIcon( `${ !!store.bookmark?.hasOwnProperty( anime.mal_id )}` )		
    
    }, [ statusFavoriteIcon ] )
    

    return ( 
        <Card 
            className = 'card' 
            to = { {pathname: `/anime/${anime.mal_id}`, anime}}
            favoriteEnable = { statusFavoriteIcon } 
        > 
            <main>
                <header>
                    <h3> { anime?.title ?? message }</h3>
                    <div> { anime?.genres.map(genre => (
                        <p 
                            key = { `${anime?.mal_id}${ genre?.name }`} 
                            className = 'tag'>#{ genre?.name ?? message }
                        </p>   
                    )) } 
                    </div>
                </header>
                <section>
                    <p> Episodes: {anime?.episodes ?? message}</p>
                </section>
            </main>
            <figure>
                <img 
                    src = {anime?.image_url} 
                    alt = {`Cover: ${ anime?.title ?? message }`}
                    loading = 'lazy'
                />
                <figcaption> 
                    <span>Cover: {anime?.title ?? message} </span>
                    <FavoriteIcon 
                        enable = { statusFavoriteIcon }
                        onClick = {
                           e => {
                                e.preventDefault()

								if( store.bookmark?.hasOwnProperty( anime.mal_id ) )
									store.removeBookmark(anime.mal_id)
								else
									store.addBookmark(anime.mal_id, anime )

                                setStatusFavoriteIcon( `${ !(statusFavoriteIcon === 'true')}` )
                            }
                        }
                    />
                </figcaption>
            </figure>
        </Card> )
}
