import { loadData } from "../../data/dummy_data";

import "./Loans.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Loans = ({ colorCode }) => {
  // const [loanModalOpen, setLoanModalOpen] = useState(false);

  const openLoanModal = () => {
    // setLoanModalOpen(true);
  };

  return (
    <div className="modal-main-card">
      <div className="main-loan">
        {loadData.map((item, key) => (
          <div key={key} className="wrapper">
            <div className="single-card">
              <div className="front">
                <img
                  className="front-image"
                  src={item.image}
                  alt="load-images"
                />
                <p className="loan-type">{item.type}</p>
              </div>
              <div className="back">
                <div className="inner-loan">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span
                    onClick={openLoanModal}
                    style={{
                      color: colorCode,
                      borderBottom: `2px solid ${colorCode}`,
                    }}
                    className="loan-readme"
                  >
                    Read me
                    <AiOutlineArrowRight
                      style={{
                        color: colorCode,
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
