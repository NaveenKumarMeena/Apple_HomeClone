import React from 'react'
import "./airpod.css"

function Airpod() {
    return (
        <>
          <div className="airpod">
          <div className="airpod-image">
            <img src={require("../../../../../image/airpod.jpg").default} />
          </div>
          <a href="https://www.apple.com/in/airpods-3rd-generation/">
            <div className="airpod-title">AirPods</div>
            <div className="airpod-subheading">All-new with Spatial Audio</div>
          </a>
          <div className="linky airpodlink">
            <a href="https://www.apple.com/in/airpods-3rd-generation/" className="link">
              Learn More <i class="fas fa-greater-than"></i>
            </a>
            <a href="https://www.apple.com/in/shop/product/MME73HN/A/airpods-3rd-generation" className="link">
              Buy <i class="fas fa-greater-than"></i>
            </a>
          </div>
        </div>  
        </>
    )
}

export default Airpod
