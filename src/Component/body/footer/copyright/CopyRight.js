import React from 'react'
import "./copyright.css"

function CopyRight() {
    return (
        <div className="copyright">
        <div className="unspaced">
        <div className="copyrighttext">Copyright © 2021 Apple Inc. All rights reserved.</div>
        <div className="copyrightlinks">
            <ul className="copyrighttags">
                <li className="copyrighttag"><a href="#">Privacy Policy</a></li>
                <div className="verticalline"></div>
                <li className="copyrighttag"><a href="#">Terms of Use</a></li>
                <div className="verticalline"></div>
                <li className="copyrighttag"><a href="#">Sales Policy</a></li>
                <div className="verticalline"></div>
                <li className="copyrighttag"><a href="#">Legal</a></li>
                <div className="verticalline"></div>
                <li className="copyrighttag"><a href="#">Site Map</a></li>
            </ul>
        </div>
        </div>
        <div className="country"><a href="#">India</a></div>
        </div>
    )
}
   

export default CopyRight
