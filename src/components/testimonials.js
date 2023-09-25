import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {

    const displayTestimonials = () => {
        const testimonialSect = document.querySelector(".testimonials-sect");
        const triggerTestimonials = window.innerHeight / 5 * 4;
        const showTestimonials = testimonialSect.getBoundingClientRect().top;

        triggerTestimonials > showTestimonials ? testimonialSect.classList.add("displayTestimonials") : testimonialSect.classList.remove(".displayTestimonials");
    }

    // event listener

    window.addEventListener("click", displayTestimonials);
    return (
       <section className="testimonials-sect">
           <div className="testimonials-container">
                <h2>What our clients say about us,</h2>
                <div className="testimonial-card">
                    <div className="testimonial-img tstmnl-img1"/>
                    <span className="testimonial-person-name">Alfred Santos</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">Maganda talga ang serbisyo ng GumuGulong. Bukod sa dekalidad na gulong na benebenta nila, Meron pang free installation. Sulit talaga yung pera mo.</p>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-img tstmnl-img1"/>
                    <span className="testimonial-person-name">Alexa Dimarangan</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">
                        Ang nagustuhan ko sa GumuGulong ay yung mga promo nila. Sa murang halaga, meron ka nang serbisyong de kalidad
                    </p>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-img tstmnl-img1"/>
                    <span className="testimonial-person-name">Alfred Santos</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">Maganda talga ang serbisyo ng GumuGulong. Bukod sa dekalidad na gulong na benebenta nila, Meron pang free installation. Sulit talaga yung pera mo.</p>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-img tstmnl-img1"/>
                    <span className="testimonial-person-name">Alfred Santos</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">Maganda talga ang serbisyo ng GumuGulong. Bukod sa dekalidad na gulong na benebenta nila, Meron pang free installation. Sulit talaga yung pera mo.</p>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-img tstmnl-img1"/>
                    <span className="testimonial-person-name">Alfred Santos</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">Maganda talga ang serbisyo ng GumuGulong. Bukod sa dekalidad na gulong na benebenta nila, Meron pang free installation. Sulit talaga yung pera mo.</p>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-img tstmnl-img1"/>
                    <span className="testimonial-person-name">Alfred Santos</span>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p className="testimonial-txt">Maganda talga ang serbisyo ng GumuGulong. Bukod sa dekalidad na gulong na benebenta nila, Meron pang free installation. Sulit talaga yung pera mo.</p>
                </div>
           </div> 
           <div className="testimonial-navs">

           </div>
       </section>
    )
}

export default Testimonials;