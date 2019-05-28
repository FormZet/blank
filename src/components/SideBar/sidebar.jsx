import React from "react";
import image from '../../assets/img/blank-icon.png';
import {Link} from "react-router-dom";
import SidebarNav from '../SidebarNav/SidebarNav.jsx'
import imageplusv1 from "../../assets/img/plusv1.png";


export default class Sidebar extends React.PureComponent {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (

            <div className="sidebar">
                <div className="sidebar__name"><img className="logo" src={image}/>BLANK!</div>
                {
                    this.props.universeList.map((universe, i) => {
                        return (
                            <SidebarNav isOpen="true"
                                        key={i}
                                        data={universe}/>
                        )
                    })
                }

                <Link to={'/createUniverse'}><img className="sidebar_plusv1" src={imageplusv1}></img></Link>
            </div>


        )
    }

}
