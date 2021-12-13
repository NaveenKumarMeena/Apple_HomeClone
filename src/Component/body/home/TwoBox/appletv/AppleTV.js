import React from 'react'
import "./appletv.css"

function AppleTV() {
    return (
        <>
        <div className="appletv">
        <a href="https://tv.apple.com/in/movie/wolfwalkers/umc.cmc.amuoq00hqelfi98j0gvg641x">
          <div className="appletv-title"><img src={require("../../../../../image/spylogo.png").default}/></div>
          <div className="appletv-subheading"><img src={require("../../../../../image/spy.png").default}/></div>
          <div className="appletv-subsubheading"><img src={require("../../../../../image/follow.png").default}/></div>
        </a>
        {/* <div className="linky appletvlink">
          <a href="#" className="link">
            Learn More <i class="fas fa-greater-than"></i>
          </a>
          <a href="#" className="link">
            Buy <i class="fas fa-greater-than"></i>
          </a>
        </div> */}
        <div className="image tvimg">
          <img src={require("../../../../../image/tv.jpg").default} />
        </div>
      </div>  
      </>
    )
}

export default AppleTV