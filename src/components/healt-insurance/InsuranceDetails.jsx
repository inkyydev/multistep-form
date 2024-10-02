import { Field, ErrorMessage } from "formik";

import ButtonPrevNext from "../ButtonPrevNext";
export default function InsuranceDetails({ step, setStep, submissions }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Add Insurance Details</h2>
        <div className="d-flex">
          <div className="form-group d-flex-50">
            <label>
              <span>Insurance Carrier</span>
              <Field
                type="text"
                name="insuranceCarrier"
                placeholder="Insurane Carrier"
              />
            </label>
            <ErrorMessage
              name="insuranceCarrier"
              component="div"
              className="error-message-fields"
            />
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Policy ID</span>
              <Field type="text" name="policyId" placeholder="Policy ID" />
              <ErrorMessage
                name="policyId"
                component="div"
                className="error-message-fields"
              />
            </label>
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Monthly Premium</span>
              <Field type="text" name="monthlyPremium" placeholder="$0.00" />
              <ErrorMessage
                name="monthlyPremium"
                component="div"
                className="error-message-fields"
              />
            </label>
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Policy Holder</span>
              <Field
                as="select"
                name="policyHolder"
                placeholder="Policy Holder"
              >
                <option value="" disabled>
                  Select Policy Holder
                </option>
                {submissions.map((submission) => (
                  <option
                    key={submission.id}
                    value={`${submission.firstName} ${submission.lastName}`}
                  >
                    {submission.firstName} {submission.lastName}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="policyHolder"
                component="div"
                className="error-message-fields"
              />
            </label>
          </div>
          <div className="insurance-details-radio">
            <h3>What type of individual coverage insurance do you have?</h3>
            <div className="radio-buttons">
              <label>
                <Field
                  name="isuranceCoverage"
                  type="radio"
                  value="Marketplace"
                />
                <span>Marketplace</span>
              </label>
              <label>
                <Field
                  name="isuranceCoverage"
                  type="radio"
                  value="Direct from Insurance Carrier"
                />
                <span>Direct from Insurance Carrier</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} nextText="Accept" />
    </>
  );
}
