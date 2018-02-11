import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

import MainLayout from '../../layouts/default';
import HerosBlocs from './components/herosblocs';
import apiUrlSuperHeros from '../../services/apiSuperHeros';

export default class SuperHeros extends Component {

    constructor(props) {
        super(props);

        this.state = {
            superheros: []
        }

        this.getCharacters = this.getCharacters.bind(this);

        this.heros = [];
        this.getCharacters();
    }

    getCharacters() {
        let apiUrl = apiUrlSuperHeros();

        fetchJsonp(apiUrl)
        .then((result) => {
            let superHeros = result.json();

            superHeros
            .then((heros) => {
                for(let i = 0; i < heros.data.count; i++) {
                    let hero = heros.data.results[i];
                    let hero_picture;
                    let hero_details;
                    let hero_wiki;
                    let hero_comics;

                    if(hero.thumbnail.path.includes('image_not_available')) {
                        hero_picture = 'https://storage.googleapis.com/superherosbyventeprivee/justiceleague.png';
                    } else {
                        hero_picture = hero.thumbnail.path + '.' + hero.thumbnail.extension;
                    }

                    hero.urls[0] ? hero_details = hero.urls[0].url : hero_details = '';
                    hero.urls[1] ? hero_wiki = hero.urls[1].url : hero_wiki = '';
                    hero.urls[2] ? hero_comics = hero.urls[2].url : hero_comics = '';

                    this.heros.push({
                        id: hero.id,
                        name: hero.name,
                        avatar: hero_picture,
                        details: hero_details,
                        wiki: hero_wiki,
                        comic: hero_comics
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
