import React from 'react';
import { Icon } from 'react-fa';

import './index.css';

export default function HerosBlocs(props) {
    const heros = props.heros;

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
            <div className='hero' key={hero.name.toString()}>
                <div className='avatar'>
                    <img alt={hero.name} src={hero.avatar} />
                </div>
                <div className='hero-description'>
                    <span className='hero-name'>{hero.name}</span>
                    <div className='hero-link'>
                        <a><Icon name='book' /> details</a>
                        <a><Icon name='book' /> wiki</a>
                        <a><Icon name='book' /> comiclink</a>
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