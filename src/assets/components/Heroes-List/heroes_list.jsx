import React, {Component} from 'react';
import Modal from "../Modal/modal";

export default class HeroList extends React.Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false
        };
    }




    render() {
        let heroes = this.props.heroes.map((hero, i) => {
            return(
                <div className="col-md-3" key={i}>
                    <div className="card">

                        <div className="card-body ">

                            <img src={hero.img}/>
                            <h2>{hero.name}</h2>
                            <h3>{hero.size}</h3>


                        </div>
                    </div>
                </div>
            )
        });
     function  handleClick()
        {
            this.setState({ isModalOpen: !this.state.isModalOpen})
        }

        return(
            <>
                <div className="container">
                    <h1 className="ListName">Heroes List</h1>
                    <div className="row">
                        {heroes}

                    </div>
                    <Modal isOpen={true} onClick = {handleClick()}></Modal>
                </div>
            </>
        );
    }
}