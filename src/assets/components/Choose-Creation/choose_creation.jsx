import React, {Component} from 'react';
import {Link} from "react-router-dom";




export default class ChooseCreation extends React.Component {

    render() {
        return (
            <div className="container creationsFlex">


                    <div className="card">
                        <div className="card-body" >
                            <Link to={'/heroList'}><img src="https://c-3sux78kvnkay76x24mgskvkjogx2eiax78ykijtx2eius.g00.gamepedia.com/g00/3_c-3juzg8.mgskvkjog.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fmgskvkjog.iax78ykijt.iusx2fjuzg8_mgskvkjogx2fkx2fk5x2fGx78i_Cgx78jkt_sotosgv_oiut.vtmx3fbkx78youtx3d8764iijk32iij101353l0183i8l20l15x26o76i.sgx78qx3dosgmk_$/$/$/$/$"/></Link>
                            <h1>Heroes</h1>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <Link to={'/locationList'}><img src="https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2fdx2fddx2fBcbeepo_njojnbq_jdpo.qohx3fwfstjpox3dd0d389ed8b052gd18142e664017fg0e8x26j21d.nbslx3djnbhf_$/$/$/$/$"/></Link>
                            <h1>Locations</h1>
                        </div>
                    </div>
                </div>

        )
    }


}