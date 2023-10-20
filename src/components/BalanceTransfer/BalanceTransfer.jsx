import "./BalanceTransfer.css";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "../../data/animation";

export const BalanceTransfer = ({ colorCode }) => {
  const style = {
    color: colorCode,
  };
  const transition = { type: "spring", duration: 1 };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="balance__main__card">
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Balance Transfer Your Loan
      </motion.h2>
      <motion.strong
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        style={style}
      >
        When was the last time you checked your home loan statement?
      </motion.strong>
      <motion.strong
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        style={style}
      >
        Has your loan tenure increased since your signed up?
      </motion.strong>
      <motion.strong
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        style={style}
      >
        Are you paying more than 10.5% interest on your home loan?
      </motion.strong>
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        {" "}
        Save Money With A Home Loan Balance Transfer!
      </motion.h2>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Many people don’t know that banks don’t increase Home Loan EMIs but they
        increase the tenure of the home loan when the floating interest rate
        increases. If you are paying 11-12% interest rate on your home loan then
        we can help you save a lot of money.
      </motion.p>
      <motion.strong
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Fill The Form On The Right To Get The Best Rate For Your Home Loan
        Balance Transfer.
      </motion.strong>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Pre-payment of your home loan does not have any penalty and switching
        your home loan balance to a new bank has never been easier! Balance
        Transfer for Home Loans and Personal Loans is a product, offering the
        customer a choice to transfer the outstanding balance of the home loan
        availed for better terms & conditions, EMIs and possibly well sized
        savings that could be better invested elsewhere.
      </motion.p>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Many customers look at Home Loan Balance Transfers as making their loans
        more efficient. In some cases, the nature of Floating Interest Rates
        leaves customers with longer tenures, higher EMIs and so on. Many
        customers find their solution in Home Loan Balance Transfers which help
        to move from higher rate of interest to lower rate of interest or
        increase in loan components as Top ups.
      </motion.p>
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Personal Loan Balance Transfer
      </motion.h2>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        High value personal loans, loan against property, and multiple loans
        from different banks and credit cards can be consolidated into one high
        value loan using Personal Loan Balance Transfers. Due to floating
        interest rates being the norm for high value loans, customers may still
        retain their original EMIs but might end up with a much longer loan
        tenure. This is an undesirable situation for a loa taker, but a position
        that many find themselves in. A personal loan balance transfer can help
        customers better manage their various loan products, possibly with a
        more competitive interest rate.
      </motion.p>
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Top Up Your Home Loan & Personal Loan
      </motion.h2>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Customers can apply for a Top-Up on their Home Loans & Personal Loans
        using the Balance Transfer facility as and when they need to meet their
        personal requirements (other than for speculative purposes) or to
        possibly consolidate two loans from seperate banks to a single larger
        loan from a different banking provider, with a more competitive interest
        rate. Customers can benefit from some additional funds against the
        security of property. Customers opt for top up loans for many reasons,
        some of which are mentioned below
      </motion.p>
      <div className="p__value">
        <motion.p
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={transition}
        >
          Furnish your home
        </motion.p>
        <motion.p
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 2 }}
        >
          Buy consumer durables
        </motion.p>
        <motion.p
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 3 }}
        >
          Child’s education expenses
        </motion.p>
        <motion.p
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 4 }}
        >
          Daughterís marriage
        </motion.p>
        <motion.p
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 5 }}
        >
          Family holiday
        </motion.p>
        <motion.p
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 6 }}
        >
          Buy a new vehicle
        </motion.p>
        <motion.p
          initial={{ x: mobile ? "60px" : "-20rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ ...transition, duration: 7 }}
        >
          Consolidate two active loans under a single provider
        </motion.p>
      </div>
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Eligibility For Balance Transfer
      </motion.h2>

      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Home Loan balance transfers and personal loan balance transfers have
        stringent eligibility requirements that one is typically familiar with
        while taking a home loan or a personal loan. Click to know about the
        eligibility requirements for Home Loan Balance Transfers
      </motion.p>
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Documentation for Balance Transfer
      </motion.h2>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Just like the documentation requirements for Home Loans and personal
        loans, applicants will need to provide a set of documents to approv the
        home loan balance transfer. Click to know more details on Home Loan
        Balance Transfer Document Requirements
      </motion.p>
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        More Information on Balance Transfer
      </motion.h2>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Home Loan & Personal Loan Balance Transfers are primarily used for High
        value loans, where rising tenures and expensive EMIs become too
        troublesome, due to flux in market conditions. A Home Loan Balance
        Transfer can go a long way in helping sustain a long tenure home loan or
        loan against property and also gives one the option of working with
        competing banks for better rates.
      </motion.p>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        CredEx Loans is a product of CredEx Sales & Distribution, and works with
        over 35 preferred banks. A list of banks CredEx works with are Axis
        Bank, Bajaj Finserve, Cholamandalam, Citibank, DCB, Deutsche Bank, DHFL,
        ECL Finance, EDELWEISS, First Blue, Fulletron, Capital First, HDB
        Financial Services, HDFC BANK LTD, HDFC LTD, HSBC, ICICI Bank Ltd,
        IndiaBulls Financial Services Pvt Ltd, Indiainfoline, Indusind Bank, ING
        Vysa Bank Ltd, Investment financial Services Pvt Ltd, Karvy Financial
        Services Pvt Ltd, Kotak Mahindra Bank Ltd, Magma Finance, Money line,
        Punjab and National Bank, Reliance, Religare, Standard Chartered Bank,
        Shriram City, Tata Capital, Electronica Finance Limited, Money Matters
        Finance Ltd to name a few.
      </motion.p>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        credex.in offers home loan and general purpose loan balance transfers
        from a variety of banks that it has worked with for over 20 years! We
        give you the most competitive rates and special offers that you will
        never find elsewhere.
      </motion.p>
    </div>
  );
};
