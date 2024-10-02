import { Field, ErrorMessage } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";

export default function IchraElihibility({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>ICHRA Eligibility</h2>
        <h3>
          What type of health coverage will you have during the ICHRA plan year
          from [Employee_Plan_Year_Start_Date] to [Employee_Plan_Year_End_Date]?
        </h3>
        <h4>Please select one:</h4>
        <div className="form-control radio-buttons">
          <label>
            <Field
              name="ichraEligibility"
              type="radio"
              value="Individual coverage"
            />
            <span>Individual coverage</span>
          </label>
          <label>
            <Field
              name="ichraEligibility"
              type="radio"
              value="Group coverage through spouse or parent"
            />
            <span>Group coverage through spouse or parent</span>
          </label>
          <label>
            <Field name="ichraEligibility" type="radio" value="Medicare" />
            <span>Medicare</span>
          </label>
          <label>
            <Field
              name="ichraEligibility"
              type="radio"
              value="Other types of insurance"
            />
            <span>Other types of insurance</span>
          </label>
          <label>
            <Field
              name="ichraEligibility"
              type="radio"
              value="I do not plan on being covered during this period"
            />
            <span>I do not plan on being covered during this period</span>
          </label>
          <ErrorMessage
            name="ichraEligibility"
            component="div"
            className="error-message"
          />
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep}></ButtonPrevNext>
    </>
  );
}
