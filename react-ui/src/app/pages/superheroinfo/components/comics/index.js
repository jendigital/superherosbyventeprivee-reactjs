import React from 'react';

export default function Comics(props) {
    const comics = props.list;

    const listofcomics = comics.map(function(comic) {
        return (
            <li key={comic}>{comic}</li>
        )
    });

    return (
        <ul id='comics'>
            {listofcomics}
        </ul>
    );
}