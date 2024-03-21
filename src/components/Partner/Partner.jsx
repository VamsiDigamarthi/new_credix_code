import "./Partner.css";
import { AiFillRightCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
export const Partner = ({ colorCode }) => {
  const screenRef = useRef();
  const transition = { type: "spring", duration: 1 };

  const mobile = window.innerWidth <= 768 ? true : false;
  // const desk = mobile && "hidden";
  // const mobile_view = mobile ? "show" : "hidden";

  useEffect(() => {
    screenRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={screenRef} className="partner__card">
      <div className="partner__left">
        <h1>Join as Credex Partner</h1>
        <span>
          CredEx is an online aggregator of financial products and services. We
          believe that unlike the common perception, every customer need is
          different and every customer has a different priority. So a one size
          fits all approach is seldom good.
        </span>
        <motion.span
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={transition}
          className="partner-icon-with-text"
        >
          <AiFillRightCircle size={22} style={{ color: colorCode }} />
          Welcome to Credex Finsol Pvt Ltd
        </motion.span>
        <motion.span
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 2 }}
          className="partner-icon-with-text"
        >
          <AiFillRightCircle size={22} style={{ color: colorCode }} />
          we are the largest and most Trusted loans provider in AP
        </motion.span>
        <motion.span
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 3 }}
          className="partner-icon-with-text"
        >
          <AiFillRightCircle size={22} style={{ color: colorCode }} />
          CredEx is an online aggregator of financial products and services.
        </motion.span>
        <div className="left__partner__image__card">
          {/* <img src="images/partner_1.png" alt="" /> */}
          {/* <img src="images/partner_3.png" alt="" /> */}
        </div>
      </div>
      <div className="partner__right">
        <h4>Enter Your Details</h4>
        <div className="partner_input_card">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="partner_input_card">
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Profession" />
        </div>
        <div className="partner_input_card">
          <input type="text" placeholder="Name of Your Business" />
          <input type="text" placeholder="City" />
          {/* <input
            type="text"
            placeholder="Have you worked with DSA / Bank or NBFC's Before Yes / No"
          /> */}
        </div>
        <div className="partner_input_card">
          <input type="text" placeholder="State" />

          <input
            type="text"
            placeholder="Have you worked with DSA / Bank or NBFC's Before Yes / No"
          />
        </div>
        <div className="partner_button_card">
          <button
            style={{
              border: `2px solid ${colorCode}`,
              color: colorCode,
            }}
          >
            Send Request
          </button>
          <a
            target="__black"
            href="https://play.google.com/store/apps/details?id=com.brihaspathi.CredexPartners&hl=en&pli=1"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
