import React, { useState } from "react";
import "./BussinessLoan.css";
import { MdOutlineLabelImportant } from "react-icons/md";
import { Businessloan } from "../../data/loanData";
import { motion } from "framer-motion";
import {
  desVariants,
  featureVariants,
  titleVariants,
} from "../../data/animation";

const BussinessLoan = ({ colorCode }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const ReadMore = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const style = { color: colorCode };

  return (
    <div className="Business-total-divcontainer">
      <h1>Business Loan</h1>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={featureVariants}
        className="Business-about-maincontainer"
      >
        {Businessloan?.map((i, index) => (
          <div className="Business-loanmain-divcon" key={index}>
            <div className="About-Businessloan-container">
              <h3>{i.Heading}</h3>
              <span>{i.firstline}</span>
              {expandedItems.includes(index) && (
                <div>
                  <span>{i.middle}</span>
                  <span>{i.secondline}</span>
                  <span>
                    <strong>{i.Strong}</strong>
                  </span>
                </div>
              )}
              <button
                className="about-read-more-less "
                id="read__more__style"
                onClick={() => ReadMore(index)}
              >
                {expandedItems.includes(index)
                  ? "Read Less..."
                  : "Read More...  "}
              </button>
            </div>
            <div className="Business-loanimg-container">
              <img style={{ borderRadius: "9px" }} src={i.Image} alt="" />
            </div>
          </div>
        ))}
      </motion.div>
      {/* home loan benifits */}
      <div>
        <div className="Business-loanuvnder-div">
          <div className="Business-loan-criteriacontainer">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Business loans are categorized broadly into following 2 segments.
            </motion.h2>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              {" "}
              <MdOutlineLabelImportant style={style} />
              <strong>Unsecured business loans</strong> : 3 year term loan for
              proprietorship, partnership, private limited companies and limited
              companies based on a sound balance sheet.
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              {" "}
              <MdOutlineLabelImportant style={style} />
              <strong>Secured business loans</strong> : Working capital funding
              in rupees as well as foreign currency for proprietorship,
              partnership, private limited companies and limited companies
            </motion.span>
          </div>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          >
            Business Loan Eligibility Criteria
          </motion.h2>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="Business-loan-criteriacontainer"
          >
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              Most banks have a common set of parameters that they evaluate loan
              applicats with, but what exactly these parameters are depends from
              bank to bank.
            </motion.span>
          </motion.div>
          {/* Business Loan Interest Rates: */}

          <div className="Business-loanuvnder-div">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Business Loan Amount
            </motion.h2>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              An individual can borrow as much as they can repay. This in
              banking terms would mean a Business loan that has an EMI that does
              not exceed 40% of your monthly take home income, where the EMIs
              for existing loans are also deducted.
            </motion.span>
          </div>
          {/* Business Loan – Fixed Interest Rate: */}
          <div className="Business-loanuvnder-div">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Age
            </motion.h2>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              Most banks will disburse business loans to individuals aged
              between 24 to 65 years.
            </motion.span>
          </div>
          <div className="Business-loanuvnder-div">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Current Business Experience
            </motion.h2>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              Banks will prefer that your business has been showing stable signs
              of growth at least for the last 3 years. If you can show sustained
              billing and revenues and top it off with profit, getting a
              business loan should not be a problem for you. Some banks give a
              loan amount up to 60 to 80% of your median annual profits.
            </motion.span>
          </div>
          <div className="Business-loanuvnder-div">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Total Business Experience
            </motion.h2>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              A bank will prefer if you have been engaged in sustainable
              business for atleast 5 years to consider giving you a loan. Your
              diversity in terms of business experience and so on along with
              good results will help you acquire your business loan..
            </motion.span>
          </div>
          <div className="Business-loanuvnder-div Business-loan-criteriacontainer">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Documents Required
            </motion.h2>

            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              <MdOutlineLabelImportant style={style} id="Business logo--div" />
              Identity Proof
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              <MdOutlineLabelImportant style={style} id="Businesslogo--div" />
              Address Proof
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              <MdOutlineLabelImportant style={style} id="Businesslogo--div" />
              Bank Statement (Latest 6 months)
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              <MdOutlineLabelImportant style={style} id="Businesslogo--div" />
              Latest ITR along with other relevant docs like Balance Sheet, P&L,
              Audit Report (Certified by a CA)
            </motion.span>
          </div>
          <div className="Business-loanuvnder-div">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Tenure
            </motion.h2>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              Business loans range from min. of 1 year up to a max of 4 years
            </motion.span>
          </div>
          <div className="Business-loanuvnder-div">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Processing Time
            </motion.h2>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              The processing of the loans usually takes 4 working days after all
              the documents are submitted.
            </motion.span>
          </div>
          <div className="Business-loanuvnder-div">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
            >
              Pre-Payment
            </motion.h2>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              You can pre-pay the loan after repaying a min. of 6 EMI’s.
              Foreclosure charges would be applicable as per the banks term and
              condition.You can make a part pre-payment with a minimum amount of
              Rs.50,000 after 6 months from the date of disbursement of the
              loan. This part pre-payment can be made only once in a financial
              year.
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessLoan;
