import React,{ useState, useEffect, memo } from 'react'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.js'
import Card from './style.js'
import { Store } from '../../../core/mod.js'
import { useBookmark } from '../../../context/bookmarkContext.js'


function  _Card( { anime } ) {

    const [ statusFavoriteIcon, setStatusFavoriteIcon ] = useState('false');
    const [ genresList, setGenresList ] = useState([])
    const  { dataBookmark, addOrRemoveBookmark  } = useBookmark()
    const store = new Store()
    const message = 'Unknown'

    
    function limitQuantityofGenres(){
        setGenresList(anime.genres.slice( 0, 3 ))
    }
    
    useEffect( () => {
    
 		setStatusFavoriteIcon( `${ !!store.bookmark?.hasOwnProperty( anime.mal_id )}` )		
         limitQuantityofGenres()
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
                    <div> 
                    { 
                        genresList.map(genre => (
                            <p 
                                key = { `${anime?.mal_id}${ genre?.name }`} 
                                className = 'tag'>#{ genre?.name ?? message }
                            </p>   
                        )) 
                    } 
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
