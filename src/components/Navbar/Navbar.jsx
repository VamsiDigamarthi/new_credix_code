import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ colorCode }) => {
  const [initialNavItem, setInitialNavItem] = useState(0);
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

  let contactColor = "orange";
  if (colorCode === "#4D91B6") {
    contactColor = "#4D91B6";
  } else if (colorCode === "rgb(67, 187, 87)") {
    contactColor = "rgb(67, 187, 87)";
  }
  // console.log(contactColor);
  return (
    <div
      style={{
        background: openMobileUi && "rgb(235, 225, 214)",
      }}
      className="navbar-main"
    >
      <img src="images/logz.png" alt="logo-img" />
      <div className="ul-elemnts">
        <span onClick={() => setInitialNavItem(0)}>
          {" "}
          <Link
            to="/"
            style={{
              textDecoration: initialNavItem === 0 && "underline",
              color: initialNavItem === 0 && contactColor,
            }}
            className="link_changes"
          >
            HOME
          </Link>
        </span>
        <span onClick={() => setInitialNavItem(1)} style={mobileApplyMargin}>
          {" "}
          <Link
            style={{
              textDecoration: initialNavItem === 1 && "underline",
              color: initialNavItem === 1 && contactColor,
            }}
            className="link_changes"
            to="/about_us"
          >
            ABOUT US
          </Link>
        </span>
        <span onClick={() => setInitialNavItem(2)} style={mobileApplyMargin}>
          {" "}
          <Link
            style={{
              textDecoration: initialNavItem === 2 && "underline",
              color: initialNavItem === 2 && contactColor,
            }}
            className="link_changes"
            // to="/about_us"
          >
            PRODUCTS
          </Link>
        </span>
        <span onClick={() => setInitialNavItem(3)} style={mobileApplyMargin}>
          <Link
            style={{
              textDecoration: initialNavItem === 3 && "underline",
              color: initialNavItem === 3 && contactColor,
            }}
            className="link_changes"
            // to="/about_us"
          >
            CAREERS
          </Link>
        </span>
        <span onClick={() => setInitialNavItem(4)} style={mobileApplyMargin}>
          <Link
            style={{
              textDecoration: initialNavItem === 4 && "underline",
              color: initialNavItem === 4 && contactColor,
            }}
            className="link_changes"
            to="add_partner"
          >
            BECOME A PARTNER
          </Link>
        </span>
        <span style={mobileApplyMargin}>
          <Link
            style={{
              background: contactColor,
            }}
            className="link_changes contact_btn"
            to="contact_us"
          >
            CONTACT US
          </Link>
        </span>
      </div>
      <ul style={mobileElement}>
        <li onClick={onOpenMobileUIElement} style={mobileApplyMargin}>
          <Link className="link_changes" to="/">
            HOME
          </Link>
        </li>
        <li onClick={onOpenMobileUIElement} style={mobileApplyMargin}>
          <Link className="link_changes" to="/about_us">
            ABOUT US
          </Link>
        </li>
        <li onClick={onOpenMobileUIElement} style={mobileApplyMargin}>
          PRODUCTS
        </li>
        <li onClick={onOpenMobileUIElement} style={mobileApplyMargin}>
          CAREERS
        </li>
        <li onClick={onOpenMobileUIElement} style={mobileApplyMargin}>
          <Link className="link_changes" to="add_partner">
            BECOME A PARTNER
          </Link>
        </li>
        <li onClick={onOpenMobileUIElement} style={mobileApplyMargin}>
          <Link
            className="link_changes contact_btn"
            style={{
              background: contactColor,
            }}
            to="contact_us"
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

export default Navbar;
