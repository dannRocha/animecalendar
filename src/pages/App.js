import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './home/Home.js'
import Weekday from './weekday/Weekday.js'
import Bookmarks from './bookmarks/Bookmarks.js'
import OverviewAnime from './overviewAnime/OverviewAnime.js'
import BookmarkProvider from '../context/bookmarkContext.js'

function App() {

    return (
        <BookmarkProvider>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component = { Home } />
                    <Route path='/bookmarks' component = { Bookmarks }/>
                    <Route path='/anime/:id' component = { OverviewAnime } /> 
                    <Route path='/animes/:id' component = { Weekday } />
                </Switch>
            </BrowserRouter>
        </BookmarkProvider>
    )
}

export default App
