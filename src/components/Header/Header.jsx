import { useState } from "react";
import "./Header.css";
import { TbAlignRight } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ colorCode }) => {
  const [openMobileUi, setOpenMobileUi] = useState(false);

  const onOpenMobileUIElement = () => {
    setOpenMobileUi(!openMobileUi);
  };

  // let mobileElement = openMobileUi && "mobile-elements";

  let mobileElement = {
    display: openMobileUi && "block",
    position: openMobileUi && "absolute",
    flexDirection: openMobileUi && "column",
    top: openMobileUi && "100%",
    padding: openMobileUi && "20px",
    backgroundColor: openMobileUi && "rgb(235, 225, 214)",
    width: openMobileUi && "100%",
    zIndex: openMobileUi && "999",
  };

  let mobileApplyMargin = {
    marginBottom: openMobileUi && "10px",
    fontSize: openMobileUi && "16px",
  };

  return (
    <div
      style={{
        background: openMobileUi && "rgb(235, 225, 214)",
      }}
      className="navbar-main"
    >
      <img src="images/logz.png" alt="logo-img" />
      <ul>
        <li>
          <Link to="/" className="li__value">
            HOME
          </Link>
        </li>
        <li>
          <Link to="about_us" className="li__value">
            ABOUT US
          </Link>
        </li>
        <li>PRODUCTS</li>
        <li>CAREERS</li>
        <li>
          <Link to="add_partner" className="li__value">
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

      <div className="nav-corss-card">
        {openMobileUi ? (
          <RxCross1 onClick={onOpenMobileUIElement} />
        ) : (
          <RxHamburgerMenu onClick={onOpenMobileUIElement} />
        )}
      </div>
    </div>
  );
};

export default Header;
