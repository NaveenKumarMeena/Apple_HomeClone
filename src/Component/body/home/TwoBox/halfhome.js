import React from "react";
import Airpod from "./airpod/Airpod";
import AppleTV from "./appletv/AppleTV";
import Arcade from "./arcade/Arcade";
import "./halfhome.css";
import HomeTheater from "./speaker/HomeTheater";

function HalfHome() {
  return ( <div>
    <div className="halfhome">
      <div className="left">
        <div className="watch">
            <h3>New</h3>
          <a href="https://www.apple.com/in/apple-watch-series-7/">
            <div className="watch-title"><img src={require("../../../../image/watch.png").default} alt="" /></div>
            <div className="watch-subheading">Introducing our largest display yet</div>
          </a>
          <div className="linky">
            {" "}
            <a href="https://www.apple.com/in/apple-watch-series-7/" className="link">
              Learn More <i class="fas fa-greater-than"></i>
            </a>
            <a href="https://www.apple.com/in/shop/buy-watch/apple-watch" className="link">
              Buy <i class="fas fa-greater-than"></i>
            </a>
          </div>
          <div className="image">
            <img src={require("../../../../image/watch1.jpg").default} />
          </div>
        </div>
      </div>
      <div className="right">
      <div className="ipadmini">
          <a href="https://www.apple.com/in/ipad-mini/">
            <div className="ipadmini-title"><img src={require("../../../../image/ipadminilogo.png").default} alt="" /></div>
            <div className="ipadmini-subheading">Mega power. Mini size</div>
          </a>
          <div className="linky">
            {" "}
            <a href="https://www.apple.com/in/ipad-mini/" className="link">
              Learn More <i class="fas fa-greater-than"></i>
            </a>
            <a href="https://www.apple.com/in/shop/buy-ipad/ipad-mini" className="link">
              Buy <i class="fas fa-greater-than"></i>
            </a>
          </div>
          <div className="image">
            <img src={require("../../../../image/ipadmini.jpg").default} />
          </div>
        </div>
      </div>
      </div>
      <div className="halfhome">
          <div className="left"><Airpod/></div>
          <div className="right"><HomeTheater/></div>
      </div>
      <div className="halfhome">
          <div className="left arcadeleft"><Arcade/></div>
          <div className="right"><AppleTV/></div>
      </div>
      </div>
  );
}

export default HalfHome;
