import videoBg from '../assests/videoBg.mp4'

const Hero = () => {
    return  (
        <>
        <div class="header-section">
            <video className="bg-video" src={videoBg} autoPlay loop muted />
        </div>
        </>
    )
}

export default Hero;