import React from "react";
import "./feature2.scss";

const applicationSteps = [
  {
    title: "1",
    h2: "Select Loan Tenure",
    p: " Choose your loan amount & repayment tenure",
  },
  {
    title: "2",
    h2: "Upload Documents",
    p: "Complete your KYC and Verify income",
  },
  {
    title: "3",
    h2: "Amount Disbursed",
    p: "Direct Bank A/c transfer in a few minutes!",
  },
];
function Feature2() {
  return (
    <div className="app__container flex flex-col justify-center items-center feature2__wrapper">
      <h2 className="">Easy Application Process</h2>
      <p>
        The best part about applying for an instant loan is that it saves you
        valuable time as you don’t need to visit a bank or fill out lengthy
        documents. So, the next time you’re in need of funds for a wedding
        party, a medical emergency, a home renovation project, or even a new
        business venture, just apply for an instant loan{" "}
      </p>
      <div>
        {applicationSteps.map((item, index) => (
          <div
            className="application__process-steps flex flex-col items-end"
            key={index}
          >
            <div>{item.title}</div>
            <h2>{item.h2}</h2>
            <p>{item.p}</p>
          </div>
        ))}
      </div>
      <button>Downlaod Dhan APP</button>
    </div>
  );
}

export default Feature2;
