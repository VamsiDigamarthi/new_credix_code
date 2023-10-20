import React, { useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { MdOutlineLabelImportant } from "react-icons/md";
import {
  desVariants,
  featureVariants,
  titleVariants,
} from "../../data/animation";

const Home = ({ homeLoan, colorCode }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const ReadMore = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  return (
    <div className="home-total-divcontainer">
      <h1>Home Loans</h1>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={featureVariants}
        className="Home-about-maincontainer"
      >
        {homeLoan?.map((i, index) => (
          <div className="Home-loanmain-divcon" key={index}>
            <div className="About-homeloan-container">
              <h3>{i.Heading}</h3>
              <span>{i.firstline}</span>
              {expandedItems.includes(index) && (
                <div>
                  <span>{i.secondline}</span>
                  <span>
                    <strong>{i.Strong}</strong>
                  </span>
                </div>
              )}
              <button
                className="about-read-more-less"
                id="read__more__style"
                onClick={() => ReadMore(index)}
              >
                {expandedItems.includes(index)
                  ? "Read Less..."
                  : "Read More...  "}
              </button>
            </div>
            <div className="Home-loanimg-container">
              <img
                style={{ width: "450px", height: "350px", borderRadius: "9px" }}
                src={i.Image}
                alt=""
              />
            </div>
          </div>
        ))}
      </motion.div>
      {/* home loan benifits */}
      <div>
        <div>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="heading"
          >
            Home Loan Eligibility Criteria:
          </motion.h2>
          <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            Home Loan eligibility depends upon various factors. A few of them
            are listed here
          </motion.span>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="Home-loan-criteriacontainer"
          >
            <span id="logo--div">
              {" "}
              <MdOutlineLabelImportant
                style={{
                  color: colorCode,
                }}
              />
              <strong>Income</strong> : Your income determines the amount of
              home loan you are eligible for. Banks generally keep the EMI to
              income ratio at 0.45 to 0.50.
            </span>
            <span id="logo--div">
              {" "}
              <MdOutlineLabelImportant
                style={{
                  color: colorCode,
                }}
              />
              <strong>Tenure </strong> : The longer tenure you opt for, the more
              is your home loan eligibility and the lesser is your EMI.
            </span>
            <span id="logo--div">
              {" "}
              <MdOutlineLabelImportant
                style={{
                  color: colorCode,
                }}
              />
              <strong>Age</strong> : Your age will determine your home loan
              tenure and hence your eligibility.
            </span>
            <span id="logo--div">
              {" "}
              <MdOutlineLabelImportant
                style={{
                  color: colorCode,
                }}
              />
              <strong>Interest Rate offered</strong> : Banks offer Fixed and
              Floating Rates of Interest. If your interest rates are on a lower
              side, then the loan eligibility will be higher.
            </span>
            <span id="logo--div">
              {" "}
              <MdOutlineLabelImportant
                style={{
                  color: colorCode,
                }}
              />
              <strong>CIBIL Score </strong> : Your credit report tells the bank
              about your repayment capacity and hence determines if you’re
              eligible for a loan.
            </span>
          </motion.div>
          {/* Home Loan Interest Rates: */}
          <div>
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Home Loan Interest Rates:
            </motion.h2>

            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              Home Loan in India can primarily be classified into two based on
              interest rates: fixed rate and floating rate of interest.
            </motion.span>
          </div>
          {/* Home Loan – Fixed Interest Rate: */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2>Home Loan – Fixed Interest Rate:</h2>
            <span>
              Fixed interest rate refers to repayment of home loans in fixed
              equal installments over the entire period of the loan. In this
              case, the interest rate doesn’t change with market fluctuations.
            </span>
            <span>
              During the early part of the tenure, the monthly payments are used
              to service the interest and the principal is served in the later
              parts of the tenure.Very few lenders in India offer pure fixed
              rates where the rate of interest remains constant over the entire
              tenure. Most lenders have a reset clause of 3-5 years. If the
              borrower is certain that the rate of interest is the lowest in the
              market, only then should he opt for fixed rates of interest.
            </span>
          </motion.div>
        </div>
      </div>
      <div className="home-benifits-Drawbacks">
        <div className="home-benefit-container">
          <h2>Benifits</h2>
          <span>
            <MdOutlineLabelImportant
              style={{
                color: colorCode,
              }}
            />
            Interest rate remains fixed irrespective of market conditions
          </span>
          <span>
            <MdOutlineLabelImportant
              style={{
                color: colorCode,
              }}
            />
            A fixed-rate home loan is ideal for those who are good at budgeting
            and want a fixed monthly repayment schedule.
          </span>
        </div>
        <div className="home-drawback-container">
          <h2>Drawbacks</h2>

          <span>
            <MdOutlineLabelImportant
              style={{
                color: colorCode,
              }}
            />
            The major drawback with fixed interest rates is that they are
            usually 1-2.5 percentage points higher than the floating rate home
            loan.
          </span>
          <span>
            <MdOutlineLabelImportant
              style={{
                color: colorCode,
              }}
            />
            If the interest rate decreases, the fixed rate home loan doesn’t get
            the benefit of reduced rates.
          </span>
        </div>
      </div>
      {/* Slider code */}
    </div>
  );
};

export default Home;
