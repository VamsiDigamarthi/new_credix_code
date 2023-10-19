import "./Hero.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

export const Hero = ({ colorCode }) => {
  const transition = { type: "spring", duration: 3 };
  const transition2 = { type: "spring", duration: 10 };

  let imageScr = "images/shape 2.png";

  if (colorCode === "rgb(75, 77, 204)") {
    imageScr = "images/shape blue.png";
  } else if (colorCode === "rgb(67, 187, 87)") {
    imageScr = "images/shape green.png";
  }

  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="hero-main-heading">
          <span
            className="stroke-text"
            style={{
              WebkitTextStrokeColor: colorCode,
            }}
          >
            Why
          </span>
          CredEx ......?
        </h1>
        <h1>
          CredEx is an online aggregator of financial products and services
        </h1>
        <span>
          We believe that unlike the common perception, every customer need is
          different and every customer has a different priority. So a one size
          fits all approach is seldom good.
        </span>
        <motion.div
          initial={{ opacity: "0" }}
          whileInView={{ opacity: "1" }}
          transition={transition2}
          className="hero-btn"
          style={{
            borderBottom: `2px solid ${colorCode}`,
          }}
        >
          <button style={{ color: colorCode }}>Read me</button>
          <AiOutlineArrowRight
            style={{
              color: colorCode,
            }}
          />
        </motion.div>
      </div>
      <div className="hero-right">
        <img className="family-back-image" src={imageScr} alt="" />
        <motion.div
          initial={{ right: "-15rem" }}
          whileInView={{ right: "0rem" }}
          transition={transition}
          className="family__image"
        >
          <img
            src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/personal-banking/PL-EligibilityD.PNG"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};
