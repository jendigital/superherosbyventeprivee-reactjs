import React, { Component } from 'react';
import './index.css';

import MainLayout from '../../layouts/default';

export default class SuperHeroNotFound extends Component {
    render() {
        return (
            <MainLayout>
                <div id='SuperHeroNotFound'>
                    <h3>Not Any <span>Super Heros</span> Here, There are perfectly hide!</h3>
                    <h4>Are you sure, you are searching in the right place?</h4>
                </div>
            </MainLayout>
        )
    }
}
