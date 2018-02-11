import React from 'react';
import { Icon } from 'react-fa';

export default function Wiki(props) {
    const wiki = props.link;

    if(wiki) {
        return (
            <a href={wiki} target='_blank'><Icon name='book' /> wiki</a>
        );
    }
    return null;
}