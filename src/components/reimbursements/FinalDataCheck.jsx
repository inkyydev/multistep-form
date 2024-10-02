import { Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { FormContext } from "../../FormContext";

import InsuranceSummaryTable from "../InsuranceSummaryTable";
import PaymentTable from "../PaymentTable";
import BankTable from "../BankTable";

import ButtonPrevNext from "../ButtonPrevNext";
export default function FinalDataCheck({ step, setStep, tableStep }) {
  const { healthSubmissions } = useContext(FormContext);

  return (
    <>
      <div className="form-content-wrapper">
        <h2>Final Data Check</h2>
        <div className="attestation-wrapper">
          <h3>Insurance Summary</h3>
          <InsuranceSummaryTable setSubmissions={healthSubmissions} />
          {!tableStep && <PaymentTable />}
          {tableStep && <BankTable />}
        </div>
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
      <ButtonPrevNext step={step} setStep={setStep} />
    </>
  );
}
