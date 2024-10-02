import { Field } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";

import IchraElihibility from "./IchraEligibility";
import PtcDiscussion from "./PtcDiscussion";
import Exit from "./Exit";
import CreateAccount from "./CreateAccount";
import CheckAffordability from "./CheckAffordability";

export default function AcceptDecline({
  step,
  setStep,
  steps,
  setSteps,
  currentValue,
}) {
  const handleAccept = () => {
    if (currentValue === "Individual coverage") {
      setSteps([
        IchraElihibility,
        PtcDiscussion,
        CheckAffordability,
        AcceptDecline,
        CreateAccount,
      ]);
    } else if (currentValue === "Medicare") {
      setSteps([IchraElihibility, AcceptDecline, CreateAccount]);
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handleDecline = () => {
    setSteps((prevSteps) => [...prevSteps.slice(0, step + 1), Exit]);
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <div className="form-content-wrapper">
        <h2>Accept Decline</h2>
        <h4>
          A full description of your ICHRA benefit is provided in the following
          documents:
        </h4>
        <div className="list-wrapper">
          <ul>
            <li>ICHRA Summary Plan Document</li>
            <li>ICHRA Appendix A</li>
          </ul>
        </div>
        <div className="accept-decline-field">
          <h4>Your ICHRA benefit on a monthly basis is:</h4>
          <div className="check-aff-wrapper d-flex">
            <div className="form-group d-flex-50">
              <label>
                <span>Please Enter Your Zipcode</span>
                <Field
                  name="ichraBenefit"
                  type="text"
                  placeholder=" 10.000.00"
                />
              </label>
            </div>
          </div>
          <h4 className="accept-heading">
            Do you wish to accept or decline your ICHRA benefit?
          </h4>
        </div>
      </div>
      <ButtonPrevNext
        step={step}
        setStep={setStep}
        nextText="Accept"
        backText="Decline"
        nextSteps={handleAccept}
        backSteps={handleDecline}
      />
    </>
  );
}
