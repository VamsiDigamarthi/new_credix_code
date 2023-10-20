import "./Services.css";
import Slider from "react-slick";
import { RiHomeOfficeLine } from "react-icons/ri";
export const Services = ({ colorCode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true,
    useCss: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="services-card">
      <h1>Our Services</h1>
      <p>
        We provide Personal Loans, Home Loans, Business Loans, Vehicle Loans and
        Balance Transfer Services
      </p>
      <Slider {...settings}>
        <div className="slider-inner-div">
          <div
            style={{
              color: colorCode,
            }}
            className="icons-slider-card"
          >
            <RiHomeOfficeLine size={25} />
            <h3>Balance Transfer</h3>
          </div>
          <p>
            Many people don’t know that banks don’t increase Home Loan EMIs but
            they increase the tenure of the home loan when the floating interest
            rate increases. If you are paying 11-12% interest rate on your home
            loan then we can help you save a lot of money.
          </p>
        </div>
        <div className="slider-inner-div">
          <div
            style={{
              color: colorCode,
            }}
            className="icons-slider-card"
          >
            <RiHomeOfficeLine size={25} />
            <h3>Business Loan</h3>
          </div>
          <p>
            Financial Flow is the life blood of any successful organisation.
            Most businesses will nedd a large amount of working capital
          </p>
        </div>
        <div className="slider-inner-div">
          <div
            style={{
              color: colorCode,
            }}
            className="icons-slider-card"
          >
            <RiHomeOfficeLine size={25} />
            <h3>Home Loan</h3>
          </div>
          <p>
            A Home Loan is a secured loan product where the lender provides
            finances for the purchase or construction of a
            residential/commercial property
          </p>
        </div>
        <div className="slider-inner-div">
          <div
            style={{
              color: colorCode,
            }}
            className="icons-slider-card"
          >
            <RiHomeOfficeLine size={25} />
            <h3>Personal Loan</h3>
          </div>
          <p>
            A Personal loan is a loan your personal use, be it your child's
            wedding, a dream vacation, or a shopping extravaganza
          </p>
        </div>
        {/* <div className="slider-inner-div">
          <div
            style={{
              color: colorCode,
            }}
            className="icons-slider-card"
          >
            <RiHomeOfficeLine size={25} />
            <h3>Balance Transfer</h3>
          </div>
          <p>
            Many people don’t know that banks don’t increase Home Loan EMIs but
            they increase the tenure of the home loan when the floating interest
            rate increases. If you are paying 11-12% interest rate on your home
            loan then we can help you save a lot of money.
          </p>
        </div> */}
      </Slider>
    </div>
  );
};
