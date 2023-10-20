import { featureVariants } from "../../data/animation";
import { OtherCards } from "../../data/loanData";
import "./OtherCard.css";
import { motion } from "framer-motion";
export const OtherCard = ({ colorCode }) => {
  const style = {
    color: colorCode,
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={featureVariants}
      className="other__card"
    >
      {OtherCards.map((item) => (
        <div className="other__inner__card">
          <span style={style}>{item.icons}</span>
          <p>{item.title}</p>
        </div>
      ))}
    </motion.div>
  );
};
