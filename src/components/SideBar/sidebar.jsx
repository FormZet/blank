import React from "react";
import image from '../../assets/img/blank-icon.png';
import {Link} from "react-router-dom";
import SidebarNav from '../SidebarNav/SidebarNav.jsx'
import imageplusv1 from "../../assets/img/plusv1.png";



export default class Sidebar extends React.PureComponent {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (

            <div className="sidebar">
                <div className="sidebar__name"><img className="logo" src={image}/>BLANK!</div>
                {
                    this.props.universeList.map((universe, i) => {
                        return(
                            <SidebarNav isOpen="true"
                                        key={i}
                                        data={universe}/>
                        )
                    })
                }


                {/*<ul className="navbar-nav mr-auto">*/}
                {/*    <li className="nav-item active">*/}
                {/*        <Link to={'/'} className="nav-link">Start Page</Link>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to={'/createHero'} className="nav-link">CreateHero</Link>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to={'/createUniverse'} className="nav-link">CreateUniverse</Link>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to={'/createLocation'} className="nav-link">CreateLoc</Link>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to={'/heroList'} className="nav-link">Top CreationsHero<span*/}
                {/*            className="sr-only">(current)</span></Link>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to={'/chooseCreation'} className="nav-link">ChooseCreation<span*/}
                {/*            className="sr-only">(current)</span></Link>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to={'/LocationList'} className="nav-link">Top CreationsLoc<span*/}
                {/*            className="sr-only">(current)</span></Link>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <Link to={'/myBlank'} className="nav-link">My Blank</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}

                <Link to={'/createUniverse'}><img className="sidebar_plusv1" src={imageplusv1}></img></Link>
            </div>


        )
    }

}
