import React from 'react'
import "./fullhome.css"

function Fullhome() {
    return (
        <div className="container1">
    <a href="https://www.apple.com/in/iphone-13-pro/" ><div className="heading">iPhone 13 Pro</div>
    <div className="subheading">Oh.So.Pro</div>
    </a>
    <div className="links"> <a href="https://www.apple.com/in/iphone-13-pro/" className="link">Learn More  <i class="fas fa-greater-than"></i></a>
 <a href="https://www.apple.com/in/shop/buy-iphone/iphone-13-pro" className="link">Buy  <i class="fas fa-greater-than"></i></a>
    </div>
        <div className="image">
            <img className="desktop-img" src={require("../../../../image/iPhone13.jpg").default} />
            <img className="mobile-img" src={require("../../../../image/iphonemobile.jpg").default} />
        </div>
        <div className="iphone">
            <div className="wrapper">
        <a href="https://www.apple.com/in/iphone-13/" ><div className="heading2">iPhone 13</div>
    <div className="subheading2">Your new superpower</div>
    </a>
    <div className="links"> <a href="https://www.apple.com/in/iphone-13/" className="link">Learn More  <i class="fas fa-greater-than"></i></a>
 <a href="https://www.apple.com/in/shop/buy-iphone/iphone-13" className="link">Buy  <i class="fas fa-greater-than"></i></a>
    </div>
    </div>
        <div className="image">
            <img className="desktopiphone" src={require("../../../../image/iphone13_2.jpg").default} />
            {/* <img className="mobileiphone" src={require("../../../../image/iphone13mobile.jpg").default} /> */}
        </div> 
        </div>
        <div className="macbook">
        <a href="https://www.apple.com/in/macbook-pro-14-and-16/" ><div className="heading">MacBook Pro</div>
    <div className="subheading">Supercharged for pros</div>
    </a>
    <div className="links"> <a href="https://www.apple.com/in/macbook-pro-14-and-16/" className="link">Learn More  <i class="fas fa-greater-than"></i></a>
 <a href="https://www.apple.com/in/shop/buy-mac/macbook-pro/14-inch-macbook-pro" className="link">Buy  <i class="fas fa-greater-than"></i></a>
    </div>
        <div className="image">
            <img className="desktop-img" src={require("../../../../image/macbook.jpg").default} />
            <img className="mobile-img macbook-img" src={require("../../../../image/macbookmobile.jpg").default} />
        </div>
        </div>
        </div>
    )
}

export default Fullhome
