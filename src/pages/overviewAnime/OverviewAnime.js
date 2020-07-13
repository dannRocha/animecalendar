import React from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import BarBottom from '../components/BarBottom/BarBottom.js'
import styled from 'styled-components'

const OverViewAnime =  styled.main`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    overflow-y: auto;
    
    figure {
        margin: 0;
        position: relative;
        display: flex;

        img {
            width: 100%;
            height: 100%;
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

        background: var(--_1-color);
    }
`

export default function ( props ) {
   
    const { anime } = props?.location 

    return (
        <Container>
            <Header title = 'Anime' />
            <OverViewAnime>
                <figure>
                    <img src = { anime?.image_url } />
                    <figcaption >Cover: {anime?.title}</figcaption>
                </figure>
                <section>
                    <header>
                        <h1> { anime?.title }</h1>
                    </header>
                    <section>
                        <ul>
                            <li className='topics' >Episodes: {anime?.episodes} </li>
                            <li className='topics' >Genres: {anime?.genres.map(genre => <span className='tag'>#{ genre.name }</span>)}</li>
                            <li className='topics' >Source: {anime?.source}</li>
                            <li className='topics' >Day: {new Date(anime?.airing_start).toDateString().slice(0, 3)} </li>
                            <li className='topics' >Producers: {anime?.producers.map(producer => <span className='tag'>#{ producer.name }</span>)} </li>
                        </ul>
                        <details>
                            <summary>Synopsis</summary>
                            <p> {anime?.synopsis}</p>                                
                        </details>
                    </section>
                </section>
            </OverViewAnime>
            <BarBottom />
        </Container>
    )
}
