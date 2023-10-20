import "./ServiceProviders.css";
import { motion } from "framer-motion";

export const ServiceProviders = () => {
  const transition = { type: "spring", duration: 3 };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="service__provider__card">
      <h1>Service Providers</h1>
      <motion.div
        initial={{ x: mobile ? "60px" : "-20rem" }}
        whileInView={{ x: "0rem" }}
        transition={transition}
        className="first__provider"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvclPVBLL19_ew6jC2opuQsanlXGsvCZImV2iXh0P&s"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Development_Credit_Bank.svg/2560px-Development_Credit_Bank.svg.png"
          alt=""
        />
        <img
          src="https://diningfiesta.yesbank.in/wp-content/themes/tgpl-root-theme/images/logo/Yes-Bank-new.png"
          alt=""
        />
        <img
          src="https://w7.pngwing.com/pngs/266/283/png-transparent-citibank-credit-card-logo-private-banking-bank-blue-text-service.png"
          alt=""
        />
        <img
          src="https://i.pinimg.com/originals/3a/6b/b7/3a6bb795a4f8166cee19885e82087c7b.png"
          alt=""
        />
        <img
          src="https://fxcard.indusind.com/iblcustomer/resources/images/induslnd-logo.jpg"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ x: mobile ? "60px" : "20rem" }}
        whileInView={{ x: "0rem" }}
        transition={transition}
        className="second__provider"
      >
        <div>
          <img
            src="https://www.equitybulls.com/equitybullsadmin/uploads/Equitas%20Small%20Finance%20Bank%20Limited%202.jpg"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/hi/6/63/Aditya_Birla_Group_logo.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Edelweiss_Group_logo.svg/1280px-Edelweiss_Group_logo.svg.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/DHFL_Brand_Logo.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Indiabulls_logo.svg/1280px-Indiabulls_logo.svg.png"
            alt=""
          />
          <img
            src="https://seeklogo.com/images/C/capital-float-logo-BE7E059274-seeklogo.com.png"
            alt=""
          />
          <img
            src="https://www.chittorgarh.com/images/ipo/InCred-Financial-Service-limited-logo.png"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};
