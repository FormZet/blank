import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <Link to={'/'} className="navbar-brand" >{this.appName}</Link>
	
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
                      <Link to={'/'} className="nav-link">Start Page</Link>
			        </li>
			      <li className="nav-item">
			        <Link to={'/createHero'} className="nav-link">CreateHero</Link>
			      </li>
					<li className="nav-item">
						<Link to={'/createUniverse'} className="nav-link">CreateUniverse</Link>
					</li>
					<li className="nav-item">
						<Link to={'/createLocation'} className="nav-link">CreateLoc</Link>
					</li>
                    <li className="nav-item">
                        <Link to={'/heroList'} className="nav-link">Top CreationsHero<span className="sr-only">(current)</span></Link>
                    </li>
					<li className="nav-item">
						<Link to={'/chooseCreation'} className="nav-link">ChooseCreation<span className="sr-only">(current)</span></Link>
					</li>
					<li className="nav-item">
						<Link to={'/LocationList'} className="nav-link">Top CreationsLoc<span className="sr-only">(current)</span></Link>
					</li>
			      <li className="nav-item">
			        <Link to={'/myBlank'} className="nav-link">My Blank</Link>
			      </li>
			    </ul>
			  </div>
			</nav>		
			)
	}
}

