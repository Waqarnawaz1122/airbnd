import React from "react";
import Airbnb from '../image/airbnb.png'

export default function Navbar(){
    return(
        <nav>
        <img src={Airbnb} alt="" className="nav--logo" />
        </nav>
        
    )
}