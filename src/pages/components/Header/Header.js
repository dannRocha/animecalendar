import React from 'react'
import SideMenu from '../SideMenu/SideMenu.js'
import Header from './style.js'



export default function ({ title }){
    
    return (
        <Header>
            <SideMenu />
            <h1>{ title ?? 'Header' }</h1>
            <time>{ new Date().toLocaleDateString() }</time>
        </Header>
    )
}
