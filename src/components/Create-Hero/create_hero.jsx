import React, {useCallback} from 'react'

export default class CreateHero extends React.Component {
    constructor() {
        super();
        this.state = {
            heroName: 'Hero Name',
            heroImage: 'Hero Image',
            locationSize: 'SMALL',
        };
    }

    onHeroNameChange = (e) => {
        const newHName = e.target.value;
        if (newHName === '') {
            this.setState({heroName: 'Hero Name'});
        } else {
            this.setState({heroName: e.target.value});
        }
    };

    onHeroImageChange = (e) => {
        const newIName = e.target.value;
        if (newIName === '') {
            this.setState({img: ''});
        } else {
            this.setState({img: e.target.value});
        }
    };

    onChange = event => {
        this.setState({
            locationSize: event.target.value
        });
    };

    createHero(e) {
        e.preventDefault();
        let newHero = {
            name: this.inputName.value,
            desc: this.inputDesc.value,
            size: getSize(this.state.locationSize),
            img: this.inputImage.value
        };
        this.props.addNewHero(newHero);
        this.props.history.push('/heroList');
    }

    render() {
        return (

            <div className="container">
                <div className="objectName"><h1>{this.state.heroName}</h1></div>
                <div className="createhero_flex">

                    <div className="row w-100">
                        <div className="col-md-8">
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
                                <label htmlFor="exampleFormControlInput1">Size</label><br></br>
                                <div className="form-check form-check-inline c_un_mar">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="inlineRadioOptions"
                                           id="inlineRadio1"
                                           onChange={this.onChange}
                                           checked={this.state.locationSize === 'SMALL'}
                                           value="SMALL"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Small</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="inlineRadioOptions"
                                           id="inlineRadio2"
                                           onChange={this.onChange}
                                           checked={this.state.locationSize === 'MEDIUM'}
                                           value="MEDIUM"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="inlineRadioOptions"
                                           id="inlineRadio3"
                                           onChange={this.onChange}
                                           checked={this.state.locationSize === 'LARGE'}
                                           value="LARGE"/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">Big</label>
                                </div>

                                <div className="form-group c_un_mar">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control heroDesc" id="exampleTextarea" rows="3"
                                              ref={(el) => {
                                                  this.inputDesc = el;
                                              }}></textarea>
                                </div>
                                <div className="form-group c_un_mar">
                                    <label htmlFor="exampleFormControlInput1">Hero Image</label>
                                    <input type="text" onChange={this.onHeroImageChange} className="form-control heroInput"
                                           id="formGroupExampleInput"
                                           placeholder="Put hero name here" ref={(el) => {
                                        this.inputImage = el;
                                    }}/>
                                </div>
                                <button type="submit" className="btn btn-primary doneBtn">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="image-preview" style={{backgroundImage: `url(${this.state.img})`}}>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function getSize(param) {
    switch (param) {
        case 'SMALL':
            return 'I';
        case 'MEDIUM':
            return 'II';
        case 'LARGE':
            return 'III';

    }
}

