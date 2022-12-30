import React from "react";
import Grid from '../image/candleimage.png'

export default function Hero(){
    return(
        <section className="hero">
         <img src={Grid} alt="" className="section--grid" />
         <h1 className="section--heading"> Candles : </h1>
         <p className="section--para"> The use of candles dates back as far as 3,000 B.C., when ancient Egyptians used papyrus reeds dipped in animal fat that they then lit to use as torches. Similarly, ancient Romans dipped wicks into tallow, a rendered form of animal fat, to create another early form of the candle. Other components of candles include plants, insects, seeds and nuts which have been identified in Chinese, Japanese and Indian civilizations.Thanks to its accessibility and affordability, tallow continued to be a popular ingredient for candle-making through the Middle Ages, particularly in England and France, where, like today, candles were a popular gift. Beeswax was also ideal since it gave off a bright flame and minimal smoke; however, it was much more expensive than tallow.

By the 18th century, the American whaling industry brought about the discovery of spermaceti, an oil sourced from the head of the sperm whale. This marked a large advancement in the development of candles since spermaceti wax was found to be both stiffer and less odorous than tallow. However, the production process for spermaceti candles was rigorous and lengthy, making it much more expensive.</p>
         </section>
    )
}