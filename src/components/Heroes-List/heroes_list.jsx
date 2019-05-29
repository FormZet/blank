import React, {Component} from 'react';
import Modal from "../Modal/Modal";
import image from '../../assets/img/blank-icon.png';
import HeroListModal from "./heroListModal";

export default class HeroList extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            currentHero: {}
        };
    }

    handleClick = (hero) => {
        this.setState({currentHero: hero});
        this.setState({isModalOpen: !this.state.isModalOpen});
    };

    handleUnmount = (e) => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    };

    render() {
        let modalBody = <Modal unmount={this.handleUnmount}
                               containerClass="-w650">
            <div className="heroModal">
                <div className="heroModalDesc">
                    <h1>{this.state.currentHero.name}</h1>
                    <h2>{this.state.currentHero.role}</h2>
                    <p>{this.state.currentHero.desc}</p>
                </div>
                <img className="heroModalImg" src={this.state.currentHero.image}>

                </img>
            </div>
        </Modal>;

        let heroes = this.props.heroes.map((hero, i) => {
            return (
                <HeroListModal hero={hero} onButtonClick={this.handleClick}/>
            )
        });

        return (
            <>
                <div className="container">
                    <h1 className="ListName">Heroes List</h1>
                    <div className="row">
                        {heroes}

                    </div>
                    {this.state.isModalOpen ? modalBody : ''}
                </div>
            </>
        );
    }
}
