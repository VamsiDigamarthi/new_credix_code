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
import BussinessLoan from "./components/BussinessLoan/BussinessLoan";
import Education from "./components/EducationLoan/EducationLoan";
import { CarLoan } from "./components/CarLoan/CarLoan";
import { BalanceTransfer } from "./components/BalanceTransfer/BalanceTransfer";
import { EMICalculator } from "./components/EMICalculator/EMICalculator";
import { CompareHomeLoan } from "./components/CompareHomeLoan/CompareHomeLoan";
import { CompareBusinessLoan } from "./components/CompareBusinessLoan/CompareBusinessLoan";
import { OtherCard } from "./components/OtherCard/OtherCard";
import { ServiceProviders } from "./components/ServiceProviders/ServiceProviders";

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
              <div
                style={{
                  marginTop: "60px",
                }}
              >
                <Hero colorCode={colorCode} />
                <Loans colorCode={colorCode} />
                <Services colorCode={colorCode} />
                <ServiceProviders />
                <CallBack colorCode={colorCode} />
                <OtherCard colorCode={colorCode} />
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
              </div>
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
          <Route path="/home_loan" element={<Home colorCode={colorCode} />} />
          <Route
            path="/personal_loan"
            element={<PersonLoan colorCode={colorCode} />}
          />
          <Route
            path="/businee_loan"
            element={<BussinessLoan colorCode={colorCode} />}
          />
          <Route
            path="/educational_loan"
            element={<Education colorCode={colorCode} />}
          />
          <Route path="/car_loan" element={<CarLoan colorCode={colorCode} />} />
          <Route
            path="/balance_transfer"
            element={<BalanceTransfer colorCode={colorCode} />}
          />
          <Route
            path="/emi__calculator"
            element={<EMICalculator colorCode={colorCode} />}
          />
          <Route path="/compare_home_loan" element={<CompareHomeLoan />} />

          <Route
            path="/compare_business_loan"
            element={<CompareBusinessLoan />}
          />
        </Routes>
        <Footer colorCode={colorCode} />
      </Router>
    </div>
  );
}

export default App;
