import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background: red;
    width: 100%;
`
export default function ({ title }){
    return (
        <Header>
            <h1>{ title ?? 'Header' }</h1>
        </Header>
    )
}
