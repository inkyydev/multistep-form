import { Field, ErrorMessage } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";
import InsuranceSummaryTable from "../InsuranceSummaryTable";

export default function Attestation({ step, stepStep, submissions }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Attestation</h2>
        <div className="attestation-wrapper">
          <h3>Insurance Summary</h3>
          <InsuranceSummaryTable setSubmissions={submissions} />
          <div className="radio-buttons">
            <label>
              <Field type="checkbox" name="insuranceInformation" />
              <span>
                I attest that the insurance information entered is accurate.
              </span>
            </label>
            <ErrorMessage
              name="insuranceInformation"
              component="div"
              className="error-message-fields"
            />
          </div>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={stepStep} nextText="Save" />
    </>
  );
}
