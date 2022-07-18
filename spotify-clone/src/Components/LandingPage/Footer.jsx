import React from 'react'
import  logo  from '../../Assets/Spotify_Logo_RGB_White.png'
import { GrInstagram, GrFacebookOption, GrTwitter } from "react-icons/gr";
import { BiCopyright } from "react-icons/bi";
import { FaGlobeAfrica } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='Footer-main-container'>
        <div className='Footer-first-container'>
            <div className='Footer-Logo-container'>
                <img className='Footer-logo' src={logo} alt='spotify-logo'/>
            </div>
            <div className='Footer-Logo-Links'>
                <ul className='Footer-ul'>
                    <li className='Footer-li li-header'>Company</li>
                    <li className='Footer-li'>About</li>
                    <li className='Footer-li'>Jobs</li>
                    <li className='Footer-li'>For the Record</li>                
                </ul>
                <ul className='Footer-ul'>
                    <li className='Footer-li li-header'>COMMUNITIES</li>
                    <li className='Footer-li'>For Artists</li>
                    <li className='Footer-li'>Developers</li>
                    <li className='Footer-li'>Advertising</li>
                    <li className='Footer-li'>Investors</li>
                    <li className='Footer-li'>Vendors</li>                                  
                </ul>
                <ul className='Footer-ul'>
                    <li className='Footer-li li-header'>USEFUL LINKS</li>
                    <li className='Footer-li'>Support</li>
                    <li className='Footer-li'>Web Player</li>
                    <li className='Footer-li'>Free Mobile App</li>                
                </ul>
            </div>        
            <div className='Footer-Logo-Socials'>
                <div className='Footer-Socials'>
                    <GrInstagram className='social-icon'/>
                </div>
                <div className='Footer-Socials'>
                    <GrTwitter className='social-icon'/>
                </div>
                <div className='Footer-Socials'>
                    <GrFacebookOption className='social-icon'/>
                </div>                                
            </div>
        </div>
        <div className='Footer-second-container'>
            <div className='Footer-second-container-links'>
                <ul className='Footer-second-container-ul'>
                    <li className='Footer-second-container-li'>Legal</li>
                    <li className='Footer-second-container-li'>Privacy Center</li>
                    <li className='Footer-second-container-li'>Cookie Settings</li>
                    <li className='Footer-second-container-li'>About Ads</li> 
                    <li className='Footer-second-container-li'>Modern slavery Act</li>
                    <li className='Footer-second-container-li'>Uk Tax Policy</li>
                    <li className='Footer-second-container-li'>UK Gender Pay Report</li>                                                                                
                </ul>
            </div>
            <div className='Footer-second-container-legal'>
                <div className='Footer-second-container-legal-text'>
                    <FaGlobeAfrica className='legal-icon'/>
                    <span className='Footer-second-container-legal-text-span'>
                        United Kingdom
                    </span>
                </div>
                <div className='Footer-second-container-legal-text'>
                    <BiCopyright className='legal-icon'/>
                    <span className='Footer-second-container-legal-text-span'>
                        2022 Spotify AB
                    </span>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Footer