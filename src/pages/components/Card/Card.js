import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Card = styled( Link )`

    text-decoration: none;
    color: var(--_3-color);
    background: var(--_1-color);
    border: 1px solid var(--_2-color);;
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 10px 0;
    justify-content: space-space-around;
    
    main {
        display: grid;
        grid-template-rows: 80% 20%;
        padding: 15px;

        header {
            font-size: 15pt;

            .tag {
                background: var(--_2-color);
                margin: 2px;
                font-size: 12pt;
                display: inline-block;
            }
        }

        section {
            background: var(--_2-color);
            text-align: center;
            color: var(--_3-color);
            display: flex;
            justify-content: center;
            align-items: center;
            
            font-size: 15pt;
        }
    }

    
    figure {
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        figcaption {                
            color: #FFF0;
            text-align: center;
            position: absolute;
            top: 0;
            font-size: 15pt;
            width: 100%;
            height: 100%;
            transition: .3s;

            :hover {
                background: #000a;
                color: #FFF;
            }
        }
    }
`

export default function ( { anime }){

    return ( 
        <Card 
            className = 'card' 
            to = { {pathname: `/anime/${anime.mal_id}`, anime}} 
        > 
            <main>
                <header>
                    <h3> { anime.title }</h3>
                    <div> { anime.genres.map(genre => (
                        <p className = 'tag'>#{ genre.name }</p>   
                    )) } 
                    </div>
                </header>
                <section>
                    <p> Episodes: {anime.episodes}</p>
                </section>
            </main>
            <figure>
                <img src = {anime.image_url} />
                <figcaption> Cover: {anime.title}</figcaption>
            </figure>
        </Card> )
}