import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { FaHome as Home, FaBookmark as Bookmark } from 'react-icons/fa';

import styled from 'styled-components'


const BarBottom = styled.footer`
    background: yellow;
    width: 100%;
    nav {

        display: grid;
        grid-template-columns: 50% 50%;
        height: 100%;
    }
`
    
const Link = styled( LinkRouter )`   
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--_1-color);
    border: 1px solid #000;
    
    :hover {
        transition: 500ms;
        background: #111;

        svg {
            color: var(--_2-color);
        }
    }

    svg {
        color: white;
        font-size: 30pt;
    }
`


export default function () {
        
    return (
        <BarBottom >
            <nav>
                <Link to = '/' > <Home /> </Link>
                <Link to = '/bookmarks'> <Bookmark /> </Link>
            </nav>
        </BarBottom>
    )    
}
