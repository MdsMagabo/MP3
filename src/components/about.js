import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faContactBook } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-recontainer'>
            <div className='about-logo'>
            </div>
            <h3 className='about-text'>ABOUT US</h3>
            <p className='about-sub'>GumuGulong is the premier online tire marketplace in the Philippines. It is operated by Tower T5 Incorporated and 100% Filipino owned. It was launched in May 2020 and carefully curated a community of legitimate tire sellers and installation centers in the Philippines. It currently carries 20+ quality tire brands and over 100 tire shops in the country and still growing.</p>
         
            <p className='about-sub'>
            Our vision is to revolutionize how Filipinos buy tires by providing quality tires at competitive pricing backed by superior customer service from searching tires to installation. We have made it possible to shop for tires online from legitimate sellers, complete with the manufacturer's warranty and have it professionally fitted by an installation center convenient for our valued customers.</p>
            <div className='icon-footer'>
            <FontAwesomeIcon icon={faFacebook} className='icon-fa'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGoogle} className='icon-google'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faYoutube} className='icon-yt'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faContactBook} className='icon-contact'></FontAwesomeIcon>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default About;
