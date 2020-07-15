import React from 'react'
import styled from 'styled-components'


const Header = styled.header`
    background: var(--_2-color);
    text-align: center;
    display: flex;
    justify-content: space-between;
    color: var(--_3-color);
    
    time {
        font-weight: bold;
        font-size: 12pt;
        padding: 10px;    
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 100%;
        margin: 0;
        font-size: 3.5em;
    }

    @media only screen and (max-width: 360px) {    
        
        h1 {
            font-size: 2.5em;
        }

        time {
            font-size: 10pt;
       }    
    }
`
export default function ({ title }){
    
    return (
        <Header>
            <h1>{ title ?? 'Header' }</h1>
            <time>{ new Date().toLocaleDateString() }</time>
        </Header>
    )
}
