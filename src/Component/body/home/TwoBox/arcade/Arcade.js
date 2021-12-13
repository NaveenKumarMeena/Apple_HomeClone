import React from 'react'
import "./arcade.css"

function Arcade() {
    return (
        <>
        <div className="arcade">
        <a href="https://www.apple.com/in/apple-arcade/?itscg=10000&itsct=arc-0-apl_hp-hw_bundle-apl-ref-211025">
          <div className="arcade-title"><img src={require("../../../../../image/arcade.png").default}/></div>
          <div className="arcade-subheading">Get 3 months free when you buy a new iPhone, iPad, iPod touch, Apple TV or Mac.</div>
        </a>
        <div className="linky">
          <a href="https://www.apple.com/in/apple-arcade/?itscg=10000&itsct=arc-0-apl_hp-hw_bundle-apl-ref-211025" className="link">
            Learn More <i class="fas fa-greater-than"></i>
          </a>
          <a href="https://www.apple.com/in/apple-arcade/?itscg=10000&itsct=arc-0-apl_hp-hw_bundle-apl-ref-211025" className="link">
            Try it free <i class="fas fa-greater-than"></i>
          </a>
        </div>
        <div className="image">
          <img src={require("../../../../../image/arcadeimg.jpg").default} />
        </div>
      </div>  
      </>
    )
}

export default Arcade