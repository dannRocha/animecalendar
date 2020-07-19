import React,{ useState, useEffect, memo } from 'react'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.js'
import Card from './style.js'
import store from '../../../core/mod.js'
import { useBookmark } from '../../../context/bookmarkContext.js'


function  _Card( { anime } ) {

    const [ statusFavoriteIcon, setStatusFavoriteIcon ] = useState('false');
	const  { dataBookmark, addOrRemoveBookmark  } = useBookmark()
	const message = 'Unknown'

    
    useEffect( () => {
    
 		setStatusFavoriteIcon( `${ !!store.bookmark?.hasOwnProperty( anime.mal_id )}` )		
    
    }, [ statusFavoriteIcon, dataBookmark ] )


	
  
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

                                setStatusFavoriteIcon( `${ !(statusFavoriteIcon === 'true')}` )
                                addOrRemoveBookmark(anime)
                                
                            }
                        }
                    />
                </figcaption>
            </figure>
        </Card> )

}


export default memo( _Card )
