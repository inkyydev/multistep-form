import { Field, ErrorMessage } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";

export default function PayrollAttestation({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Payroll Attestation</h2>
        <p>
          <b>
            By selecting the direct payment option, I understand and agree to
            the following:
          </b>
        </p>
        <ul className="list-all">
          <li>
            My employer will pay my monthly health insurance premium of $752.00
            directly to my insurance company.
          </li>
          <li>My ICHRA will cover $400.00 of this premium.</li>
          <li>
            {" "}
            I authorize my employer to deduct the remaining $352.00 per month
            from my paycheck to cover the difference between my premium amount
            and my ICHRA allowance.
          </li>
          <li>
            {" "}
            I acknowledge that this payroll deduction will continue each month
            as long as I am enrolled in this health insurance plan and my ICHRA
            is active.
          </li>
        </ul>
        <div className="radio-buttons payroll-terms">
          <label>
            <Field type="checkbox" name="payrollTerms" />
            <span>
              I agree to these terms and authorize the payroll deduction as
              outlined above
            </span>
          </label>
          <ErrorMessage
            name="payrollTerms"
            component="div"
            className="error-message-fields"
          />
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} nextText="Save" />
    </>
  );
}
