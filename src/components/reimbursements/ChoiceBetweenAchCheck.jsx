import ButtonPrevNext from "../ButtonPrevNext";

import { Field, ErrorMessage } from "formik";

export default function ChoiceBetweenAchCheck({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Choice between ACH Direct Payment</h2>
        <h3>
          Your employer offers two convenient ways to manage your health expense
          reimbursements. Choose the option that works best for you:
        </h3>
        <div className="form-control radio-buttons payment-wrapper">
          <label>
            <Field
              name="paymentOption"
              type="radio"
              value="ACH Reimbursement"
            />
            <span>
              <b>Option 1: ACH Reimbursement </b>
              <ul className="list-all">
                <li>
                  <b>Pay Your Expenses:</b> First, pay for your eligible health
                  expenses upfront.
                </li>
                <li>
                  <b>Submit a Claim:</b> After payment, submit your claim
                  through Salusion’s platform.
                </li>
                <li>
                  <b>Get Reimbursed:</b> Once your claim is approved, your
                  employer will directly deposit the reimbursement into your
                  bank account via ACH.
                </li>
              </ul>
            </span>
          </label>
          <label>
            <Field
              name="paymentOption"
              type="radio"
              value="Direct Payment by Employer"
            />
            <span>
              <b>Option 2: Direct Payment by Employer</b>
              <ul className="list-all">
                <li>
                  <b>Employer Pays Directly:</b> Your employer will pay your
                  health insurance premiums directly to the insurance carrier.
                </li>
                <li>
                  <b>Payroll Deduction:</b> The difference between the premium
                  amount and your HRA allowance will be deducted from your
                  paycheck.
                </li>
              </ul>
            </span>
            <p>
              Select the option that best suits your needs, and Salusion will
              guide you through the next steps.
            </p>
          </label>
          <ErrorMessage
            name="paymentOption"
            className="error-message-fields"
            component="div"
          />
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} />
    </>
  );
}
