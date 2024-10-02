import { Field, ErrorMessage } from "formik";

import ButtonPrevNext from "../ButtonPrevNext";

export default function InsuranceStatus({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Insurance Status</h2>
        <h3>
          Do you currently have individual coverage health insurance or Medicare
          for any part of the plan year from [Employee_Plan_Year_Start_Date] to
          [Employee_Plan_Year_End_Date]?{" "}
        </h3>
        <div className="form-control radio-buttons">
          <label>
            <Field name="insuranceStatus" type="radio" value="Yes" />
            <span>Yes</span>
          </label>
          <label>
            <Field name="insuranceStatus" type="radio" value="No" />
            <span>No</span>
          </label>
          <ErrorMessage
            name="insuranceStatus"
            className="error-message-fields"
            component="div"
          />
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep}></ButtonPrevNext>
    </>
  );
}
