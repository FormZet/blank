import React from "react";
import scss from "../../styles/main.scss";
import {Link} from "react-router-dom";
import Modal from '../Modal/modal.jsx';


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