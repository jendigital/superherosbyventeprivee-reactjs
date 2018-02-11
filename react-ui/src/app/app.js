import React, { Component } from 'react'
import { Route } from 'react-router'

import SuperHeros from './pages/superheros'
import SuperHeroInfo from './pages/superheroinfo'

import './app.css'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <SuperHeros store={this.props.store} history={this.props.history} />} />
                <Route exact path='/superheros' render={() => <SuperHeros store={this.props.store} history={this.props.history} />} />
                <Route exact path='/superhero/:heroId' render={() => <SuperHeroInfo store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}

export default App
