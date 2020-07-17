import React from 'react'
import Header from './style.js'


export default function ({ title }){
    
    return (
        <Header>
            <h1>{ title ?? 'Header' }</h1>
            <time>{ new Date().toLocaleDateString() }</time>
        </Header>
    )
}
