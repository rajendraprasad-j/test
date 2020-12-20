import {
    Link
} from "react-router-dom";
import React from "react";
import SampleCard from '../Components/Card'


import {data} from '../Constants'

function Catalogue(props) {
    return (
        <div className="card-container">
            {        data.map(item => <SampleCard {...item} {...props} />)
            }

        </div>
    );
}

export default Catalogue;
