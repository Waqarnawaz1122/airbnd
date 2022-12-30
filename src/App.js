
import React from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import data from "./data";
import Hero from "./component/Hero";

export default function App(){
    
    const cards= data.map( (item)=>{
        return(
        <Card
          key={item.id}
          {...item}
          />

        )
    })

    return( 
        <div>
         <Navbar />
         <Hero />
         <section className="cards-list">
                {cards}
            </section>
         
        </div>
    )
}


// coverimg= {item.coverimg}
//           rating= {item.stats.rating}
//           review= {item.stats.review}
//           country= {item.country}
//           title= {item.title}
//           price= {item.price}
//           openSpots={item.openSpots}
