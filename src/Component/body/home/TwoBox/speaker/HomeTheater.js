import React from 'react'
import "./hometheater.css"

function HomeTheater() {
    return (
        <>
        <div className="hometheater">
        <a href="https://www.apple.com/in/homepod-mini/">
          <div className="hometheater-title">HomePod mini</div>
          <div className="hometheater-subheading">All-new with Spatial Audio</div>
        </a>
        <div className="linky">
          <a href="https://www.apple.com/in/homepod-mini/" className="link">
            Learn More <i class="fas fa-greater-than"></i>
          </a>
          <a href="https://www.apple.com/in/shop/buy-homepod/homepod-mini" className="link">
            Buy <i class="fas fa-greater-than"></i>
          </a>
        </div>
        <div className="image">
          <img src={require("../../../../../image/hometheater.jpg").default} />
        </div>
      </div>  
      </>
    )
}

export default HomeTheater
