import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

import MainLayout from '../../layouts/default';
import HeroInfo from './components/heroinfo';
import apiUrlSuperHeroInfo from '../../services/apiSuperHeroInfo';

export default class SuperHeroInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            superHeroInfo: []
        }

        this.hero = [];
        this.getCharacterInfo = this.getCharacterInfo.bind(this);

        this.getCharacterInfo();
    }

    getCharacterInfo() {
        //Test with Agent Brand
        let id = '1011297';
        let apiUrl = apiUrlSuperHeroInfo(id);

        fetchJsonp(apiUrl)
        .then((result) => {
            let superHeroInfo = result.json();

            superHeroInfo
            .then((hero) => {
                let heroInfo = hero.data.results[0];
                let hero_picture;
                let hero_description;

                if(heroInfo.thumbnail.path.includes('image_not_available')) {
                    hero_picture = 'https://storage.googleapis.com/superherosbyventeprivee/justiceleague.png';
                } else {
                    hero_picture = heroInfo.thumbnail.path + '.' + heroInfo.thumbnail.extension;
                }

                if(heroInfo.description === '') {
                    hero_description = 'Cool Super Hero!'
                }

                let hero_comics = [];
                for(let i = 0; i < heroInfo.comics.items.length; i++) {
                    hero_comics.push(
                        heroInfo.comics.items[i].name
                    )
                }

                let hero_series = [];
                for(let i = 0; i < heroInfo.series.items.length; i++) {
                    hero_series.push(
                        heroInfo.series.items[i].name
                    )
                }

                this.hero.push({
                    id: heroInfo.id,
                    name: heroInfo.name,
                    description: hero_description,
                    avatar: hero_picture,
                    comics: hero_comics,
                    series: hero_series
                });
                this.setState({superHeroInfo:this.hero});
                return this.hero;
            });
        })
        .catch(function(error) {
            console.log(error);
            return;
        });
    }

    render() {
        let { superHeroInfo } = this.state;
        return (
            <MainLayout>
                <HeroInfo heroInfo={superHeroInfo} />
            </MainLayout>
        )
    }
}
