import React from "react";
import { motion } from "framer-motion";
import "./Education.css";
import { MdOutlineLabelImportant } from "react-icons/md";

import { featureVariants } from "../../data/animation";

const Education = ({ colorCode }) => {
  const transition = { type: "spring", duration: 1 };

  const mobile = window.innerWidth <= 768 ? true : false;
  const style = {
    color: colorCode,
  };
  return (
    <div className="educational__loan__card">
      <h1>Educational Loan</h1>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={featureVariants}
        className="education__card__width__image"
      >
        <div>
          <span>
            Nothing can replace quality education when it comes to building a
            bright and successful future for your child and education is the
            only thing that can get a happy life going. However, due to the
            rising cost of higher education for students in India as well as
            abroad, parents are finding it more and more difficult to
            self-finance their children's education hence there is a huge demand
            for loans to cover education expenses. Unlike most educational
            institutions today, educationalloans are given to meritorious and
            deserving students so that nothing hinders their progress and they
            achieve the best of education in India or abroad. At present, almost
            every Indian bank and NBFC offer education loans in India to
            students interested in pursuing a wide range of graduate, post
            graduate, professional and doctoral courses/degrees.
          </span>

          <span>
            The quantum of expenses covered by this type of loan covers not just
            the direct expenses such as tuition fees and
            registration/examination fees, but also allied expenses such as
            those for uniforms, lab equipment/tools required for the course,
            travelling expenses and laptop. Aside from the fee payable to the
            school/college, other expenses covered by most education loans
            include:
          </span>
        </div>
        <img src="images\Educationloan.jpg" alt="" />
      </motion.div>
      <div className="education__loan__list">
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={transition}
        >
          <MdOutlineLabelImportant style={style} size={20} />
          <span>
            Amount required towards the purchase of books, uniforms, equipment
            and instruments.
          </span>
        </motion.div>
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 2 }}
        >
          <MdOutlineLabelImportant style={style} size={20} />
          <span>
            Purchase of computers/laptops, if deemed necessary for the
            completion of the course.
          </span>
        </motion.div>
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 3 }}
        >
          <MdOutlineLabelImportant style={style} size={20} />
          <span>Fees paid for Exams, Library, Laboratories, Hostel, etc.</span>
        </motion.div>
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 4 }}
        >
          <MdOutlineLabelImportant style={style} size={20} />
          <span>
            Building fund, Caution deposit, Refundable deposit (must be
            supported by receipts/bills).
          </span>
        </motion.div>
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 5 }}
        >
          <MdOutlineLabelImportant style={style} size={20} />
          <span>
            Costs incurred in travel, specifically for studies abroad.
          </span>
        </motion.div>
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 6 }}
        >
          <MdOutlineLabelImportant style={style} size={20} />
          <span>
            Additional costs that are required to successfully complete the
            course, including but not limited to, Study tours, Thesis work,
            Projects, etc.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
