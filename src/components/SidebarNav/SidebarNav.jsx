import React from "react";
import './SidebarNav.scss';
import {Link} from "react-router-dom";
import imageplus from '../../assets/img/plus.png';
import imagedown from '../../assets/img/sidebar_down.png';


export default class SidebarNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            isOpen: props.isOpen
        }
    }

    render() {
        return (
            <>
                <div className={`SidebarNav ${this.state.isOpen ? '-is-open' : ''}`}>
                    <div className="SidebarNav__header" onClick={this.toggleBlock}>
                        <div className="SidebarNav__name">{this.state.data.name} <img className={`SidebarNav imagestart ${this.state.isOpen ? 'imagedown' : ''}`}src={imagedown}></img></div>
                    </div>
                    <div className="SidebarNav__container">
                        <div className="SidebarNav__item">
                            <Link to={'/myBlank'}>MY BLANK!</Link>
                        </div>
                        <div className="SidebarNav__item"><Link to={'/createhero'}><img className="sidebar_plus" src={imageplus}></img></Link>
                            <Link to={'/heroList'}>Characters</Link>
                        </div>
                        <div className="SidebarNav__item"><Link to={'/createlocation'}><img className="sidebar_plus" src={imageplus}></img></Link>
                            <Link to={'/LocationList'}>Locations</Link>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    toggleBlock = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
};
