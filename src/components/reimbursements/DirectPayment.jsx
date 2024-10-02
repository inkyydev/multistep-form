import { Field } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";

import dollarsImg from "../../assets/dollars-img.svg";

export default function DirectPayment({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <div className="payment-instructions-wrapper">
          <h2>Direct Payment Instructions</h2>
          <div className="check-example-wrapper">
            <div className="check-header">
              <span>1001</span>
              <p>00-00/000</p>
              <p className="date-span">DATE</p>
              <div className="separator"></div>
            </div>
            <div className="paytoorder-wrapper">
              <p>PAY TO THE ORDER OF</p>
              <div className="check-recipient-wrapper">
                <div className="form-group">
                  <Field
                    type="text"
                    placeholder="Check Recipient"
                    name="checkRecipient"
                  />
                </div>
              </div>
              <span>$</span>
              <div className="premium-wrapper">
                <div className="form-group">
                  <Field type="text" placeholder="Premium" name="premium" />
                </div>
              </div>
            </div>
            <img src={dollarsImg} alt="img" />
            <div className="for-paymeny-wrapper">
              <p>For</p>
              <div className="policy-holder-wrapper">
                <div className="form-group">
                  <Field
                    type="text"
                    placeholder="Policy Holder = []"
                    name="policyHolder"
                  />
                </div>
              </div>
              <div className="policy-id-wrapper">
                <div className="form-group">
                  <Field
                    type="text"
                    placeholder="Policy ID = []"
                    name="policyId"
                  />
                </div>
              </div>
            </div>
          </div>

          <p>
            Please verify that the information on the check is correct and meets
            the specifications of your carrier
          </p>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} />
    </>
  );
}
