import React, { Component } from 'react';

import { Icon } from 'react-fa';

import MainLayout from '../../layouts/default';
import './index.css';

function HerosBlocs(props) {
    const heros = props.Heros;

    const HerosSort = heros.sort(function(hero1, hero2) {
        let heroA = hero1.name.toUpperCase(); // ignore upper and lowercase
        let heroB = hero2.name.toUpperCase(); // ignore upper and lowercase

        if (heroA < heroB) {
            return -1;
        }

        if (heroA > heroB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    const herosBloc = HerosSort.map(function(hero) {
        return (
            <div className='hero'>
                <div className='avatar'>
                    <img alt={hero.name} src={hero.avatar} />
                </div>
                <div className='hero-description'>
                    <span className='hero-name'>{hero.name}</span>
                    <div className='hero-link'>
                        <Icon name='book' /><a>details</a>
                        <Icon name='book' /><a>wiki</a>
                        <Icon name='book' /><a>comiclink</a>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div id='superheros'>
            {herosBloc}
        </div>
    );
}
export default class SuperHeros extends Component {
    constructor(props) {
        super(props);

        this.listOfHero = [
            {name: 'Wonder Woman', avatar: 'https://storage.googleapis.com/superherosbyventeprivee/wonder-woman.jpg'},
            {name: 'Harley Quinn & Joker', avatar: 'https://storage.googleapis.com/superherosbyventeprivee/harleyjoker.jpg'},
            {name: 'Superman', avatar: 'https://storage.googleapis.com/superherosbyventeprivee/manofsteal.jpg'},
        ] 
    }
    render() {
        return (
            <MainLayout>
                <HerosBlocs Heros={this.listOfHero} />
            </MainLayout>
        )
    }
}
