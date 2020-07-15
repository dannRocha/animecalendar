import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import styled from 'styled-components'
import { FiHeart } from 'react-icons/fi'

const OverViewAnime =  styled.main`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    overflow-y: auto;

    position: relative;
    
    figure {
        margin: 0;
        position: relative;
        display: flex;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        figcaption {
            display: flex;
            position: absolute;
            justify-content: center;
            align-items: center;
            background: var(--_1-color);
            width: 100%;
            height: 100%;
            opacity: 0;

            color: #FFF;
            font-size: 20pt;
            transition: .3s;


            :hover {
                cursor: crosshair;
                opacity: 0.7;
            }
        }
    }

    section {
        background: var(--_1-color);

        header {
            h1 {
                font-size: 20pt;
                color: var(--_3-color);
            }
        }

        section {

            border-top: 2px solid var(--_3-color);
            color: var(--_3-color);

            ul {
                li.topics {
                    font-weight: bold;
                    .tag {
                        margin: 0 2px;
                        background: var(--_2-color);
                    }
                }
                border-bottom: 2px solid var(--_3-color);
                margin: 0;
                padding: 10px 30px;

            }

            details {
            
                cursor: pointer;
                background: var(--_2-color);
                padding: 10px 0;
                color: var(--_3-color);

                summary {
                    font-weight: bold;
                }
                
                p {
                    text-indent: 20pt;
                    text-align: justify;
                    padding: 0 10pt;
                }
            }
        }
    }
`

const FavoriteIcon =  styled( FiHeart )`
    
    position: fixed;
    top: 20%;
    right: 8%;
    margin: 0;
    padding: 0;
    font-size: 40pt;
    color: var(--_2-color);
    fill: ${ props => ( props?.enable === 'true' ) ? '#a00' : '#0000' };

    :hover {
        cursor: pointer;
        fill: var(--_2-color);
    }
`

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
                    <FavoriteIcon 
                        enable = { statusFavoriteIcon }
                        onClick = { () => 
                            setStatusFavoriteIcon( `${ !(statusFavoriteIcon === 'true')}` )
                        } 
                    />
                </section>
            </OverViewAnime>
            <BarBottom />
        </Container>
    )
}
