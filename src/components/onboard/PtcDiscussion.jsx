import ButtonPrevNext from "../ButtonPrevNext";

import IchraElihibility from "./IchraEligibility";
import CheckAffordability from "./CheckAffordability";
import AcceptDecline from "./AcceptDecline";
import CreateAccount from "./CreateAccount";

export default function PtcDiscussion({ step, setStep, steps, setSteps }) {
  const handleNextStep = () => {
    setSteps([IchraElihibility, PtcDiscussion, AcceptDecline, CreateAccount]);
    setStep((prevStep) => prevStep + 1);
  };

  const handleNextStepAffordability = () => {
    setSteps([
      IchraElihibility,
      PtcDiscussion,
      CheckAffordability,
      AcceptDecline,
    ]);
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <div className="form-content-wrapper">
        <h2>PTC Discussion</h2>
        <h3>
          If you qualify or think you might qualify for premium tax credits on
          individual coverage insurance purchased through the marketplace,
          please read this section carefully.
        </h3>
        <div className="list-wrapper">
          <ul>
            <h4>If your ICHRA is considered “Affordable”:</h4>
            <li>You and your family will not receive premium tax credits</li>
            <h4>If you accept the ICHRA</h4>
            <li>You and your family will not receive premium tax credits.</li>
            <h4>If your ICHRA is considered “Unaffordable”:</h4>
            <li>
              You can decline the ICHRA and maintain eligibility to receive
              premium tax credits
            </li>
          </ul>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} nextSteps={handleNextStep}>
        <button
          onClick={handleNextStepAffordability}
          className="check-affordabiity"
          type="submit"
        >
          Check Affordability
        </button>
      </ButtonPrevNext>
    </>
  );
}
