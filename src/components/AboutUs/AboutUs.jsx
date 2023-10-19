import "./AboutUs.css";
import { motion } from "framer-motion";
import { HiChevronDoubleRight } from "react-icons/hi";
import { featureVariants } from "../../data/animation";

export const AboutUs = ({ colorCode }) => {
  const transition = { type: "spring", duration: 1 };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={featureVariants}
      className="about__us__card"
    >
      {/* <img
        src="https://www.apifirst.in/wp-content/uploads/2021/05/about.png"
        alt=""
      /> */}
      <img
        src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg"
        alt=""
      />
      <div className="about__inner__card">
        <h1>About The CredEx</h1>
        <span>
          Credex Finsol Pvt Ltd, (A Unit of Sri Sai Associates) is Incorporated
          in the year 2007 under the leadership of Mrs. K. Akhila who handled a
          team of 20 managers with 5 years of credit experience in Development
          Credit Bank Ltd. We have been awarded as a "Preferred Channel Partner"
          in the year 2008 by Magma Fincorp Ltd & Religare Finvest Ltd, "Green
          Channel Partner" in the year 2013 by Kotak Mahindra Bank Ltd. We have
          also been awarded for “Best Portfolio” by TATA Capital & Capital First
          Ltd in the year 2016.
        </span>
        <span>
          Credex stands as an epitome for dedication,expertise and the drive to
          provide our customers the service for which they chose us over the
          rest. A company that has been enabling many in fulfilling their dreams
          come true.
        </span>
        <span>
          Credex is an organization where the "Loans Made Easy", providing the
          best loans by tailoring them to our customer needs. Credex have
          disbursed loans worth over Rs. 1500+ Crores to more than 500+ happy
          customers since decade.
        </span>
        <h1>Our Mission</h1>
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={transition}
          className="about_icon_text"
        >
          <HiChevronDoubleRight size={26} style={{ color: colorCode }} />
          Empowering the loan seeker to make decisions based on informed and
          efficient financial data.
        </motion.div>
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 2 }}
          className="about_icon_text"
        >
          <HiChevronDoubleRight size={26} style={{ color: colorCode }} />
          High-end technology and big data analytics for better customer
          satisfaction.
        </motion.div>
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 3 }}
          className="about_icon_text"
        >
          <HiChevronDoubleRight size={26} style={{ color: colorCode }} />
          Highly qualified professionals aspiring to compete and create
          disruptive innovation.
        </motion.div>{" "}
        <motion.div
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 4 }}
          className="about_icon_text"
        >
          <HiChevronDoubleRight size={26} style={{ color: colorCode }} />
          Constantly in contact with you and the financial institution.
        </motion.div>
      </div>
    </motion.div>
  );
};
