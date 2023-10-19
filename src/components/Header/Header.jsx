import { useState } from "react";
import "./Header.css";
import { TbAlignRight } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({ colorCode }) => {
  const [navItemShow, setNavItemShow] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringSecond, setIsHoveringSecond] = useState(false);
  const [isHoveringThird, setIsHoveringThird] = useState(false);
  const [isHoveringFouth, setIsHoveringFouth] = useState(false);
  const [isHoveringFive, setIsHoveringFive] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // second list

  const handleMouseOverSecond = () => {
    setIsHoveringSecond(true);
  };

  const handleMouseOutSecond = () => {
    setIsHoveringSecond(false);
  };

  // third

  const handleMouseOverThird = () => {
    setIsHoveringThird(true);
  };

  const handleMouseOutThird = () => {
    setIsHoveringThird(false);
  };
  // Fourth
  const handleMouseOverFouth = () => {
    setIsHoveringFouth(true);
  };

  const handleMouseOutFouth = () => {
    setIsHoveringFouth(false);
  };
  // Five

  const handleMouseOverFive = () => {
    setIsHoveringFive(true);
  };

  const handleMouseOutFive = () => {
    setIsHoveringFive(false);
  };

  // --------------------------------------------------------------------
  const onNavItemShow = () => {
    setNavItemShow(!navItemShow);
  };

  //
  //
  //
  const addClass = navItemShow ? "nav__hide" : "nav_add_back_color";
  const addHeader = !navItemShow && "nav_header-add";
  const transition = { type: "spring", duration: 3 };

  //
  //

  return (
    <div className={`header ${addHeader}`}>
      <img src="images/logz.png" alt="logo-img" />
      <motion.nav
        initial={{ left: "-10rem" }}
        whileInView={{ left: navItemShow ? "0rem" : "0rem" }}
        transition={transition}
        className={`header__nav ${addClass} .nav__show__duration`}
      >
        <ul className="header__ul">
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Link
              to="/"
              className="li__value"
              style={{
                color: isHovering && colorCode,
              }}
            >
              HOME
            </Link>
          </li>
          <li
            onMouseOver={handleMouseOverSecond}
            onMouseOut={handleMouseOutSecond}
          >
            <Link
              to="about_us"
              className="li__value"
              style={{
                color: isHoveringSecond && colorCode,
              }}
            >
              ABOUT US
            </Link>
          </li>
          <li
            onMouseOver={handleMouseOverThird}
            onMouseOut={handleMouseOutThird}
            style={{
              color: isHoveringThird && colorCode,
            }}
          >
            PRODUCTS
          </li>
          <li
            onMouseOver={handleMouseOverFouth}
            onMouseOut={handleMouseOutFouth}
            style={{
              color: isHoveringFouth && colorCode,
            }}
          >
            CAREERS
          </li>
          <li onMouseOver={handleMouseOverFive} onMouseOut={handleMouseOutFive}>
            <Link
              to="add_partner"
              className="li__value"
              style={{
                color: isHoveringFive && colorCode,
              }}
            >
              BECOME A PARTNER
            </Link>
          </li>
          <li>ENQUIRY NOW</li>
          <li>BLOG</li>
          <li>
            {" "}
            <Link
              to="contact_us"
              style={{ background: colorCode, color: "#fff" }}
              className="li__value header-last-li"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </motion.nav>
      {/* mobile mode */}
      {navItemShow ? (
        <TbAlignRight onClick={onNavItemShow} className="header-icon" />
      ) : (
        <RxCross1 onClick={onNavItemShow} className="header-icon" />
      )}
    </div>
  );
};

export default Header;
