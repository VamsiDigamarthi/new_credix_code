import "./CarLoan.css";
import { motion } from "framer-motion";
import { desVariants, titleVariants } from "../../data/animation";

export const CarLoan = ({ colorCode }) => {
  return (
    <div className="car__loan__card">
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Car Loan
      </motion.h2>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
      >
        There was a time when owning a car was a luxury not all could afford to
        have. Buying a car was a life milestone for everyone who could shell out
        those huge amounts of money all at once to buy their dream car. With
        growing times, changing demographics and emerging car loan lenders, for
        a majority of the Indian middle class, owning a car today is no longer a
        luxury, but in fact a necessity made possible by taking a car loan.
      </motion.p>
      <motion.p
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
      >
        You cannot imagine living without a car because that would restrict you
        form going places for work, duties or leisure, hindering a good social
        and professional life. But with newer technologies and lesser resources,
        the cost of cars are on a rise, often making it extremely difficult for
        the average individual to purchase their vehicle outright only using
        ones savings. Therefore, viewing the huge demand for financing both used
        and new cars, leading loan lenders in India offer car loans, which are
        floated products, which enable you to purchase your car and pay off the
        car loan amount borrowed bit by bit through car loan EMIs or
        installments.
      </motion.p>
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Benefits of Car Loans
      </motion.h2>
      <motion.strong
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        style={{
          color: colorCode,
        }}
      >
        In India, apart from the issue that paying such a huge sum of cash may
        disturb one's budget, massive purchases with liquid cash could put you
        on the Income Tax department's radar as well. When you get a car loan to
        pay for your car, you manage to retain your savings for other current
        and future expenses. One of the greatest car loan benefits in India that
        the loan is secured against the car itself, so, you do not have to
        mortgage your property or other assets to get a car loan. You also get
        to use your car while you are servicing the car loan term, so a few
        years down the line you have added to your original savings and have the
        opportunity to own the car having paid off your car loan completely.
        This gives you the chance to augment crucial credit history by procuring
        a car loan and strictly adhering to the repayment cycle. A good credit
        history including timely payments and cleared debts help you obtain
        further loans in the future. Car loans, therefore, are a very safe and
        certain way of purchasing your own car.
      </motion.strong>
      <motion.h2
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
      >
        Car Loan Characteristics
      </motion.h2>
      <p>Car loans in India generally carry the following features:</p>
      <motion.strong
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        style={{
          color: colorCode,
        }}
      >
        One can opt for new or used car loan depending upon the need and the
        kind of car requirement. Though, most people prefer a car loan over new
        cars and not the second hand ones. Car loan option in India, for a
        majority, is an alternative that lets them purchase a car which is
        better than the one available in their budget since the car loan
        approval is quick. Car loans in India generally provide a fixed rate of
        interest option while repayment through EMIs. This keeps you assured of
        a fixed repayable amount on a monthly basis towards the car loan,
        facilitating better budget planning without disturbing your usual
        expenses.
      </motion.strong>
      <motion.strong
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        style={{
          color: colorCode,
        }}
      >
        A bank offering car loan mostly also provide flexible repayment tenure
        options of 1-7 years to repay the car loan amount in regular EMIs. Car
        loans in India are often easier to avail when compared to any other
        loans and involves easy documentation with clear instructions and
        guidance throughout the full car loan approval and sanction process.
      </motion.strong>
      <motion.strong
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        style={{
          color: colorCode,
        }}
      >
        Car loan borrowers can avail loans up to Rs. 1.5 cores, mostly
        comprising of 100% of the vehicle's on-road price. Most banks have
        reasonable EMIs within flexible tenure options to offer on Car loans.
      </motion.strong>
    </div>
  );
};
