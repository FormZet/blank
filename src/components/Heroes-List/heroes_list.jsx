import React, {Component} from 'react';
import Modal from "../Modal/Modal";
import image from '../../assets/img/blank-icon.png';

export default class HeroList extends React.Component {
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
            <h1>hero name</h1>
            <h2>hero role</h2>
             <p>hero desc</p>
            </div>
            <img className="heroModalImg"src={image}>

            </img>
            </div>
        </Modal>;

        let heroes = this.props.heroes.map((hero, i) => {
            return (
                <div className="col-md-3" key={i}>
                    <div className="card">

                        <div className="card-body ">

                            <img src={hero.img}/>

                            <h2>{hero.name}</h2>
                            <h3>{hero.size}</h3>

                                <button onClick={this.handleClick}>Open modal</button>
                                {this.state.isModalOpen ? modalBody : ''}
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <>
                <div className="container">
                    <h1 className="ListName">Heroes List</h1>
                    <div className="row">
                        {heroes}

                    </div>

                </div>
            </>
        );
    }
}
