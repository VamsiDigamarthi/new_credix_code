import "./Testimonials.css";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { motion } from "framer-motion";
import { testimonialsData } from "../../data/testimonial";
import { useState } from "react";

export const Testimonials = ({ colorCode }) => {
  const [selected, setSelected] = useState(0);

  const tlength = testimonialsData.length;

  const transition = { type: "spring", duration: 3 };
  return (
    <div className="testimonials-card">
      <h2
        style={{
          color: colorCode,
          borderBottom: `2px solid ${colorCode}`,
        }}
      >
        Testimonials
      </h2>
      <div>
        <div className="test-left">
          <h1 className="stroke-text ">What They</h1>
          <h2>Say About Us</h2>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            {testimonialsData[selected].review}
          </motion.span>
          <div>
            <span>Customer : </span>
            <span
              style={{
                color: colorCode,
              }}
            >
              {testimonialsData[selected].name}
            </span>
          </div>
        </div>
        <div className="test-right">
          <div
            style={{
              border: `1px solid ${colorCode}`,
            }}
            className="ouline_div"
          ></div>
          <div
            style={{ background: colorCode }}
            className="eleveted__div"
          ></div>
          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={testimonialsData[selected].image}
            alt=""
          />
          <div className="arrow-card">
            <AiOutlineArrowLeft
              style={{
                color: colorCode,
              }}
              size={25}
              onClick={() => {
                selected === 0
                  ? setSelected(tlength - 1)
                  : setSelected((prev) => prev - 1);
              }}
            />
            <AiOutlineArrowRight
              style={{
                color: colorCode,
              }}
              size={25}
              onClick={() => {
                selected === tlength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
