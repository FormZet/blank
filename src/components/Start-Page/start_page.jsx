import React from "react";
import {Link} from "react-router-dom";


export default class StartPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="bubble">

                    <h1 className="startbu  bble"><Link to={'/heroList'}>START!</Link>

                    </h1>

                </div>

            </div>
        )
    }
}
