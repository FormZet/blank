import React from "react";

export default class CreateUniverse extends React.Component {
    constructor() {
        super();
        this.state = {
            UniverseName: 'Universe Name',
            UniverseSize: 'medium'
        };
    }

    onUniverseNameChange = (e) => {
        const newHName = e.target.value;
        if (newHName === '') {
            this.setState({universeName: 'Universe Name'});
        } else {
            this.setState({universeName: e.target.value});
        }
    };

    onChange = event => {
        this.setState({
            UniverseSize: event.target.value
        });
    };


    createUniverse(e) {
        e.preventDefault();
        let newUniverse = {
            name: this.inputName.value,
            desc: this.inputDesc.value,
            size: getSize(this.state.UniverseSize)
        };
        this.props.addNewUniverse(newUniverse);
        this.props.history.push('/myBlank');
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="fixWidth">

                        <h1 className="title">{this.state.UniverseName}</h1>

                        <form className="universeForm   " onSubmit={(e) => {
                            this.createUniverse(e);
                        }}>
                            <div className="form-group c_un_mar">
                                <label htmlFor="exampleFormControlInput1">Universe Name</label>
                                <input type="text" onChange={this.onUniverseNameChange}  className="form-control" id="exampleFormControlInput1"
                                       placeholder="how u will call it?"
                                       ref={(el) => {
                                           this.inputName = el;
                                       }}/>
                            </div>
                            <div className="tyanem">
                                <label className="title" htmlFor="exampleFormControlInput1">Universe
                                    Scale</label><br></br>
                                <div className="form-check form-check-inline c_un_mar">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio1"
                                           value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">small</label>
                                 </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio2"
                                           value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">medium</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio3"
                                           value="option3"/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">large</label>
                                </div>
                            </div>
                            <div className="form-group c_un_mar">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                          ref={(el) => {
                                              this.inputDesc = el;
                                          }}></textarea>
                            </div>
                            <div className="custom-file c_un_mar">
                                <input type="file" className="custom-file-input" id="customFile"/>
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                                <div className="doneButton">
                                    <button type="submit" className="btn btn-primary doneBtn">Submit</button>
                                </div>
                            </div>


                        </form>
                    </div>

                </div>
            </>
        )
    }
}
function getSize(param) {
    switch (param) {
        case 'small':
            return 'SMALL';
        case 'medium':
            return 'MEDIUM';
        case 'large':
            return 'LARGE';

    }
}
