// import { useEffect, useState } from "react";
import "./App.css";
import { CallBack } from "./components/CallBack/CallBack";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Loans } from "./components/Loans/Loans";
import { Services } from "./components/Services/Services";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Partner } from "./components/Partner/Partner";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ContactUs } from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import { Color } from "./components/Color/Color";
import { useState } from "react";
import PersonLoan from "./components/PersonalLoan/PersonalLoan";

const homeLoan = [
  {
    id: "1",
    Heading: "Home Loans",
    Image: "images/homeloan.jpg",
    firstline:
      "A Home Loan is a secured loan product where the lender provides finances for the purchase or construction of a residential/commercial property. One can also avail a housing loan to buy a plot of land and construct on it. Home Loans are also issued to extend/ repair/ renovate/ alter a new or second-hand property. The Home Loan is taken by a borrower against the property/security to be bought. This is done by giving the banker a conditional ownership over the property i.e. if the borrower fails to pay back the loan, the banker can retrieve the lent money by selling the property.",
    secondline:
      "Most lenders get the property valued independently and provide loans based on their estimated value. It is important to remember, however, that frequently their valuation is significantly lower than the actual cost and hence the requirement of the borrowers goes up. Home loans in Indian Banks are provided up to maximum of 80% (90% for loan amount below INR 20 lakhs) of the value of the house. Home loans are repaid using Equated Monthly Installments (EMIs) spread over a fixed tenure.",
    Strong:
      "CredEx Loans Brings You The Best Deals In Home Loans Using Its Extensive Network of Partner Banks. Apply For A Home Loan Today – Fill The Free Quote Form Now!",
  },
];

const personalLoan = [
  {
    id: "2",
    Heading: "Personal Loan",
    Image: "images/PersonalLoan.jpg",
    firstline:
      "A personal loan is a loan for your personal use, be it your child’s wedding, a dream vacation, or a shopping extravaganza. A personal loan does not require any security or collateral and can be availed without much fuss. Typically personal loans range from Rs. 50,000 to Rs. 50 Lacs with a tenure typically ranging from 12 to 60 months. Getting a Personal loan is quite stress free and there are typically a number of offers in the market most of the time.",
    secondline:
      "Apart from the rate of interest banks also charge some fees which are usually of two types. Once when you are applying for the loan and once when you are pre-closing the loan. The fees when charged at the time of processing called as Processing Fees vary from bank to bank from 0% - 2% of the loan amount. the second charge is the prepayment penalty paid at the time of pre-closure. This too varies from 2% – 3 %.",
  },
];

function App() {
  const [colorCode, setColorCode] = useState("orange");
  // const [scrollTop, setScrollTop] = useState();

  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     setScrollTop(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   let svg = document.getElementById("svg");

  //   let path = document.getElementById("path");

  //   let totalDistance = svg.clientHeight - window.innerHeight;

  //   totalDistance = totalDistance + 1100;

  //   const percentage = scrollTop / totalDistance;

  //   const pathLength = path.getTotalLength();

  //   path.style.strokeDasharray = `${pathLength}`;

  //   path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;

  //   console.log(scrollTop);
  // }, [scrollTop]);

  console.log(colorCode);

  return (
    <div className="App">
      <Router>
        <Header colorCode={colorCode} />
        <Color setColorCode={setColorCode} colorCode={colorCode} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero colorCode={colorCode} />
                <Loans colorCode={colorCode} />
                <Services colorCode={colorCode} />
                <CallBack colorCode={colorCode} />
                <Testimonials colorCode={colorCode} />

                {/* <div className="svg">
                  <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="658"
                    height="1531"
                    viewBox="0 0 658 1531"
                    fill="none"
                  >
                    <path
                      id="path"
                      d="M657 1C462.003 32.2802 63.8151 130.452 31.0375 272.897V595.323C37.1074 639.436 45.6053 735.843 31.0375 768.567C17.3801 785.41 -7.20316 819.097 3.72273 819.097H31.0375M31.0375 819.097H87.9431M31.0375 819.097C55.3172 823.107 98.4138 837.384 76.562 862.408M103.877 903.313L78.8382 864.814C63.6634 881.657 28.306 912.937 8.27519 903.313L78.8382 973.091V1386.95C101.601 1455.13 184.91 1575.6 336.052 1512.07"
                      stroke="#F08E34"
                      strokeWidth="2"
                    />
                  </svg>
                </div> */}
              </>
            }
          />

          <Route
            path="/add_partner"
            element={<Partner colorCode={colorCode} />}
          />
          <Route path="/about_us" element={<AboutUs colorCode={colorCode} />} />
          <Route
            path="/contact_us"
            element={<ContactUs colorCode={colorCode} />}
          />
          <Route
            path="/home_loan"
            element={<Home homeLoan={homeLoan} colorCode={colorCode} />}
          />
          <Route
            path="/personal_loan"
            element={
              <PersonLoan personalLoan={personalLoan} colorCode={colorCode} />
            }
          />
        </Routes>
        <Footer colorCode={colorCode} />
      </Router>
    </div>
  );
}

export default App;
