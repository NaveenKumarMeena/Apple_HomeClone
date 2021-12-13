import React from 'react'
import CopyRight from './copyright/CopyRight'
import "./footer.css"
import SubFooter from './subscription/SubFooter'
import TagsFooter from './tags/TagsFooter'

function Footer() {
    return (
        <footer className="footer">
            <div className="half">
            <SubFooter/>
            <hr />
            <div className="tags"><TagsFooter/></div>
            
            <div className="tagsbottom">
                <span className="contact">More ways to shop: <a href="https://locate.apple.com/in/en/">Find a retailer</a> near you. Or call 000800 040 1966.</span>
            </div> 
            <hr/> 
            <CopyRight/>
            </div>
        </footer>
    )
}

export default Footer
