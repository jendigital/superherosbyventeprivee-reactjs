import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import Details from '../details';
import Wiki from '../wiki';
import ComicLink from '../comics';

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
                    <Link to={`/SuperHeroInfo/${hero.id}`} ><span className='hero-name'>{hero.name}</span></Link>
                    <div className='hero-link'>
                        <Details link={hero.details} />
                        <Wiki link={hero.wiki} />
                        <ComicLink link={hero.comic} />
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