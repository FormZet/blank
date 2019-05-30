import React from "react";

export default class CreateLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            locationSize: 'SMALL',
            locationName: 'Location Name'
        }
    }

    onLocationNameChange = (e) => {
        const newLName = e.target.value;
        if (newLName === '') {
            this.setState({locationName: 'Loc Name'});
        } else {
            this.setState({locationName: e.target.value});
        }
    };

    onChange = event => {
        this.setState({
            locationSize: event.target.value
        });
    };

    createLocation(e) {
        e.preventDefault();
        let newLocation = {
            name: this.inputName.value,
            desc: this.inputDesc.value,
            size: getSize(this.state.locationSize),
            img: "https://www.dandwiki.com/w/images/thumb/1/18/3.5e_Optimized_Character_Build_Magic_Missile_Stormer.jpg/600px-3.5e_Optimized_Character_Build_Magic_Missile_Stormer.jpg"
        };
        this.props.addNewLocation(newLocation);
        this.props.history.push('/locationList');
    }

    render() {
        return (
            <>
                <div className="objectName">
                    <h1>{this.state.locationName}</h1>
                </div>

                <div className="container">
                    <div className="createLocation_flex">


                        <form className="locationForm"
                              onSubmit={(e) => {
                                  this.createLocation(e);
                              }}>
                            <div className="form-group c_un_mar">
                                <label htmlFor="exampleFormControlInput1">Location Name</label>
                                <input type="text" onChange={this.onLocationNameChange}
                                       className="form-control loc_input" id="exampleFormControlInput1"
                                       placeholder="how u will call it?" ref={(el) => {
                                    this.inputName = el;
                                }}
                                />
                            </div>
                            <label htmlFor="exampleFormControlInput1">Population</label><br></br>
                            <select className="form-control loc_input">
                                <option>Mini</option>
                                <option>Medium</option>
                                <option>Max</option>
                            </select>
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
                                <textarea className="form-control loc_input" id="exampleFormControlTextarea1"
                                          rows="3"
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

                    </div>
                </div>
            </>


        )
    }
}

function getSize(param) {
    switch (param) {
        case 'SMALL':
            return 'sm';
        case 'MEDIUM':
            return 'md';
        case 'LARGE':
            return 'lg';

    }
}
