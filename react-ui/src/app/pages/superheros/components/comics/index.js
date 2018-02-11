import React from 'react';
import { Icon } from 'react-fa';

export default function ComicLink(props) {
    const comiclink = props.link;

    if(comiclink) {
        return (
            <a href={comiclink} target='_blank'><Icon name='book' /> comiclink</a>
        );
    }
    return null;
}