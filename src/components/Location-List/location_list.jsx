import React, {Component} from 'react';
import Modal from "../Modal/Modal";
import image from "../../assets/img/blank-icon.png";

export default class LocationList extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false
        };
    }

    handleClick = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }


    render() {
        let modalBody = <Modal unmount={this.handleClick}
                               containerClass="-w650">
            <div className="heroModal">
                <div className="heroModalDesc">
                    <h1>loc name</h1>
                    <h2>loc scale</h2>
                    <p>loc desc</p>
                </div>
                <img className="heroModalImg"src={image}>

                </img>
            </div>
        </Modal>;



        let locations = this.props.locations.map((location, j) => {
            return(
                <div className="col-md-3" key={j}>
                    <div className="card">

                        <div className="card-body ">


                            <h2>{location.name}</h2>
                            <h3>{location.desc}</h3>
                            <h3>{location.size}</h3>
                            <button onClick={this.handleClick}>Open modal</button>
                            {this.state.isModalOpen ? modalBody : ''}


                        </div>
                    </div>
                </div>
            )
        });


        return(
            <>
                <div className="container">
                    <h1 className="ListName">Location List</h1>
                    <div className="row">
                        {locations}
                    </div>
                </div>
            </>
        );
    }
}
