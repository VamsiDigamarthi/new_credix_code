import { useState } from "react";
import "./CallBack.css";
import { motion } from "framer-motion";

export const CallBack = ({ colorCode }) => {
  // const transition = { type: "spring", duration: 3 };
  const [hasFocusYourName, setFocusYourName] = useState(false);
  const [hasFocusEmail, setFocusEmail] = useState(false);
  const [hasFocusPhone, setFocusPhone] = useState(false);
  const [hasFocusSelect, setFocusSelect] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          type: "easeInt",
          duration: 1,
          delay: 0.2,
        },
      }}
      className="call__back__main"
    >
      <img className="call__back__image" src="images/call_back.jpg" alt="" />
      <form>
        <h3
          style={{
            color: colorCode,
          }}
        >
          Request A Call Back
        </h3>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            borderBottom: hasFocusYourName && `2px solid ${colorCode}`,
          }}
          onFocus={() => setFocusYourName(true)}
          onBlur={() => setFocusYourName(false)}
        />
        <input
          type="text"
          placeholder="Email"
          style={{
            borderBottom: hasFocusEmail && `2px solid ${colorCode}`,
          }}
          onFocus={() => setFocusEmail(true)}
          onBlur={() => setFocusEmail(false)}
        />
        <div>
          <input
            type="text"
            placeholder="Phone"
            style={{
              borderBottom: hasFocusPhone && `2px solid ${colorCode}`,
            }}
            onFocus={() => setFocusPhone(true)}
            onBlur={() => setFocusPhone(false)}
          />
          <input
            type="text"
            placeholder="select"
            style={{
              borderBottom: hasFocusSelect && `2px solid ${colorCode}`,
            }}
            onFocus={() => setFocusSelect(true)}
            onBlur={() => setFocusSelect(false)}
          />
        </div>
        <button
          style={{
            background: colorCode,
          }}
          type="submit"
          id="button__value"
        >
          Send Request
        </button>
      </form>
    </motion.div>
  );
};
