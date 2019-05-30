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
                    avatar: "https://image.flaticon.com/icons/svg/116/116859.svg",
                    locationList: [
                        {
                            name: "North",
                            desc: "Llega la hora de comprar un celular y varios son los detalles previos que debés tener cuenta para que tu compra termine siendo un " +
                                "éxito. Prestá atención a las siguientes características de celulares libres que se detallan a continuaciónLlega la hora de comprar un celular y varios son los detalles previos que debés tener cuenta para que tu compra termine siendo un " +
                                "éxito. Prestá atención a las siguientes características de celulares libres que se detallan a continuación",
                            size: "lg",
                            img:
                                "https://img.raremaps.com/xlarge/54621.jpg"
                        },
                        {
                            name: "West",
                            desc: "SHAAA",
                            size: "lg",
                            img:
                                "https://vokrugsveta.ua/wp-content/uploads/2018/08/image7.jpg"
                        },
                        {
                            name: "East",
                            desc: "CHIIII",
                            size: "md",
                            img:
                                "http://1.bp.blogspot.com/-ch3QDbt9nYk/UkEcoEB8_TI/AAAAAAAABS4/pYAT6IdWXqI/s1600/dota2_tutorial_map_1_by_denolus-d6n7w9y.jpg"
                        },

                        {
                            name: "South",
                            desc: "DAAAA",
                            size: "sm",
                            img:
                                "http://way2travel.ru/wp-content/uploads/2012/02/nestandart-3-1.jpg"
                        }
                    ],
                    heroList: [
                        {
                            name: "Abaddon",
                            desc: "TAAAA",
                            role: "II",
                            img:
                                "https://i.pinimg.com/564x/7f/e7/16/7fe71679db253e3678ab4d2c217d1f57.jpg"
                        },
                        {
                            name: "Alchemist",
                            desc: "SHAAA",
                            role: "I",
                            img:"https://i.pinimg.com/564x/a5/5c/cb/a55ccbbad48f3241bc881221faa7a0c6.jpg"
                        },
                        {
                            name: "Ancient Apparation",
                            desc: "IssddsI",
                            role: "I",
                            img:
                                "https://i.pinimg.com/564x/a5/6d/04/a56d04e01710425bde307622234d843b.jpg"
                        },

                        {
                            name: "Anti-Mage",
                            desc: "DAAAA",
                            role: "I",
                            img:"https://i.pinimg.com/564x/3e/80/ac/3e80ac60a2570053fe3bdab2d8a35ff4.jpg"
                        },
                        {
                            name: "Arc Warden",
                            desc: "DAAAA",
                            role: "I",
                            img:"https://i.pinimg.com/564x/17/74/5e/17745e8bd05eaaab7cd99ce33b721d34.jpg"
                        },
                        {
                            name: "Axe",
                            desc: "CHIIII",
                            role: "II",
                            img:
                                "https://i.pinimg.com/564x/94/e6/c1/94e6c1cc3203d07fe3b2b2de77d18a1c.jpg"
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
