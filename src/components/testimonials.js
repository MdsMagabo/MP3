import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
    return (
       <section className="testimonials-sect">
            <div className="testimonials-container">
                <h2>What our clients say about our services</h2>
                <div className="testimonial-card">
                    <div className="testimonial-img1"/>
                    <span className="testimonial-person-name">Alfred Santos</span>
                    <div className="stars">
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                        <FontAwesomeIcon icon="fa-solid fa-star" />
                    </div>
                    <p className="testimonial-txt">Maganda talag ang serbisyo ng GumuGulong. Dekalidad yung mga gulong na benebenta nila. Bukod pa doon may free installation pa! Sulit na Sulit!</p>
                </div>
            </div>
       </section> 
    )
}

export default Testimonials;