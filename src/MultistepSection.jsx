import { useState, useContext } from "react";
import { FormContext } from "./FormContext";

import MultistepFormOnboard from "./MultistepFormOnboard";
import MultistepFormHealth from "./MultistepFormHealts";
import MultistepFormReimbursement from "./MultistepFormReimbursement";

import logo from "./assets/logo.svg";
import roadmapFlag from "./assets/roadmap-flag.svg";
import roadmapArrow from "./assets/roadmap-wrapper.svg";

export default function MultistepSection() {
  const [mobileRoadmap, setMobileRoadmap] = useState(false);
  const { currentForm, currentStep } = useContext(FormContext);

  const forms = {
    onboard: {
      name: "Onboard",
      component: <MultistepFormOnboard />,
      steps: ["ICHRA Eligibility", "ICHRA Participation", "Create Account"],
    },
    health: {
      name: "Health Insurance",
      component: <MultistepFormHealth />,
      steps: ["Insurance Status", "Spouse & Dependents", "Insurance Proof"],
    },
    reimbursement: {
      name: "Reimbursement",
      component: <MultistepFormReimbursement />,
      steps: ["Reimbursement Explanation ", "Reimbursement Information"],
    },
  };

  const handleRoadmap = () => {
    setMobileRoadmap((prevState) => !prevState);
  };

  return (
    <section id="multistep_section">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="container">
        <div className="form-wrapper">
          <div className={`form-wrapper__nav ${mobileRoadmap ? "active" : ""}`}>
            <div className="roadmap-mobile" onClick={handleRoadmap}>
              <div className="roadmap-left">
                <img src={roadmapFlag} alt="flag" />
                Roadmap
              </div>
              <div className="roadmap-right">
                <img
                  src={roadmapArrow}
                  alt="arrow"
                  style={{
                    transform: mobileRoadmap
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </div>
            </div>
            <div className="nav-single__wrapper">
              {Object.keys(forms).map((formName) => (
                <div
                  key={formName}
                  className={`nav-single ${
                    currentForm === formName ? "active" : ""
                  }`}
                >
                  <span>{forms[formName].name}</span>
                  <div className="nav-wrapper">
                    {forms[formName].steps.map((stepLabel, index) => (
                      <div
                        key={index}
                        className={index <= currentStep ? "active-step" : ""}
                      >
                        {stepLabel}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="form-wrapper__multistep--form">
            {forms[currentForm].component}
          </div>
        </div>
      </div>
    </section>
  );
}
