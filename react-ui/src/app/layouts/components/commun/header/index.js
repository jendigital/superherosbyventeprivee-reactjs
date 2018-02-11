import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div id='header'>
                <div id='title'>
                    <Link to='/superheros'><h2>Super Heros</h2></Link>
                    <div id='subheader' >
                        <h3>By</h3> 
                        <a href='http://group.vente-privee.com/fr-FR/JobsOffers.aspx'>
                            <img alt='vente privee' src='https://storage.googleapis.com/superherosbyventeprivee/venteprivee_logo.png' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}