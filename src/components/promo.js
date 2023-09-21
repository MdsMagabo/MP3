import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../assests/images/image1.png"
import sliderImg2 from "../assests/images/image2.png"
import sliderImg3 from "../assests/images/image3.jpg"
import sliderImg5 from "../assests/images/image5.jpg"



import Slider from 'react-slick'

const Promo = () =>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className="promo-carousel">
                <h2>Promo</h2>
                <Slider {...settings}>
                   <div>
                        <img className="promo-img" src={sliderImg1} alt=""/>
                   </div>
                   <div>
                         <img className="promo-img"  src={sliderImg2} alt=""/>
                  </div>
                  <div>
                         <img className="promo-img"  src={sliderImg3} alt=""/> 
                  </div>
                  <div>
                         <img className="promo-img"  src={sliderImg5} alt=""/>
                  </div>
                </Slider>
                <div className="container-btn">
                </div>
            </div>
        </>
    )
}
export default Promo;