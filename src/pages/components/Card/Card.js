import React,{ useState, useEffect } from 'react'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon.js'
import Card from './style.js'


export default function( { anime } ) {

    const [ statusFavoriteIcon, setStatusFavoriteIcon ] = useState('false');
    
    useEffect( () => {

        console.log( 'Novo estado do Icone: ', statusFavoriteIcon )
    
    }, [ statusFavoriteIcon ] )
    

    return ( 
        <Card 
            className = 'card' 
            to = { {pathname: `/anime/${anime.mal_id}`, anime}}
            favoriteEnable = { statusFavoriteIcon } 
        > 
            <main>
                <header>
                    <h3> { anime?.title }</h3>
                    <div> { anime?.genres.map(genre => (
                        <p 
                            key = { `${anime?.mal_id}${ genre?.name }`} 
                            className = 'tag'>#{ genre?.name }
                        </p>   
                    )) } 
                    </div>
                </header>
                <section>
                    <p> Episodes: {anime?.episodes}</p>
                </section>
            </main>
            <figure>
                <img 
                    src = {anime?.image_url} 
                    alt = {`Cover: ${ anime?.title }`}
                    loading = 'lazy'
                />
                <figcaption> 
                    <span>Cover: {anime?.title} </span>
                    <FavoriteIcon 
                        enable = { statusFavoriteIcon }
                        onClick = {
                            e => {
                                e.preventDefault()
                                setStatusFavoriteIcon( `${ !(statusFavoriteIcon === 'true')}` )
                            }
                    }/>
                </figcaption>
            </figure>
        </Card> )
}