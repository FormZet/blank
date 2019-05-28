import React, {Component} from 'react';

export default class HeroCard extends Component {

	render(){
		return(
				<div className="col-md-3">
					<div className="card">
						<div className="card-header">
							<div className="card-title">
							 {this.props.data.name}
							</div>
						</div>
						<div className="card-body">
							<p>{this.props.data.desc}</p>
							</div>
						</div>
					</div>
			)
	}
}