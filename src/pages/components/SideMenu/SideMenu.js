import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import {  
    MdExpandMore as ExpandMoreIcon,
    MdExpandLess as ExpandLessIcon 
} from 'react-icons/md'

import { 
    AiOutlineMenuFold as MenuFoldIcon,
    AiOutlineMenuUnfold as MenuUnfoldIcon 
} 
from 'react-icons/ai'

import { FaRegCalendarAlt as CalendarIcon } from 'react-icons/fa'
import { RiSunCloudyLine as SunIcon } from 'react-icons/ri'

import { Store, Strings } from '../../../core/mod.js'
import Aside from './style.js'



export default function() {
    
    const [ visible, setVisible ] = useState( false )
    const [ expand, setExpand ] = useState( true )
    const store = new Store();

    const { pathname } = useLocation()
    const [ listDays, setListDays ] = useState( [] )
    
    
    useEffect(() => {

        async function load()
        {
            setListDays( 
                Object.keys( await store.findAll() )
                    .slice(3)
                    .map(day => Strings.capitalize( day ) )
            )
        }

        load()

    }, [pathname])


    useEffect(() => {

        document.addEventListener( "mousedown", event => {
            
            event.preventDefault()
            
            const { offsetLeft, offsetWidth } = document.querySelector('.side-menu')
            
            if( !offsetLeft && event.x > offsetWidth )
                setVisible( false )
        
        });

        return () => document.removeEventListener( "mousedown", () => {}  )

    }, [])

    function toogleExpandListDay() {
        setExpand( !expand )
    }

    return (
        <Aside 
            className = 'side-menu' 
            visible = { visible }
            expand = { expand }    
        >
            <nav
            > 
                <header>
                    { 
                        ( visible )
                            ? <MenuFoldIcon onClick = { () => setVisible( !visible ) }/>
                            : <MenuUnfoldIcon onClick = { () => setVisible( !visible ) }/>
                    }
                </header>
                <section>
                    <ul>
                        <p onClick = { toogleExpandListDay } >    
                            <CalendarIcon />
                            Day 
                            {( expand )
                                ? <ExpandMoreIcon /> 
                                : <ExpandLessIcon />} 
                        </p>
                        {
                            ( expand) 
                            ? listDays.map(day => 
                                <Link 
                                    to = { { pathname: `/animes/${String( day ).toLowerCase()}`}} 
                                    onClick = { () => setVisible( !visible ) }
                                >
                                    <li 
                                        // className = {
                                        //     ( !pathname.match(/day/ig) )
                                        //         ? 'enable'
                                        //         : null
                                        //  } 
                                    >
                                        <SunIcon />
                                        { day }
                                    </li>
                                </Link>
                            )
                            : null
                        }
                    </ul>
                </section>
            </nav>
        </Aside>
    )
}