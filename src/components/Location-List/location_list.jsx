import React, {Component} from 'react';
import Modal from "../Modal/Modal";
import image from "../../assets/img/blank-icon.png";
import LocationListModal from "../Location-List/locationListModal";

export default class LocationList extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            currentLoc: {}
        };
    }

    handleClick = (location) => {
        this.setState({currentLoc: location});
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    handleUnmount = (e) => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    };


    render() {
        let modalBody = <Modal unmount={this.handleUnmount}
                               containerClass="-w650">
            <div className="locationModal">
                <div className="heroModalDesc">
                    <h1>Name : <br></br>
                        <span>  {this.state.currentLoc.name}</span></h1>
                    <h2>Scale:{this.state.currentLoc.size}</h2>
                    <p>{this.state.currentLoc.desc}</p>
                </div>
                <img className="locModalImg"src={this.state.currentLoc.img}>

                </img>
            </div>
        </Modal>;



        let locations = this.props.locations.map((location, j) => {
            return(
                <LocationListModal location={location} onButtonClick={this.handleClick}/>
                )});





        return(
            <>
                <div className="container">
                    <h1 className="ListName">Location List</h1>
                    <div className="row">
                        {locations}
                    </div>
                    {this.state.isModalOpen ? modalBody : ''}
                </div>
            </>
        );
    }
}
