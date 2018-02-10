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
