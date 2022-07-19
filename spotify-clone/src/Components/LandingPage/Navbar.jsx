import {React, useState} from 'react'
import  logo  from '../../Assets/Spotify_Logo_RGB_White.png'
import '../../Styles/Global.css'
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
    //const [isMobile, setIsMobile] = useState(false);
  return (
    <div className='Nav'>
        <div className='Navbar-Container'>
            <div className='Navbar-Left-Container'>
                <img className='Navbar-logo' src={logo} alt='spotify-logo'/>
            </div>
            <div className='Navbar-Right-Container'>
                <div className='Navbar-right-inside'>
                    <ul className='Navbar-ul'>
                        <li className='Navbar-li'>Premium</li>
                        <li className='Navbar-li'>Support</li>
                        <li className='Navbar-li'>Download</li>
                    </ul>
                    <div class="container"></div>
                    
                    <ul className='Navbar-ul'>                                           
                        <li className='Navbar-li' style={{marginRight: '-25px'}}>Sign up</li>
                        <li className='Navbar-li'>Log in</li>
                    </ul>
                </div>
            </div> 
            <button className='Navbar-PhoneIcon-Container'>
                <GiHamburgerMenu className='Navbar-PhoneIcon-icon'/>
            </button>       
        </div>
    </div>
  )
}

export default Navbar