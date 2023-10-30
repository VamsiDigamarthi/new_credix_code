import { useState } from "react";
import "./EMICalculator.css";

export const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interest, setInterest] = useState(10);
  const [tenure, setTenure] = useState(3);
  // console.log(loanAmount);
  const newTenure = Number(tenure) * 12;
  // interest
  const typoInterest = Number(interest);
  const finalInterest = typoInterest / 12 / 100;

  const firstPow = Math.pow(1 + finalInterest, newTenure);
  const secondPow = Math.pow(1 + finalInterest, newTenure) - 1;
  // secondPow = secondPow - 1;

  const typoAmount = Number(loanAmount);
  const value = (typoAmount * finalInterest * firstPow) / secondPow;

  const valueOfTour = newTenure * value;

  const totalInterestPay = valueOfTour - typoAmount;

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
