import React, { Component } from 'react'
import { Route } from 'react-router'

import SuperHeros from './pages/superheros'

import './app.css'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <SuperHeros store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App
