import React from 'react'
import Card from '../Card/Card.js'
import Main from './style.js'


export default function ({ animes, subTitle }){
     
    
    return (
        <Main>
            <header> {subTitle ?? 'subTitle'}</header>
            <section>
                {animes?.map( ( anime, index ) => 
                    <Card key = {`_@${anime?.mal_id + index}`} anime = { anime } /> ) 
                }
            </section>
        </Main>
    )
}
