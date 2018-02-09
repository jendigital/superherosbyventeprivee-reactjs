import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { Icon } from 'react-fa';
import crypto from 'crypto';

import MainLayout from '../../layouts/default';
import './index.css';

function HerosBlocs(props) {
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

        this.state = {
            superheros: []
        }

        this.getCharacters = this.getCharacters.bind(this);
        this.queryString = this.queryString.bind(this);

        this.heros = [];
        this.getCharacters();
    }

    queryString() {
        let api_public = '298bab46381a6daaaee19aa5c8cafea5';
        let api_private = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
        let ts = 3;
        let tsprivkeypubkey = ts + api_private + api_public;
        let hash = crypto.createHash('md5').update(tsprivkeypubkey).digest('hex');
        let apiUrl = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts + '&apikey=' + api_public + '&hash=' + hash;

        return apiUrl;
    }

    getCharacters() {
        let apiUrl = this.queryString();

        fetchJsonp(apiUrl)
        .then((result) => {
            let superHeros = result.json();

            superHeros
            .then((heros) => {
                for(let i = 0; i < heros.data.count; i++) {
                    let hero = heros.data.results[i];
                    let hero_picture;

                    if(hero.thumbnail.path.includes('image_not_available')) {
                        hero_picture = 'https://storage.googleapis.com/superherosbyventeprivee/justiceleague.png';
                    } else {
                        hero_picture = hero.thumbnail.path + '.' + hero.thumbnail.extension;
                    }

                    this.heros.push({
                        id: hero.id,
                        name: hero.name,
                        avatar: hero_picture,
                    });
                }

                this.setState({superheros:this.heros});
                return this.heros;
            });
        })
        .catch(function(error) {
            console.log(error);
            return;
        });
    }

    render() {
        let { superheros } = this.state;
        return (
            <MainLayout>
                <HerosBlocs heros={superheros} />
            </MainLayout>
        )
    }
}
