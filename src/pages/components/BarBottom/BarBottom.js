import React from 'react'
import { FaHome as Home, FaBookmark as Bookmark } from 'react-icons/fa'
import BarBottom, { Link } from './style.js'


export default function () {
        
    return (
        <BarBottom >
            <nav>
                <Link to = '/' > 
                    <Home /> 
                    <span>Home</span>
                </Link>
                <Link to = '/bookmarks'>
                    <Bookmark />
                    <span>Bookmark</span>
                </Link>
            </nav>
        </BarBottom>
    )    
}
