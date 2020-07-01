import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './home/Home.js'
import Bookmarks from './bookmarks/Bookmarks.js'

function App() {
    return (
        <>

            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component = { Home } />
                    <Route path='/bookmarks' component = { Bookmarks }/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App