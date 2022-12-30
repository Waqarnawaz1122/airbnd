import React from "react";
import Star from '../image/Star1.png' 



export default function Card(props)
    
{
    let badgeText 
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if  (props.country =  == "Online") 
    {
        badgeText = "ONLINE"
    }
     return(
        <div className="card">
            {badgeText && <div className="soldout">{badgeText}</div>}
            <img src={props.coverimg} alt="" className="card--image"/>
            <div className="card--stats">
            <img src={Star} alt="" className="card--star" />    
            <span>{props.stats.rating}</span>
            <span className="grey">({props.stats.review})  *  </span>
            <span className="grey">{props.country}</span>
            </div>
            <p className="Card--title">{props.title}</p>
            <p> <span className="Card--price"> From ${props.price}</span>.00 </p>
            
        </div>       
     )
}