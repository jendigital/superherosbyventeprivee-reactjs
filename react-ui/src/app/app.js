import React, { Component } from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

import SuperHeros from './pages/superheros'
import SuperHeroInfo from './pages/superheroinfo'
import SuperHeroNotFound from './pages/superheronotfound'

import './app.css'

class App extends Component {
    render() {
        return (
            <div id="container">
                <Switch>
                    <Route exact path='/' render={() => <SuperHeros store={this.props.store} history={this.props.history} />} />
                    <Route exact path='/superheros' render={() => <SuperHeros store={this.props.store} history={this.props.history} />} />
                    <Route exact path='/superhero/:heroId' render={() => <SuperHeroInfo store={this.props.store} history={this.props.history} />} />
                    <Route path='*' render={() => <SuperHeroNotFound store={this.props.store} history={this.props.history} />} />
                </Switch >
            </div>
        )
    }
}

export default App
