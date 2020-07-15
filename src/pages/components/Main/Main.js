import React from 'react'
import styled from 'styled-components'

import Card from '../Card/Card.js'

const Main = styled.main`
    
    background: var(--_1-color);
    width: 100%;
    overflow-y: auto;
    
    header {
        background: var(--_1-color);
        text-align: center;
        font-size: 30pt;
        color: #FFF;
    }
`

export default function ({ animes, subTitle }){
    
    animes = [
        {
            url: "https://myanimelist.net/anime/41353/The_God_of_High_School",
            title: "The God of High School",
            image_url: "https://cdn.myanimelist.net/images/anime/1722/107269.jpg",
            episodes: 13,
            mal_id: 41353,
            genres: [
                { name: "Action" },
                { name: "Adventure"},
                { name: "Comedy" },
            ],
            synopsis: "It all began as a fighting tournament to seek out for the best fighter among all high school students in Korea. Mori Jin, a Taekwondo specialist and a high school student, soon learns that there is something much greater beneath the stage of the tournament.\r\n\r\n(Source: LINE Webtoon)",
            producers: [
                {name: 'MAPPA'},
            ],
    
            source: 'Web manga',
            airing_start: "2020-07-06T14:30:00+00:00"
        },
        {
            url: "https://myanimelist.net/anime/41353/The_God_of_High_School",
            title: "The God of High School",
            image_url: "https://cdn.myanimelist.net/images/anime/1722/107269.jpg",
            episodes: 13,
            mal_id: 41353,
            genres: [
                { name: "Action" },
                { name: "Adventure"},
                { name: "Comedy" },
            ],
            synopsis: "It all began as a fighting tournament to seek out for the best fighter among all high school students in Korea. Mori Jin, a Taekwondo specialist and a high school student, soon learns that there is something much greater beneath the stage of the tournament.\r\n\r\n(Source: LINE Webtoon)",
            producers: [
                {name: 'MAPPA'},
            ],
    
            source: 'Web manga',
            airing_start: "2020-07-06T14:30:00+00:00"
        },
    ]

    return (
        <Main>
            <header> {subTitle ?? 'subTitle'}</header>
            <section>
                {animes?.map(( anime, index ) => 
                    <Card key = {`_@${anime?.mal_id + index}`} anime = { anime } />) 
                }
            </section>
        </Main>
    )
}
