import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import FaceCarouselData from "../../../_mock/FaceCarouselData";
import { lightTheme } from "../../../config/theme";
const options = {
  loop: true,
  center: true,
  items: 1,
  margin: 0,
  autoplay: true,
  dots: true,
  autoplayTimeout: 3500,
  smartSpeed: 450,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};
const Carousel = () => {
  return (
    <>
      <ReactOwlCarousel
        className="owl-carousel owl-theme"
        loop
        margin={10}
        nav
        {...options}
      >
        {FaceCarouselData &&
          FaceCarouselData.map((data, index) => {
            return (
              <div key={index} class="item">
                <h2 className="text-4xl font-bold item-text">
                  {data && data.title && data.title}
                </h2>
                <p
                  className="item-sub-text"
                  style={{ fontSize: lightTheme.typography.fontSize.md }}
                >
                  {data && data.desc && data.desc}
                </p>
                {/* Optional Button */}
                {/* <button className="fill-btn">See More</button> */}
              </div>
            );
          })}
      </ReactOwlCarousel>
      ;
    </>
  );
};

export default Carousel;
