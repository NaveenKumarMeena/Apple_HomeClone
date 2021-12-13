import React from 'react'
import "./Header.css"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
const [show , setShow]=React.useState(false)
    return (
        <div className="header">
            <ul className="navbar-tags">
                <li className="tag"><a href="#" className="icons"><i class="fab fa-apple"></i></a></li>
                <li className="tag"><a href="//www.apple.com/in/store" target="_blank">Store</a></li>
                <li className="tag"><a href="//www.apple.com/in/mac/" target="_blank">Mac</a></li>
                <li className="tag"><a href="//www.apple.com/in/ipad/" target="_blank">ipad</a></li>
                <li className="tag"><a href="https://www.apple.com/in/iphone/" target="_blank">iphone</a></li>
                <li className="tag"><a href="https://www.apple.com/in/watch/" target="_blank">Watch</a></li>
                <li className="tag"><a href="https://www.apple.com/in/airpods/" target="_blank">Airpod</a></li>
                <li className="tag"><a href="https://www.apple.com/in/tv-home/" target="_blank">TV & Home</a></li>
                <li className="tag"><a href="https://www.apple.com/in/shop/accessories/all" target="_blank">Accessaries</a></li>
                <li className="tag"><a href="https://support.apple.com/en-in" target="_blank">Support</a></li>
                <li className="tag"><a href="#" className="icons" target="_blank"><i class="fas fa-search"></i></a></li>
                <li className="tag"><a href="#" className="icons" target="_blank"><i class="fas fa-shopping-bag"></i></a></li>
            
            </ul>
            <div className="mobinav">
               <div className="navbar">
                   
                   <div className={`hamburgermenu ${show ? 'on' : 'off'}`}><button onClick={()=>setShow(!show)}><CloseIcon style={{ fill: 'white' }}/></button></div>
                   <div className={`hamburgermenu ${show ? 'off' : 'on'}`}><button onClick={()=>setShow(!show)}><i class="fas fa-bars"></i></button></div>
                   <div className="icon"><i class="fab fa-apple"></i><ShoppingBagOutlinedIcon /></div>
                   {
                       <div className={`dropdown ${show ? 'open' : ''}`}>
                          <ul className="dropdown-tags">
                <li className="drop-tag"><a href="//www.apple.com/in/store" target="_blank">Store</a></li>
                <li className="drop-tag"><a href="//www.apple.com/in/mac/" target="_blank">Mac</a></li>
                <li className="drop-tag"><a href="//www.apple.com/in/ipad/" target="_blank">ipad</a></li>
                <li className="drop-tag"><a href="https://www.apple.com/in/iphone/" target="_blank">iphone</a></li>
                <li className="drop-tag"><a href="https://www.apple.com/in/watch/" target="_blank">Watch</a></li>
                <li className="drop-tag"><a href="https://www.apple.com/in/airpods/" target="_blank">Airpod</a></li>
                <li className="drop-tag"><a href="https://www.apple.com/in/tv-home/" target="_blank">TV & Home</a></li>
                <li className="drop-tag"><a href="https://www.apple.com/in/shop/accessories/all" target="_blank">Accessaries</a></li>
                <li className="drop-tag"><a href="https://support.apple.com/en-in" target="_blank">Support</a></li>
            
            </ul>  
                       </div>
                   }
               </div>
            </div>
        </div>

    )
}

export default Header
