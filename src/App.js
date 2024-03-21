// import { useEffect, useState } from "react";
import "./App.css";
import { CallBack } from "./components/CallBack/CallBack";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
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
import Navbar from "./components/Navbar/Navbar";

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

  // console.log(colorCode);

  return (
    <div className="App">
      <Router>
        <Navbar colorCode={colorCode} />
        <Color setColorCode={setColorCode} colorCode={colorCode} />
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  marginTop: "80px",
                  padding: "50px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                <Hero colorCode={colorCode} />
                <Loans colorCode={colorCode} />
                <Services colorCode={colorCode} />
                <ServiceProviders />
                <CallBack colorCode={colorCode} />
                <OtherCard colorCode={colorCode} />
                <Testimonials colorCode={colorCode} />
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
