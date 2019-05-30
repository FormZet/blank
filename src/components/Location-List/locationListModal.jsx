import React, {Component} from 'react';

export default class LocationListModal extends React.Component {
    click = () => {
        this.props.onButtonClick(this.props.location);
    };

    render() {
        return (
            <div className="col-md-3">
                <div className="card">

                    <div className="card-body ">

                        <img src={this.props.location.img}/>

                        <h2>{this.props.location.name}</h2>
                        <h3>{this.props.location.size}</h3>

                        <div className='btn' onClick={this.click}>Information</div>
                    </div>
                </div>
            </div>
        );
    }
}