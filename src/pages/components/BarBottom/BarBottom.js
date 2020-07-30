import React from 'react'
import { 
    FaHome as HomeIcon,
    FaBookmark as BookmarkIcon
}
from 'react-icons/fa'

import BarBottom, { Link } from './style.js'


export default function () {
        
    return (
        <BarBottom >
            <nav>
                <Link to = '/' > 
                    <HomeIcon /> 
                    <span>Home</span>
                </Link>
                <Link to = '/bookmarks'>
                    <BookmarkIcon />
                    <span>Bookmark</span>
                </Link>
            </nav>
        </BarBottom>
    )    
}
