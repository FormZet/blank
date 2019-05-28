import React, {useCallback} from 'react'
import HeroCard from '../Hero-Card/hero_card.jsx';


export default class CreateHero extends React.Component {
    constructor() {
        super();
        this.state = {
            heroName: 'Hero Name',
            heroSize: 'first'
        };
    }

    onHeroNameChange = (e) => {
        const newHName = e.target.value;
        if (newHName === '') {
            this.setState({heroName: 'Hero Name'});
        } else {
            this.setState({heroName: e.target.value});
        }
    }
    onChange = event => {
        this.setState({
            heroSize: event.target.value
        });
    };

    createHero(e) {
        e.preventDefault();
        let newHero = {
            name: this.inputName.value,
            desc: this.inputDesc.value,
            size: getSize(this.state.heroSize)
        };
        this.props.addNewHero(newHero);
        this.props.history.push('/heroList');
    }

    render() {
        return (

            <div className="container">
                <div className="objectName"><h1>{this.state.heroName}</h1></div>
                <div className="createhero_flex">

                    <form onSubmit={(e) => {
                        this.createHero(e);
                    }} className="heroForm">
                        <div className="form-group c_un_mar">
                            <label htmlFor="exampleFormControlInput1">Hero Name</label>
                            <input type="text" onChange={this.onHeroNameChange} className="form-control heroInput"
                                   id="formGroupExampleInput"
                                   placeholder="Put hero name here" ref={(el) => {
                                this.inputName = el;
                            }}/>
                        </div>
                        <label htmlFor="exampleFormControlInput1">Role</label><br></br>
                        <div className="form-check form-check-inline c_un_mar">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                   id="inlineRadio1"
                                   onChange={this.onChange}
                                   checked={this.state.heroSize === 'first'}
                                   value="FIRST"
                                   ref={(el) => {
                                       this.inputRadio = el;
                                   }}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">First</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                   id="inlineRadio2"
                                   onChange={this.onChange}
                                   checked={this.state.heroSize === 'secondary'}
                                   value="SECONDARY"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Secondary</label>
                        </div>

                        <div className="form-group c_un_mar">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea className="form-control heroDesc" id="exampleTextarea" rows="3"
                                      ref={(el) => {
                                          this.inputDesc = el;
                                      }}></textarea>
                        </div>
                        <div className="custom-file c_un_mar">
                            <input type="file" className="custom-file-input" id="customFile"/>
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                        <button type="submit" className="btn btn-primary doneBtn">Submit</button>
                    </form>

                    <div className="hero_img">

                    </div>
                </div>
            </div>
        )
    }

}

function getSize(param) {
    switch (param) {
        case 'first':
            return '1';
        case 'secondary':
            return '2';

    }
}
