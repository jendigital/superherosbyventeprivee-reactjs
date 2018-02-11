import React from 'react';

import './index.css';
import Comics from '../comics';
import Series from '../series';

export default function HeroInfo(props) {
    const hero = props.heroInfo;

    const heroInfo = hero.map(function(info) {
        return (
            <div id='hero' key={info.name.toString()}>
                <div className='identity'>
                    <div className='avatar'>
                        <img alt={info.name} src={info.avatar} />
                    </div>
                    <div className='hero-description'>
                        <h4 className='hero-name'>{info.name}</h4>
                        <span className='hero-name'>{info.description}</span>
                    </div>
                </div>
                <div className='appearin'>
                    <div>
                        <h3>Comics</h3>
                        <Comics list={info.comics} />
                    </div>
                    <div>
                        <h3>Series</h3>
                        <Series list={info.series} />
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div id='superHeroInfo'>
            {heroInfo}
        </div>
    );
}