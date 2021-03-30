import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.3},
            {id: 2, value: "Html/Css", xp:1.9},
            {id: 3, value: "Php", xp:1.1},
            {id: 4, value: "Ruby", xp:0.7},
        ],
        frameworks: [
            {id: 1, value: "Bootstrap", xp:1.9},
            {id: 2, value: "Angular", xp:1.2},
            {id: 3, value: "React", xp:1.8},
            {id: 4, value: "Symfony", xp:1.5},
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar
                languages={frameworks}
                title="frameworks & bibliothèques"
                className="frameworksDisplay"/>
                
            </div>
        );
    }
}

export default Languages;

