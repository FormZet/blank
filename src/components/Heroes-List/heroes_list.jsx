import React, {Component} from 'react';
import Modal from "../Modal/Modal";

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
            <h1>This is a Modal</h1>
            <p>Just add your content here, Lev</p>
        </Modal>;

        let heroes = this.props.heroes.map((hero, i) => {
            return (
                <div className="col-md-3" key={i}>
                    <div className="card">

                        <div className="card-body ">

                            <img src={hero.img}/>

                            <h2>{hero.name}</h2>
                            <h3>{hero.size}</h3>

                            <button className="btn">подробнее</button>
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
                    <button onClick={this.handleClick}>Open modal</button>
                    {this.state.isModalOpen ? modalBody : ''}
                </div>
            </>
        );
    }
}
