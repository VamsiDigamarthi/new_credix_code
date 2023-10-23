import { useState } from "react";
import "./EMICalculator.css";
// import { withStyles } from "@mui/material";
// import Slider from "@material-ui/core/Slider";
// import Typography from "@mui/material";

// const PrettoSlider = withStyles({
//   root: { color: "MediumVioletRed", heigt: 10 },
//   thumb: {
//     heigt: 25,
//     width: 25,
//     backgroundColor: "white",
//     border: "3px solid black",
//     marginTop: -9,
//     marginLeft: -9,
//   },
//   track: { height: 10, borderRadius: 4 },
//   rail: { height: 10, borderRadius: 4 },
// })(Slider);

export const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interest, setInterest] = useState(10);
  const [tenure, setTenure] = useState(3);
  // console.log(loanAmount);

  let newTenure = Number(tenure) * 12;
  // interest
  let typoInterest = Number(interest);
  let finalInterest = typoInterest / 12 / 100;

  let firstPow = Math.pow(1 + finalInterest, newTenure);
  let secondPow = Math.pow(1 + finalInterest, newTenure);
  secondPow = secondPow - 1;

  let typoAmount = Number(loanAmount);
  let value = (typoAmount * finalInterest * firstPow) / secondPow;

  let valueOfTour = newTenure * value;

  let totalInterestPay = valueOfTour - typoAmount;

  return (
    <div className="emi__cal__card">
      <div className="inner__emi__card">
        <h3>EMI calculator</h3>
        <div>
          <div>
            <div className="emi__input__card">
              <div>
                <span>Loan Amount</span>
                <span>{loanAmount}</span>
              </div>
              <div className="double__input__card">
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
                <input
                  type="text"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="emi__input__card">
              <div>
                <span>Loan Interest</span>
                <span>{interest} %</span>
              </div>
              <div className="double__input__card">
                <input
                  type="range"
                  min="0"
                  max="35"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
              </div>
            </div>
            <div className="emi__input__card">
              <div>
                <span>Tenure in Years</span>
                <span>{tenure} </span>
              </div>
              <div className="double__input__card">
                <input
                  type="range"
                  min="0"
                  max="35"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
                <input
                  type="text"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="calculate__card">
            <h5>Calculate EMI</h5>
            <div className="loan__emi__show__box">
              <span
                style={{
                  color: "orange",
                }}
              >
                $ {value.toFixed(1)}
              </span>
              <span>Monthly EMI</span>
            </div>
            <div className="loan__emi__show__box">
              <span
                style={{
                  color: "orange",
                }}
              >
                $ {totalInterestPay.toFixed(1)}
              </span>
              <span>Total Interest</span>
            </div>
            <div className="loan__emi__show__box">
              <span
                style={{
                  color: "orange",
                }}
              >
                $ {valueOfTour.toFixed(1)}
              </span>
              <span>Total Pay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
