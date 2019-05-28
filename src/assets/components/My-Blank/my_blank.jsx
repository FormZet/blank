import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class MyBlank extends React.Component {
    render() {
        let universes = this.props.universes.map((universe, q) => {
            return(
                <div className="col-md-3" key={q}>
                    <div className="card">

                        <div className="card-body">


                            <h2><Link to={'/chooseCreation'}>{universe.name}</Link></h2>
                            <h3>{universe.desc}</h3>

                        </div>
                    </div>
                </div>
            )
        });


        return(
            <>
                <div className="container">
                    <h1 className="ListName">Your Universes</h1>
                    <div className="row">
                        {universes}
                    </div>
                </div>
            </>
        );
    }
}