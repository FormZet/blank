import React from 'react';
import {Route} from "react-router-dom";
import Sidebar from "./components/SideBar/sidebar.jsx";
import StartPage from "./components/Start-Page/start_page.jsx";
import HeroList from "./components/Heroes-List/heroes_list.jsx";
import LocationList from "./components/Location-List/location_list.jsx";
import CreateHero from "./components/Create-Hero/create_hero.jsx";
import ChooseCreation from "./components/Choose-Creation/choose_creation.jsx";
import CreateLocation from "./components/Create-Location/create_location.jsx";
import CreateUniverse from "./components/Create-Universe/create_universe.jsx";
import MyBlank from "./components/My-Blank/my_blank";


export default class App extends React.Component {


    constructor() {
        super();

        this.state = {
            appName: 'Hero Book',

            universeList: [
                {
                    name: "Default Universe",
                    desc: "",
                    background: "",
                    avatar: "",
                    locationList: [
                        {
                            name: "North",
                            desc: "TAAAA",

                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2fdx2fddx2fBcbeepo_njojnbq_jdpo.qohx3fwfstjpox3dd0d389ed8b052gd18142e664017fg0e8x26j21d.nbslx3djnbhf_$/$/$/$/$"
                        },
                        {
                            name: "West",
                            desc: "SHAAA",
                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f2x2f2fx2fBmdifnjtu_njojnbq_jdpo.qohx3fwfstjpox3d9c7g4e8bdcd589f87ed270g2c214430bx26j21d.nbslx3djnbhf_$/$/$/$/$"
                        },
                        {
                            name: "East",
                            desc: "CHIIII",
                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f3x2f36x2fBodjfou_Bqqbsjujpo_njojnbq_jdpo.qohx3fwfstjpox3df4cfdg9deg2614e70c8eg9e45c7ddgf4x26j21d.nbslx3djnbhf_$/$/$/$/$"
                        },

                        {
                            name: "South",
                            desc: "DAAAA",
                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f4x2f41x2fBouj-Nbhf_njojnbq_jdpo.qohx3fwfstjpox3db0237360e86gc9dc8dbc6e079955fd10x26j21d.nbslx3djnbhf_$/$/$/$/$"
                        }
                    ],
                    heroList: [
                        {
                            name: "Abaddon",
                            desc: "TAAAA",
                            role: "",
                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2fdx2fddx2fBcbeepo_njojnbq_jdpo.qohx3fwfstjpox3dd0d389ed8b052gd18142e664017fg0e8x26j21d.nbslx3djnbhf_$/$/$/$/$"
                        },
                        {
                            name: "Alchemist",
                            desc: "SHAAA",
                            role: "",
                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f2x2f2fx2fBmdifnjtu_njojnbq_jdpo.qohx3fwfstjpox3d9c7g4e8bdcd589f87ed270g2c214430bx26j21d.nbslx3djnbhf_$/$/$/$/$"
                        },
                        {
                            name: "Ancient Apparation",
                            desc: "CHIIII",
                            role: "",
                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f3x2f36x2fBodjfou_Bqqbsjujpo_njojnbq_jdpo.qohx3fwfstjpox3df4cfdg9deg2614e70c8eg9e45c7ddgf4x26j21d.nbslx3djnbhf_$/$/$/$/$"
                        },

                        {
                            name: "Anti-Mage",
                            desc: "DAAAA",
                            role: "",
                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f4x2f41x2fBouj-Nbhf_njojnbq_jdpo.qohx3fwfstjpox3db0237360e86gc9dc8dbc6e079955fd10x26j21d.nbslx3djnbhf_$/$/$/$/$"
                        },
                        {
                            name: "Arc Warden",
                            desc: "DAAAA",
                            role: "",
                            img:
                                "https://c-3sux78kvnkay76x24mgskvkjogx2eiax78ykijtx2eius.g00.gamepedia.com/g00/3_c-3juzg8.mgskvkjog.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fmgskvkjog.iax78ykijt.iusx2fjuzg8_mgskvkjogx2fkx2fk5x2fGx78i_Cgx78jkt_sotosgv_oiut.vtmx3fbkx78youtx3d8764iijk32iij101353l0183i8l20l15x26o76i.sgx78qx3dosgmk_$/$/$/$/$"
                        },
                        {
                            name: "Axe",
                            desc: "CHIIII",
                            role: "",
                            img:
                                "https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2fgx2fg8x2fByf_njojnbq_jdpo.qohx3fwfstjpox3dec0cf4f60f76e7f9e2de594ge4c5497fx26j21d.nbslx3djnbhf_$/$/$/$/$"
                        }
                    ]
                },

            ]
        }
    }


    addNewUniverse = (universe) => {
        let newUniverseList = this.state.universeList;
        newUniverseList.push(universe);
        this.setState({universeList: newUniverseList});
    };

    addNewHero = (hero) => {
        let newHeroList = this.state.universeList[0].heroList;
        newHeroList.push(hero);
        this.setState({heroList: newHeroList});
    };

    addNewLocation = (location) => {
        console.log(location);
        let newLocationList = this.state.universeList[0].locationList;
        newLocationList.push(location);
        this.setState({locationList: newLocationList});
    };

    render() {

        return (
            <>
                <div className="global-container">
                    <Sidebar appName={this.state.appName} universeList={this.state.universeList}/>
                    {/*<Navbar appName={this.state.appName}/>*/}
                    <div className="global-container__right">
                        <div className="container1">
                            <Route path="/heroList"
                                   render={props => <HeroList heroes={this.state.universeList[0].heroList}/>}/>

                            <Route path="/locationList" render={props => <LocationList
                                locations={this.state.universeList[0].locationList}/>}/>



                            <Route path="/myBlank" render={props => <MyBlank universes={this.state.universeList}/>}/>

                            <Route exact path="/" component={StartPage}/>

                            <Route exact path="/chooseCreation" component={ChooseCreation}/>

                            <Route path="/createHero"
                                   render={props => <CreateHero {...props} addNewHero={this.addNewHero}/>}/>

                            <Route path="/createLocation"
                                   render={props => <CreateLocation {...props} addNewLocation={this.addNewLocation}/>}/>

                            <Route path="/createUniverse"
                                   render={props => <CreateUniverse {...props} addNewUniverse={this.addNewUniverse}/>}/>

                        </div>
                    </div>
                </div>

            </>

        );
    }
}
