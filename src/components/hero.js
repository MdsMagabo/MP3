import videoBg from '../assests/videoBg.mp4';
import Alltires from "./alltires";
import WhatWeOffer from './whatWeOffer';
import Promo from "./promo";
import LogoSect from './logoSect';

const Hero = () => {
    return  (
        <>
            <div className="header-section">
                <video className="bg-video" src={videoBg} autoPlay loop muted />
            </div>
            <Alltires/>
            <WhatWeOffer/>
            <Promo/>
            <LogoSect/>
        </>
    )
}

export default Hero;