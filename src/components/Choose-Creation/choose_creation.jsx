import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class ChooseCreation extends React.Component {
    render() {
        return (
            <div className="container creationsFlex">
                <div className="card">
                    <div className="card-body chooseHero">
                        <Link to={'/heroList'}><img
                            src=""></img></Link>
                        <h1>Heroes</h1>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body chooseLoc">
                        <Link to={'/locationList'}><img
                            src=""/></Link>
                        <h1>Locations</h1>
                    </div>
                </div>
            </div>
        )
    }
}
