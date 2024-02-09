import  { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const [slider, setSlider] = useState([]);
  const [isScaled, setIsScaled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("./Slider.json")
      .then((res) => res.json())
      .then((data) => {
        setSlider(data);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  const handleTransitionEnd = () => {
    // Called when the transition (scale animation) is complete
    setIsScaled((prev) => !prev);
    const newIndex = (activeIndex + 1) % slider.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScaled(true); // Trigger the scale animation
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, slider]);

  return (
    <div>
      <Carousel
        showThumbs={false}
        selectedItem={activeIndex}
        onChange={setActiveIndex}
      >
        {slider.map((item, index) => (
          <div className="carousel w-full h-screen" key={index}>
            <div
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <img
                src={item.image}
                alt={`slide-${index}`}
                className={`w-full object-cover   transition-transform custom-duration delay-1000 ${
                  isScaled ? "scale-150" : "scale-100"
                }`}
                onTransitionEnd={handleTransitionEnd}
              />
              <div className="flex ">
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 w-full bg-black opacity-75">
                  <div
                    data-aos="fade-up"
                    data-aos-once="false"
                    data-aos-mirror="true"
                    data-aos-duration="1000"
                    className="text-white space-y-7 pl-12 w-1/2"
                  >
                    <h2 data-aos="zoom-out-up" className="text-6xl font-bold">
                      Affordable Price For Tourist Guide
                    </h2>
                    <p data-aos="zoom-out-up">
                      There are many variations of passages of available, but
                      the majority have suffered alteration in some form
                    </p>
                    <div>
                      <button className="btn btn-primary mr-5">
                        Discover More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
