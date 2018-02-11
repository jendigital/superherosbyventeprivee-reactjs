import React from 'react';
import { Icon } from 'react-fa';

export default function Details(props) {
    const details = props.link;

    if(details) {
        return (
            <a href={details} target='_blank'><Icon name='book' /> details</a>
        );
    }
    return null;
}