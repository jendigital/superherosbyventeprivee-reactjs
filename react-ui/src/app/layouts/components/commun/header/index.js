import React, { Component } from 'react';
//import { Icon } from 'react-fa';
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div id='title'>
                    <h2>Super Heros</h2>
                    <div id='subheader' ><h3>By</h3> <img alt='vente privee' src='https://storage.googleapis.com/superherosbyventeprivee/venteprivee_logo.png' /></div>
                </div>
            </div>
        );
    }
}