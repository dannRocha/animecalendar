import React, { useState } from 'react'
import styled from 'styled-components'


const Header = styled.header`
    background: var(--_2-color);
    text-align: center;
    display: flex;
    justify-content: space-between;
    color: var(--_3-color);
    date {
        font-weight: bold;
        font-size: 12pt;    
    }

    h1 {
        justify-content: center;
        align-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        margin: 0;
        font-size: 50pt;
    }

`
export default function ({ title }){
    
    return (
        <Header>
            <h1>{ title ?? 'Header' }</h1>
            <date>{ new Date().toLocaleDateString() }</date>
        </Header>
    )
}
