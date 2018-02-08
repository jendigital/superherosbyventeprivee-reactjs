import React, { Component } from 'react';

import MainLayout from '../../layouts/default';
import './index.css';

export default class SuperHeros extends Component {
    render() {
        return (
            <MainLayout>
                <div id='superheros'>
                    <h1>Super Heros</h1>
                </div>
            </MainLayout>
        )
    }
}
