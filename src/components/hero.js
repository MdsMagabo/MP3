import videoBg from '../assests/videoBg.mp4';
import Brand from "./brand.js";
import Alltires from "./alltires";
import WhatWeOffer from './whatWeOffer';

const Hero = () => {
    return  (
        <>
            <div className="header-section">
                <video className="bg-video" src={videoBg} autoPlay loop muted />
            </div>
            <Alltires/>
            <WhatWeOffer/>
            <Brand/>
        </>
    )
}

export default Hero;