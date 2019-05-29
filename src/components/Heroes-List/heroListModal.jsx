import React, {Component} from 'react';

export default class HeroListModal extends React.Component {
    click = () => {
        this.props.onButtonClick(this.props.hero);
    };

    render() {
        return (
            <div className="col-md-3">
                <div className="card">

                    <div className="card-body ">

                        <img src={this.props.hero.img}/>

                        <h2>{this.props.hero.name}</h2>
                        <h3>{this.props.hero.size}</h3>

                        <div className='btn' onClick={this.click}>Open modal</div>
                    </div>
                </div>
            </div>
        );
    }
}
