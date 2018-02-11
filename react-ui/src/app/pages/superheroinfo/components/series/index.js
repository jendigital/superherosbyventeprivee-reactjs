import React from 'react';

export default function Series(props) {
    const series = props.list;

    const listofseries = series.map(function(serie) {
        return (
            <li key={serie}>{serie}</li>
        )
    });

    return (
        <ul id='series'>
            {listofseries}
        </ul>
    );
}