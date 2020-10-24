import React from 'react'
import Navbar from '@Components/Navbar/Navbar'
import Tweets from '@Pages/Tweets/Tweets'
import Home from '@Pages/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/Tweets" component={Tweets} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
