import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <ul>
                    <li><a id='jendigital' alt='website in progress' href='https://jendigitalvision.herokuapp.com/'>Jen Digital Vision </a></li>
                    <li><a alt='JenDigital Github' href='https://github.com/jendigital/superherosbyventeprivee-reactjs'>Github</a></li>
                    <li><a alt='Linkedin' href='https://www.linkedin.com/in/jendigitalvision/'> Linkedin </a></li>
                    <li><a alt='Curriculum Vitae' href='https://docs.google.com/document/d/1k9U_BXYE5MR9AoIDFve3o7bUILe-kMsiRRtpiIP1xuY/edit?usp=sharing'>Curriculum Vitae</a></li>
                    <li><a alt='Trello' href='https://trello.com/b/Xltc8o6A/super-heros-list-react-js-app'>Trello</a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;
