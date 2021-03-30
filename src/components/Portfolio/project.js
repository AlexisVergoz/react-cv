import React, { Component } from 'react';

export default class project extends Component {
    state = {
        showInfo: false
    }
    handlInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }


    render() {
        let {name, languagesIcons, source, info, picture} = this.props.item; 

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                         )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handlInfo} />
                <span className="infos" onClick={this.handlInfo}>
                    <i className="las la-plus-circle"></i>
                </span>
                
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                            <div className="head">
                                <h2>{name}</h2>
                                <div className="sourceCode">
                                    <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                </div>

                            </div>
                            <p className="text">{info}</p>
                                <div className="button return" onClick={this.handlInfo}>Retourner sur la page</div>
                                
                            </div>

                        </div>
                    )
                }
            </div>
        );
    }
}