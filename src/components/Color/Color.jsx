import { useState } from "react";
import "./Color.css";

const color = [
  {
    colorValue: "rgb(67, 187, 87)",
  },
  {
    colorValue: "rgb(75, 77, 204)",
  },
  {
    colorValue: "orange",
  },
];

export const Color = ({ setColorCode, colorCode }) => {
  const [openColorBox, setOpenColorBox] = useState(false);

  const openColorBoxs = () => {
    setOpenColorBox(!openColorBox);
    console.log("funs");
  };

  const applyColor = (color) => {
    setColorCode(color);
    setOpenColorBox(false);
  };

  return (
    <>
      <div className="color__main__card">
        <div
          style={{
            background: colorCode,
          }}
          onClick={openColorBoxs}
          className="color__box"
        ></div>
      </div>
      {openColorBox && (
        <div className="multi__color__box">
          {color.map((item, key) => (
            <div
              key={key}
              onClick={() => applyColor(item.colorValue)}
              className="green"
              style={{ background: item.colorValue }}
            ></div>
          ))}
        </div>
      )}
    </>
  );
};
